/* ==============================================================
   GreenBasket — App Core JS
   ============================================================== */

// ── AOS (Animate On Scroll) lightweight impl ──────────────────
function initAOS() {
  const els = document.querySelectorAll("[data-aos]");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("aos-animate"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach((el, i) => {
    const delay = parseInt(el.dataset.aosDelay || 0);
    el.style.transitionDelay = delay + "ms";
    io.observe(el);
  });
}

// ── Navbar ────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;

  // Scroll shadow
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    // Scroll-to-top button
    const btn = document.querySelector(".scroll-top");
    if (btn) btn.classList.toggle("visible", window.scrollY > 300);
  }, { passive: true });

  // Active link
  const links = document.querySelectorAll(".navbar__nav a");
  const current = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(a => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    if (href === current) a.classList.add("active");
  });

  // Hamburger
  const hamburger = document.querySelector(".navbar__hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      document.body.style.overflow = open ? "hidden" : "";
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = open ? "rotate(45deg) translate(5px,5px)" : "";
      spans[1].style.opacity  = open ? "0" : "1";
      spans[2].style.transform = open ? "rotate(-45deg) translate(5px,-5px)" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
}

// ── Search Bar ────────────────────────────────────────────────
function initSearch() {
  const inputs = document.querySelectorAll(".navbar__search input, .mobile-search input");
  inputs.forEach(input => {
    const dropdown = input.closest(".navbar__search")?.querySelector(".navbar__search-results");

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q || q.length < 2) { if (dropdown) dropdown.classList.remove("open"); return; }
      if (typeof PRODUCTS === "undefined") return;
      const results = PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.includes(q)
      ).slice(0, 6);
      if (!dropdown) { if (q.length >= 2) window.location.href = `shop.html?q=${encodeURIComponent(q)}`; return; }
      if (!results.length) { dropdown.innerHTML = `<div class="search-item"><span style="color:var(--gray-400);font-size:.85rem">No results for "${q}"</span></div>`; }
      else {
        dropdown.innerHTML = results.map(p => `
          <div class="search-item" onclick="location.href='product.html?id=${p.id}'">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/44x44/dcfce7/16a34a?text=GB'">
            <div>
              <div style="font-weight:600;font-size:.85rem">${p.name}</div>
              <div style="font-size:.75rem;color:var(--gray-400)">${p.brand} · ${fmt(p.price)}</div>
            </div>
          </div>
        `).join("");
      }
      dropdown.classList.add("open");
    });

    input.addEventListener("keydown", e => {
      if (e.key === "Enter" && input.value.trim()) {
        window.location.href = `shop.html?q=${encodeURIComponent(input.value.trim())}`;
        if (dropdown) dropdown.classList.remove("open");
      }
    });

    document.addEventListener("click", e => {
      if (dropdown && !input.closest(".navbar__search")?.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
}

// ── Cart Drawer ───────────────────────────────────────────────
function initCartDrawer() {
  const drawer  = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer) return;

  function open()  { drawer.classList.add("open"); overlay?.classList.add("open"); document.body.style.overflow = "hidden"; renderCartDrawer(); }
  function close() { drawer.classList.remove("open"); overlay?.classList.remove("open"); document.body.style.overflow = ""; }

  document.querySelectorAll("[data-open-cart]").forEach(el => el.addEventListener("click", open));
  document.getElementById("cart-close")?.addEventListener("click", close);
  overlay?.addEventListener("click", close);

  window.openCartDrawer  = open;
  window.closeCartDrawer = close;
}

function renderCartDrawer() {
  const container = document.getElementById("cart-drawer-items");
  const emptyEl   = document.getElementById("cart-drawer-empty");
  const footEl    = document.getElementById("cart-drawer-foot");
  if (!container) return;

  const cart = getCart();
  updateCartBadge();

  if (cart.length === 0) {
    container.innerHTML = "";
    emptyEl?.classList.remove("hidden");
    footEl?.classList.add("hidden");
    return;
  }
  emptyEl?.classList.add("hidden");
  footEl?.classList.remove("hidden");

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/68x68/dcfce7/16a34a?text=GB'">
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__brand">${item.brand}</div>
        <div class="cart-item__unit">${item.unit}</div>
        <div class="cart-item__bottom">
          <div class="cart-item__price">${fmt(item.price * item.qty)}</div>
          <div class="cart-item__qty">
            <button onclick="updateCartQty(${item.id},-1);renderCartDrawer()">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id},1);renderCartDrawer()">+</button>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart(${item.id});renderCartDrawer()" title="Remove">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  updateDrawerTotals();
}

