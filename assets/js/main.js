// ========== CART MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartSidebar();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = totalItems;
    });
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

window.addToCart = function(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
    showNotification(`${name} added to cart!`, 'success');
    renderShopProducts(); // Re-render to update button states
};

window.updateQuantity = function(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
        saveCart();
        renderCartPage();
        renderShopProducts(); // Update shop page buttons
    }
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCartPage();
    renderShopProducts();
    showNotification('Item removed from cart', 'info');
};

function getItemQuantity(id) {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'error' ? 'error' : ''}`;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ========== CART SIDEBAR ==========
function renderCartSidebar() {
    const container = document.getElementById('cart-sidebar-items');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="text-center py-8 text-gray-500">Your cart is empty</div>';
        document.getElementById('cart-sidebar-total').textContent = '₹0';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-sidebar-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="flex-1">
                <h4 class="font-semibold">${item.name}</h4>
                <p class="text-orange-500 font-bold">₹${item.price}</p>
                <div class="flex items-center gap-2 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 border rounded-full">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 border rounded-full">+</button>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 ml-2"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="font-bold">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    document.getElementById('cart-sidebar-total').textContent = `₹${getCartTotal()}`;
}

function toggleCartSidebar() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('open');
}

// ========== HEADER & FOOTER ==========
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    headerPlaceholder.innerHTML = `
        <header class="main-header">
            <nav class="w-full border-b-2 border-green-300 lg:border-b-0">
                <div class="navbar bg-base-100 w-[90%] mx-auto py-2">
                    <div class="navbar-start">
                        <a href="index.html"><img class="w-40" src="assets/images/Rtlogo.png" alt="Logo" onerror="this.src='https://via.placeholder.com/160?text=RT'"></a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1 font-sora text-lg text-[#4b4b4b]">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop.html" id="shop-nav-link">Shop</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="navbar-end gap-4">
                        <details class="dropdown lg:hidden">
                            <summary class="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 font-extrabold text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </summary>
                            <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-sora">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="account.html">Account</a></li>
                            </ul>
                        </details>
                        <div class="hidden md:flex gap-4 items-center">
                            <a href="account.html" class="text-gray-600 hover:text-green-600"><i class="fa-solid fa-user text-xl"></i></a>
                            <button onclick="toggleCartSidebar()" class="relative">
                                <i class="fa-solid fa-cart-shopping text-xl text-gray-600"></i>
                                <span class="cart-count absolute -top-2 -right-3 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">0</span>
                            </button>
                            <a href="login.html" class="btn w-20 text-black font-sora bg-white border-green-600">Login</a>
                            <a href="login.html" class="btn btn-success border-none bg-btn-primary text-white font-sora px-6">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Add shop link protection
    const shopLink = document.getElementById('shop-nav-link');
    if (shopLink) {
        shopLink.addEventListener('click', (e) => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                e.preventDefault();
                sessionStorage.setItem('redirectAfterLogin', 'shop.html');
                window.location.href = 'login.html';
            }
        });
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    footerPlaceholder.innerHTML = `
        <div class="relative mt-20">
            <div class="absolute w-5/6 -top-28 left-1/2 transform -translate-x-1/2 lg:w-5/6 flex flex-col lg:flex-row gap-4 p-6 bg-[#EFEBE4] rounded-3xl z-20 shadow-xl">
                <div class="lg:p-4">
                    <img src="assets/images/logofooter.png" alt="Newsletter" class="w-24" onerror="this.src='https://via.placeholder.com/96'">
                </div>
                <div class="flex flex-col gap-4 justify-center items-center lg:items-start text-center">
                    <h2 class="text-2xl lg:text-3xl font-bold text-green-600">Get Grocery News!</h2>
                    <p class="text-sm lg:text-lg">Exclusive training tips, tricks, product deals and more.</p>
                    <div class="flex w-full max-w-md gap-2">
                        <input id="newsletter-email" class="flex-1 p-3 rounded-lg border border-gray-300" type="email" placeholder="Enter email....">
                        <button onclick="subscribeNewsletter()" class="text-white bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition">Subscribe</button>
                    </div>
                </div>
            </div>
            <footer class="footer-modern relative pt-48 pb-16 text-white">
                <div class="container mx-auto px-4 lg:px-20">
                    <div class="flex flex-col gap-12 lg:flex-row lg:justify-between">
                        <div>
                            <img src="assets/images/Rtlogo.png" alt="Logo" class="w-40 mb-4 footer-logo" onerror="this.src='https://via.placeholder.com/160'">
                            <p class="text-lg text-gray-300">Fresh groceries delivered to your <br> doorstep with love and care.</p>
                        </div>
                        <div>
                            <h5 class="text-xl font-semibold mb-4">Quick Links</h5>
                            <ul class="flex flex-col gap-3 text-lg text-gray-300">
                                <li><a href="index.html" class="hover:text-green-400 transition">Home</a></li>
                                <li><a href="shop.html" class="hover:text-green-400 transition">Shop</a></li>
                                <li><a href="about.html" class="hover:text-green-400 transition">About</a></li>
                                <li><a href="contact.html" class="hover:text-green-400 transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="text-xl font-semibold mb-4">Follow Us</h5>
                            <div class="flex text-3xl gap-5">
                                <a href="#" class="social-icon-footer w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#" class="social-icon-footer w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" class="social-icon-footer w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="#" class="social-icon-footer w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center pt-8 mt-8 border-t border-white/20">
                        <p>&copy; 2022 RT GroceryHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    `;
}

window.subscribeNewsletter = function() {
    const email = document.getElementById('newsletter-email')?.value;
    if (email && email.includes('@')) {
        showNotification(`Thanks for subscribing! ${email} will receive exclusive offers.`);
        document.getElementById('newsletter-email').value = '';
    } else {
        showNotification('Please enter a valid email address.', 'error');
    }
};

// ========== RENDER FUNCTIONS ==========
function renderPopularProducts() {
    const grid = document.getElementById('popular-products-grid');
    if (!grid) return;
    
    const popular = productsDatabase.slice(0, 6);
    grid.innerHTML = popular.map(product => `
        <div class="product-card bg-white rounded-lg p-4 shadow-sm">
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg cursor-pointer" onclick="location.href='product-detail.html?id=${product.id}'">
            <div class="flex items-center gap-1 mt-2">
                <i class="fa-solid fa-star text-yellow-500 text-sm"></i>
                <p class="text-sm">${product.rating}</p>
            </div>
            <h4 class="font-bold text-sm lg:text-base mt-1">${product.name}</h4>
            <p class="text-orange-500 font-bold">₹${product.price}</p>
            <div class="mt-2">
                ${getItemQuantity(product.id) > 0 ? `
                    <div class="card-quantity-controls">
                        <button onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${getItemQuantity(product.id)}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                ` : `
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="w-full bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700 transition">
                        Add to Cart
                    </button>
                `}
            </div>
        </div>
    `).join('');
}

// Quick View Modal
let quickViewProduct = null;

function openQuickView(id) {
    const product = getProductById(id);
    if (!product) return;
    quickViewProduct = product;
    
    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');
    
    content.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2">
                <img src="${product.image}" alt="${product.name}" class="w-full rounded-xl">
            </div>
            <div class="md:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800">${product.name}</h2>
                <div class="flex items-center gap-2 mt-2">
                    <div class="flex text-yellow-500">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''}</div>
                    <span>(${product.rating})</span>
                </div>
                <div class="flex gap-3 items-center mt-4">
                    <span class="text-3xl font-bold text-orange-600">₹${product.price}</span>
                    <span class="text-gray-400 line-through text-xl">₹${product.oldPrice}</span>
                    <span class="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm">${Math.round((1 - product.price/product.oldPrice) * 100)}% OFF</span>
                </div>
                <p class="text-gray-600 mt-4">${product.description}</p>
                <div class="mt-4">
                    <span class="text-green-600"><i class="fas fa-check-circle"></i> In Stock (${product.stock} items)</span>
                </div>
                <div class="mt-6">
                    ${getItemQuantity(product.id) > 0 ? `
                        <div class="flex items-center gap-4">
                            <div class="flex items-center border rounded-lg">
                                <button onclick="updateQuantity(${product.id}, -1)" class="px-4 py-2 text-xl">-</button>
                                <span class="px-4 py-2 min-w-[50px] text-center">${getItemQuantity(product.id)}</span>
                                <button onclick="updateQuantity(${product.id}, 1)" class="px-4 py-2 text-xl">+</button>
                            </div>
                            <button onclick="closeQuickView()" class="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">View Cart</button>
                        </div>
                    ` : `
                        <div class="flex gap-3">
                            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}'); closeQuickView()" class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                                Add to Cart
                            </button>
                            <button onclick="buyNow(${product.id})" class="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                                Buy Now
                            </button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeQuickView() {
    document.getElementById('quick-view-modal').classList.remove('active');
}

function buyNow(id) {
    const product = getProductById(id);
    if (product) {
        addToCart(product.id, product.name, product.price, product.image);
        window.location.href = 'checkout.html';
    }
}

function renderShopProducts(filteredProducts = null) {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;
    
    let products = filteredProducts || productsDatabase;
    const countEl = document.getElementById('products-count');
    if (countEl) countEl.textContent = `Showing ${products.length} products`;
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">No products found</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <img src="${product.image}" alt="${product.name}" class="w-full h-44 object-cover rounded-lg cursor-pointer" onclick="location.href='product-detail.html?id=${product.id}'">
            <div class="flex items-center gap-1 mt-3">
                <i class="fa-solid fa-star text-yellow-500 text-sm"></i>
                <span class="text-sm">${product.rating}</span>
                <span class="text-xs text-gray-400 ml-2">(${product.category})</span>
            </div>
            <h3 class="font-bold text-lg mt-1">${product.name}</h3>
            <div class="flex gap-2 items-center mt-1">
                <span class="text-orange-600 font-bold text-xl">₹${product.price}</span>
                <span class="text-gray-400 line-through text-sm">₹${product.oldPrice}</span>
                <span class="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">${Math.round((1 - product.price/product.oldPrice) * 100)}%</span>
            </div>
            
            <div class="product-actions mt-3">
                <button onclick="openQuickView(${product.id})" class="btn-quick-view">
                    <i class="fas fa-eye"></i> Quick View
                </button>
                ${getItemQuantity(product.id) > 0 ? `
                    <div class="card-quantity-controls flex-1">
                        <button onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${getItemQuantity(product.id)}</span>
                        <button onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                ` : `
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="btn-add-cart">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                `}
            </div>
        </div>
    `).join('');
}