function updateDrawerTotals(discount = 0) {
  const cart      = getCart();
  const subtotal  = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const delivery  = subtotal > 499 ? 0 : 49;
  const total     = subtotal - discount + delivery;
  const el = id => document.getElementById(id);
  if (el("drawer-subtotal")) el("drawer-subtotal").textContent = fmt(subtotal);
  if (el("drawer-discount")) {
    el("drawer-discount").textContent = discount > 0 ? `-${fmt(discount)}` : "—";
    el("drawer-discount").style.color = discount > 0 ? "var(--green-600)" : "";
  }
  if (el("drawer-delivery")) el("drawer-delivery").textContent = delivery === 0 ? "FREE" : fmt(delivery);
  if (el("drawer-total"))    el("drawer-total").textContent    = fmt(total);
  if (el("drawer-items-count")) el("drawer-items-count").textContent = getCartCount() + " item" + (getCartCount()!==1?"s":"");
  window._cartDiscount = discount;
}

// ── Coupon System ─────────────────────────────────────────────
const COUPONS = {
  "GREEN10":  { type:"pct", val:10, label:"10% off" },
  "FRESH20":  { type:"pct", val:20, label:"20% off" },
  "WELCOME50":{ type:"flat", val:50, label:"₹50 off" },
  "BASKET15": { type:"pct", val:15, label:"15% off" },
};

function applyCoupon(code) {
  const subtotal = getCartTotal();
  const msg  = document.getElementById("coupon-msg");
  const coupon = COUPONS[code?.trim().toUpperCase()];
  if (!coupon) {
    if (msg) { msg.textContent = "Invalid coupon code."; msg.className = "coupon-msg err"; }
    updateDrawerTotals(0);
    return 0;
  }
  const discount = coupon.type === "pct" ? Math.round(subtotal * coupon.val/100) : coupon.val;
  if (msg) { msg.textContent = `✓ Coupon applied: ${coupon.label}`; msg.className = "coupon-msg ok"; }
  updateDrawerTotals(discount);
  window._couponCode   = code.trim().toUpperCase();
  window._couponLabel  = coupon.label;
  return discount;
}

function initCoupon() {
  const applyBtn = document.getElementById("apply-coupon");
  if (!applyBtn) return;
  applyBtn.addEventListener("click", () => {
    const input = document.getElementById("coupon-input");
    applyCoupon(input?.value);
  });
  document.getElementById("coupon-input")?.addEventListener("keydown", e => {
    if (e.key === "Enter") applyCoupon(e.target.value);
  });
}

// ── Page Progress Bar ─────────────────────────────────────────
function initProgress() {
  const bar = document.getElementById("page-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + "%";
  }, { passive:true });
}

// ── Scroll-to-top ─────────────────────────────────────────────
function initScrollTop() {
  const btn = document.querySelector(".scroll-top");
  if (btn) btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

// ── Newsletter form ───────────────────────────────────────────
function initNewsletter() {
  document.querySelectorAll(".newsletter-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input");
      if (input?.value) {
        showToast("🎉 Subscribed successfully!");
        input.value = "";
      }
    });
  });
}

// ── Product card in-page wishlist toggle ──────────────────────
document.addEventListener("click", e => {
  const btn = e.target.closest(".wish-btn");
  if (!btn) return;
  const id   = parseInt(btn.dataset.id);
  const added = toggleWishlist(id);
  btn.classList.toggle("active", added);
  btn.innerHTML = added ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
  showToast(added ? "❤️ Added to wishlist" : "Removed from wishlist", added ? "success" : "info");
});

// ── Main init ─────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initSearch();
  initCartDrawer();
  initCoupon();
  initProgress();
  initScrollTop();
  initNewsletter();
  initAOS();

  // Mark wishlist buttons
  const wish = getWishlist();
  document.querySelectorAll(".wish-btn").forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (wish.includes(id)) {
      btn.classList.add("active");
      btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
  });
});