function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16">
                <i class="fas fa-shopping-basket text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500 mb-4">Your cart is empty</p>
                <a href="shop.html" class="bg-green-600 text-white px-6 py-2 rounded-lg">Continue Shopping</a>
            </div>
        `;
        if (document.getElementById('cart-subtotal')) document.getElementById('cart-subtotal').textContent = '₹0';
        if (document.getElementById('cart-total')) document.getElementById('cart-total').textContent = '₹40';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="flex gap-4 p-4 border-b">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="font-bold">${item.name}</h3>
                <p class="text-orange-500 font-bold">₹${item.price}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 border rounded-full hover:bg-green-500 hover:text-white transition">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 border rounded-full hover:bg-green-500 hover:text-white transition">+</button>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 ml-4"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="font-bold text-lg">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    if (document.getElementById('cart-subtotal')) document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    if (document.getElementById('cart-total')) document.getElementById('cart-total').textContent = `₹${subtotal + 40}`;
}

// ========== FILTERS & SORTING ==========
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const resetBtn = document.getElementById('reset-filters');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const categoryCheckboxes = document.querySelectorAll('.category-filter');
    
    function filterProducts() {
        let filtered = [...productsDatabase];
        
        // Category filter (radio style - only one category)
        let selectedCategory = null;
        categoryCheckboxes.forEach(cb => {
            if (cb.checked && cb.value !== 'all') {
                selectedCategory = cb.value;
            }
        });
        
        if (selectedCategory) {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }
        
        // Search filter
        if (searchInput && searchInput.value) {
            const query = searchInput.value.toLowerCase();
            filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
        }
        
        // Price filter
        const min = parseInt(minPrice?.value) || 0;
        const max = parseInt(maxPrice?.value) || 1000;
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
        
        // Sort
        if (sortSelect) {
            filtered = sortProducts(filtered, sortSelect.value);
        }
        
        renderShopProducts(filtered);
    }
    
    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (sortSelect) sortSelect.addEventListener('change', filterProducts);
    if (minPrice) minPrice.addEventListener('input', filterProducts);
    if (maxPrice) maxPrice.addEventListener('input', filterProducts);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
    
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            categoryCheckboxes.forEach(cb => cb.checked = false);
            const allCheckbox = document.querySelector('.category-filter[value="all"]');
            if (allCheckbox) allCheckbox.checked = true;
            if (searchInput) searchInput.value = '';
            if (minPrice) minPrice.value = 0;
            if (maxPrice) maxPrice.value = 1000;
            if (sortSelect) sortSelect.value = 'default';
            filterProducts();
        });
    }
    
    filterProducts();
}

// ========== CHECKOUT ==========
function loadOrderSummary() {
    if (!document.getElementById('order-items-list')) return;
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    document.getElementById('order-items-list').innerHTML = cart.map(item => `
        <div class="flex justify-between py-2 border-b">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    document.getElementById('order-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('order-total').textContent = `₹${subtotal + 40}`;
}

function setupCheckout() {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'error');
            window.location.href = 'shop.html';
            return;
        }
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        
        const orderData = {
            orderId: 'ORD' + Date.now(),
            customer: {
                name: document.getElementById('fullname')?.value || currentUser.name,
                phone: document.getElementById('phone')?.value || currentUser.phone,
                email: document.getElementById('email')?.value || currentUser.email,
                address: document.getElementById('address')?.value,
                city: document.getElementById('city')?.value,
                pincode: document.getElementById('pincode')?.value
            },
            items: [...cart],
            total: getCartTotal() + 40,
            orderDate: new Date().toISOString(),
            status: 'delivered'
        };
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        
        cart = [];
        saveCart();
        
        showNotification('Order placed successfully!');
        window.location.href = 'order-success.html';
    });
}

// ========== AUTHENTICATION ==========
function checkAuthAndRedirect() {
    const redirectUrl = sessionStorage.getItem('redirectAfterLogin');
    if (redirectUrl) {
        sessionStorage.removeItem('redirectAfterLogin');
        window.location.href = redirectUrl;
    }
}

function setupAuth() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email')?.value;
            const password = document.getElementById('login-password')?.value;
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => (u.email === email || u.phone === email) && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                showNotification('Login successful!');
                checkAuthAndRedirect();
                setTimeout(() => {
                    if (!sessionStorage.getItem('redirectAfterLogin')) {
                        window.location.href = 'shop.html';
                    }
                }, 1000);
            } else {
                showNotification('Invalid credentials. Please register.', 'error');
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name')?.value;
            const email = document.getElementById('reg-email')?.value;
            const phone = document.getElementById('reg-phone')?.value;
            const password = document.getElementById('reg-password')?.value;
            const confirm = document.getElementById('reg-confirm')?.value;
            
            if (password !== confirm) {
                showNotification('Passwords do not match!', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters', 'error');
                return;
            }
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) {
                showNotification('Email already registered!', 'error');
                return;
            }
            
            const newUser = { name, email, phone, password, joinDate: new Date().toISOString() };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            showNotification('Registration successful!');
            checkAuthAndRedirect();
            setTimeout(() => {
                if (!sessionStorage.getItem('redirectAfterLogin')) {
                    window.location.href = 'shop.html';
                }
            }, 1000);
        });
    }
}

// ========== PRINT BILL FUNCTION ==========
function printBill(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.orderId === orderId);
    
    if (order) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
            <head>
                <title>Order Bill - ${order.orderId}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 40px; }
                    .bill-container { max-width: 800px; margin: 0 auto; border: 1px solid #ddd; padding: 30px; border-radius: 10px; }
                    .header { text-align: center; border-bottom: 2px solid #16a34a; padding-bottom: 20px; margin-bottom: 20px; }
                    .header h1 { color: #16a34a; margin: 0; }
                    .order-details { margin-bottom: 20px; }
                    .order-details table { width: 100%; border-collapse: collapse; }
                    .order-details td { padding: 8px; }
                    .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    .items-table th, .items-table td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                    .items-table th { background: #16a34a; color: white; }
                    .total { text-align: right; font-size: 18px; font-weight: bold; margin-top: 20px; }
                    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; }
                </style>
            </head>
            <body>
                <div class="bill-container">
                    <div class="header">
                        <h1>RT GroceryHub</h1>
                        <p>Fresh Groceries Delivered with Love</p>
                    </div>
                    <div class="order-details">
                        <table>
                            <tr><td><strong>Order ID:</strong></td><td>${order.orderId}</td></tr>
                            <tr><td><strong>Order Date:</strong></td><td>${new Date(order.orderDate).toLocaleString()}</td></tr>
                            <tr><td><strong>Customer Name:</strong></td><td>${order.customer.name}</td></tr>
                            <tr><td><strong>Phone:</strong></td><td>${order.customer.phone}</td></tr>
                            <tr><td><strong>Address:</strong></td><td>${order.customer.address}, ${order.customer.city} - ${order.customer.pincode}</td></tr>
                        </table>
                    </div>
                    <table class="items-table">
                        <thead><tr><th>Item</th><th>Quantity</th><th>Price</th><th>Total</th></tr></thead>
                        <tbody>
                            ${order.items.map(item => `<tr><td>${item.name}</td><td>${item.quantity}</td><td>₹${item.price}</td><td>₹${item.price * item.quantity}</td></tr>`).join('')}
                        </tbody>
                    </table>
                    <div class="total">
                        <p>Grand Total: ₹${order.total}</p>
                        <p>Payment Method: Cash on Delivery</p>
                    </div>
                    <div class="footer">
                        <p>Thank you for shopping with RT GroceryHub!</p>
                        <p>For any queries, contact us at support@rtgroceryhub.com</p>
                    </div>
                </div>
                <script>window.print();<\/script>
            </body>
            </html>
        `);
        printWindow.document.close();
    } else {
        showNotification('Order not found for printing', 'error');
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    updateCartCount();
    renderCartSidebar();
    renderPopularProducts();
    renderShopProducts();
    setupFilters();
    renderCartPage();
    loadOrderSummary();
    setupCheckout();
    setupAuth();
    
    // Initialize brand slider
    if (typeof initBrandSlider === 'function') initBrandSlider();
    
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }
});