// ========== PRODUCTS DATABASE (100% Vegetarian) ==========
const productsDatabase = [
    { id: 1, name: "Basmati Rice", category: "grains", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300", rating: 4.7, stock: 100, description: "Premium aged basmati rice, long grains with rich aroma." },
    { id: 2, name: "Whole Wheat Atta", category: "grains", price: 120, oldPrice: 150, image: "https://images.unsplash.com/photo-1599907497069-6c3f7c6e7e1e?w=300", rating: 4.8, stock: 200, description: "Fresh stone-ground whole wheat flour." },
    { id: 3, name: "Toor Dal", category: "pulses", price: 140, oldPrice: 170, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300", rating: 4.6, stock: 150, description: "Premium quality toor dal, rich in protein." },
    { id: 4, name: "Turmeric Powder", category: "spices", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300", rating: 4.9, stock: 300, description: "Pure organic turmeric powder." },
    { id: 5, name: "Mustard Oil", category: "oils", price: 160, oldPrice: 200, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.5, stock: 80, description: "Cold-pressed pure mustard oil." },
    { id: 6, name: "Fresh Apple", category: "fruits", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300", rating: 4.7, stock: 120, description: "Crisp and sweet Himalayan apples." },
    { id: 7, name: "Fresh Tomato", category: "vegetables", price: 40, oldPrice: 60, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300", rating: 4.5, stock: 200, description: "Farm-fresh ripe tomatoes." },
    { id: 8, name: "Potato", category: "vegetables", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300", rating: 4.6, stock: 250, description: "Fresh premium quality potatoes." },
    { id: 9, name: "Onion", category: "vegetables", price: 45, oldPrice: 65, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300", rating: 4.4, stock: 200, description: "Fresh red onions." },
    { id: 10, name: "Fresh Milk", category: "dairy", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 100, description: "Pure pasteurized full-cream milk." },
    { id: 11, name: "Paneer", category: "dairy", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300", rating: 4.8, stock: 90, description: "Fresh soft cottage cheese." },
    { id: 12, name: "Cumin Seeds", category: "spices", price: 95, oldPrice: 120, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.7, stock: 180, description: "Premium quality cumin seeds." },
    { id: 13, name: "Garam Masala", category: "spices", price: 110, oldPrice: 140, image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=300", rating: 4.8, stock: 150, description: "Authentic blend of aromatic spices." },
    { id: 14, name: "Coconut Oil", category: "oils", price: 220, oldPrice: 280, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.6, stock: 70, description: "Pure virgin coconut oil." },
    { id: 15, name: "Banana", category: "fruits", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=300", rating: 4.5, stock: 150, description: "Sweet ripe bananas." },
    { id: 16, name: "Carrot", category: "vegetables", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300", rating: 4.7, stock: 180, description: "Fresh organic carrots." },
    { id: 17, name: "Spinach", category: "vegetables", price: 30, oldPrice: 45, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300", rating: 4.8, stock: 120, description: "Fresh green spinach leaves." },
    { id: 18, name: "Curd", category: "dairy", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1550583724-c2692d22c3b7?w=300", rating: 4.7, stock: 100, description: "Fresh probiotic curd." },
    { id: 19, name: "Honey", category: "spices", price: 250, oldPrice: 300, image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300", rating: 4.9, stock: 60, description: "Pure organic honey." },
    { id: 20, name: "Ghee", category: "oils", price: 450, oldPrice: 550, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300", rating: 4.9, stock: 50, description: "Pure desi cow ghee." }
];

// ========== CART MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart function (make it global)
window.addToCart = function(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
    showNotification(`${name} added to cart!`, 'success');
    renderCartPage(); // Update cart page if open
};

// Update quantity
window.updateQuantity = function(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
        saveCart();
        renderCartPage();
        if (typeof renderCartItems === 'function') renderCartItems();
    }
};

// Remove from cart
window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCartPage();
    showNotification('Item removed from cart', 'info');
};

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Get cart total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#FF9800'};
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ========== CART PAGE RENDERING ==========
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 3rem;">
                <i class="fas fa-shopping-basket" style="font-size: 4rem; color: #ccc; margin-bottom: 1rem;"></i>
                <p style="margin-bottom: 1rem;">Your cart is empty</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        const subtotalEl = document.getElementById('cart-subtotal');
        const totalEl = document.getElementById('cart-total');
        if (subtotalEl) subtotalEl.textContent = '₹0';
        if (totalEl) totalEl.textContent = '₹40';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p class="cart-item-price">₹${item.price}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
            <div style="font-weight: 700; color: var(--accent-orange);">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    const total = subtotal + 40;
    
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (totalEl) totalEl.textContent = `₹${total}`;
}

// ========== SHOP PAGE RENDERING ==========
function renderShopProducts(filteredProducts = null) {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;
    
    const products = filteredProducts || productsDatabase;
    const countEl = document.getElementById('products-count');
    if (countEl) countEl.textContent = `Showing ${products.length} products`;
    
    if (products.length === 0) {
        grid.innerHTML = `<div class="no-products"><i class="fas fa-search"></i><h3>No products found</h3><p>Try adjusting your filters</p></div>`;
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card" data-aos="fade-up">
            ${product.oldPrice ? `<div class="product-badge">Sale</div>` : ''}
            <img src="${product.image}" alt="${product.name}" onclick="location.href='product-detail.html?id=${product.id}'" style="cursor: pointer;">
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current">₹${product.price}</span>
                ${product.oldPrice ? `<span class="old">₹${product.oldPrice}</span>` : ''}
            </div>
            <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''} (${product.rating})</div>
            <button class="btn-add-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `).join('');
}

// ========== TRENDING PRODUCTS (Homepage) ==========
function renderTrendingProducts() {
    const grid = document.getElementById('trending-products');
    if (!grid) return;
    
    const trending = productsDatabase.slice(0, 8);
    grid.innerHTML = trending.map(product => `
        <div class="product-card">
            ${product.oldPrice ? `<div class="product-badge">Trending</div>` : ''}
            <img src="${product.image}" alt="${product.name}" onclick="location.href='product-detail.html?id=${product.id}'" style="cursor: pointer;">
            <h3>${product.name}</h3>
            <div class="product-price">
                <span class="current">₹${product.price}</span>
                ${product.oldPrice ? `<span class="old">₹${product.oldPrice}</span>` : ''}
            </div>
            <div class="product-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''} (${product.rating})</div>
            <button class="btn-add-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
        </div>
    `).join('');
}

// ========== CHECKOUT ORDER SUMMARY ==========
function loadOrderSummary() {
    const itemsContainer = document.getElementById('order-items-list');
    if (!itemsContainer) return;
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    itemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    document.getElementById('order-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('order-total').textContent = `₹${subtotal + 40}`;
}

// ========== HEADER & FOOTER ==========
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    headerPlaceholder.innerHTML = `
        <header class="main-header">
            <div class="container">
                <div class="logo">
                    <a href="index.html">RT <span>GroceryHub</span></a>
                </div>
                <nav class="nav-menu">
                    <a href="index.html">Home</a>
                    <a href="shop.html">Shop</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
                    <a href="account.html"><i class="fas fa-user"></i> Account</a>
                    <a href="cart.html" class="cart-icon">
                        <i class="fas fa-shopping-cart"></i> 
                        <span class="cart-count" id="cart-count-nav">0</span>
                    </a>
                </nav>
            </div>
        </header>
    `;
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    footerPlaceholder.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col">
                        <h4>RT GroceryHub</h4>
                        <p>Fresh groceries delivered to your doorstep with love and care.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <a href="about.html">About Us</a>
                        <a href="contact.html">Contact Us</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div class="footer-col">
                        <h4>Categories</h4>
                        <a href="shop.html?category=fruits">Fruits</a>
                        <a href="shop.html?category=vegetables">Vegetables</a>
                        <a href="shop.html?category=grains">Grains</a>
                        <a href="shop.html?category=dairy">Dairy</a>
                    </div>
                    <div class="footer-col">
                        <h4>Contact Info</h4>
                        <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                        <p><i class="fas fa-envelope"></i> support@rtgroceryhub.com</p>
                        <p><i class="fas fa-map-marker-alt"></i> Mumbai, India</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 RT GroceryHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

// ========== FILTERS & SORTING (Shop Page) ==========
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const resetBtn = document.getElementById('reset-filters');
    const categoryCheckboxes = document.querySelectorAll('#category-filters input');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    
    function filterProducts() {
        let filtered = [...productsDatabase];
        
        // Category filter
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked && cb.value !== 'all')
            .map(cb => cb.value);
        
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
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
            switch(sortSelect.value) {
                case 'price-low': filtered.sort((a,b) => a.price - b.price); break;
                case 'price-high': filtered.sort((a,b) => b.price - a.price); break;
                case 'rating': filtered.sort((a,b) => b.rating - a.rating); break;
                case 'name': filtered.sort((a,b) => a.name.localeCompare(b.name)); break;
                default: filtered.sort((a,b) => a.id - b.id);
            }
        }
        
        renderShopProducts(filtered);
    }
    
    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (sortSelect) sortSelect.addEventListener('change', filterProducts);
    if (minPrice) minPrice.addEventListener('input', filterProducts);
    if (maxPrice) maxPrice.addEventListener('input', filterProducts);
    categoryCheckboxes.forEach(cb => cb.addEventListener('change', filterProducts));
    if (resetBtn) resetBtn.addEventListener('click', () => {
        categoryCheckboxes.forEach(cb => cb.checked = false);
        const allCheckbox = document.querySelector('#category-filters input[value="all"]');
        if (allCheckbox) allCheckbox.checked = true;
        if (searchInput) searchInput.value = '';
        if (minPrice) minPrice.value = 0;
        if (maxPrice) maxPrice.value = 500;
        if (sortSelect) sortSelect.value = 'default';
        filterProducts();
    });
    
    filterProducts();
}

// ========== COUNTDOWN TIMER ==========
function startCountdown() {
    let hours = 24, minutes = 0, seconds = 0;
    setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                if (hours === 0) return;
                hours--;
                minutes = 59;
            } else {
                minutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        const hEl = document.getElementById('hours');
        const mEl = document.getElementById('minutes');
        const sEl = document.getElementById('seconds');
        if (hEl) hEl.textContent = hours.toString().padStart(2, '0');
        if (mEl) mEl.textContent = minutes.toString().padStart(2, '0');
        if (sEl) sEl.textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    updateCartCount();
    renderTrendingProducts();
    startCountdown();
    
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }
    
    // Cart page
    if (document.getElementById('cart-items-container')) {
        renderCartPage();
    }
    
    // Shop page
    if (document.getElementById('shop-products-grid')) {
        renderShopProducts();
        setupFilters();
    }
    
    // Checkout page
    if (document.getElementById('order-items-list')) {
        loadOrderSummary();
        
        // Payment method selection
        document.querySelectorAll('.payment-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        // Checkout form submit
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                if (cart.length === 0) {
                    alert('Your cart is empty!');
                    window.location.href = 'shop.html';
                    return;
                }
                
                const orderData = {
                    orderId: 'ORD' + Date.now(),
                    customer: {
                        name: document.getElementById('fullname')?.value || '',
                        phone: document.getElementById('phone')?.value || '',
                        email: document.getElementById('email')?.value || '',
                        address: document.getElementById('address')?.value || '',
                        city: document.getElementById('city')?.value || '',
                        pincode: document.getElementById('pincode')?.value || '',
                        instructions: document.getElementById('instructions')?.value || ''
                    },
                    items: [...cart],
                    paymentMethod: document.querySelector('.payment-option.selected')?.dataset.method || 'cod',
                    total: getCartTotal() + 40,
                    orderDate: new Date().toISOString()
                };
                
                // Save order
                const orders = JSON.parse(localStorage.getItem('orders')) || [];
                orders.push(orderData);
                localStorage.setItem('orders', JSON.stringify(orders));
                
                // Clear cart
                cart = [];
                saveCart();
                
                // Save last order for success page
                localStorage.setItem('lastOrder', JSON.stringify(orderData));
                
                // Redirect to success
                window.location.href = 'order-success.html';
            });
        }
    }
    
    // Order success page
    if (document.getElementById('order-details')) {
        const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
        if (lastOrder) {
            document.getElementById('order-details').innerHTML = `
                <div class="order-detail-row"><strong>Order ID:</strong> <span>${lastOrder.orderId}</span></div>
                <div class="order-detail-row"><strong>Total Amount:</strong> <span>₹${lastOrder.total}</span></div>
                <div class="order-detail-row"><strong>Delivery Address:</strong> <span>${lastOrder.customer.address}, ${lastOrder.customer.city} - ${lastOrder.customer.pincode}</span></div>
                <div class="order-detail-row"><strong>Payment Method:</strong> <span>${lastOrder.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card/UPI'}</span></div>
            `;
            localStorage.removeItem('lastOrder');
        } else {
            document.getElementById('order-details').innerHTML = '<p>No recent order found. <a href="shop.html">Start shopping</a></p>';
        }
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            contactForm.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for subscribing! Check your email for 20% off coupon.');
            newsletterForm.reset();
        });
    }
    
    // Login/Register functionality
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
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials. Please register.');
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
                alert('Passwords do not match!');
                return;
            }
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) {
                alert('Email already registered!');
                return;
            }
            
            const newUser = { name, email, phone, password, joinDate: new Date().toISOString() };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            alert('Registration successful! Welcome to RT GroceryHub.');
            window.location.href = 'index.html';
        });
    }
    
    // Account page
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (document.getElementById('user-name')) {
        if (!currentUser) {
            window.location.href = 'login.html';
            return;
        }
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-email').textContent = currentUser.email;
        
        // Profile info
        const profileInfo = document.getElementById('profile-info');
        if (profileInfo) {
            profileInfo.innerHTML = `
                <div class="profile-field"><span class="label">Full Name:</span><span class="value">${currentUser.name}</span></div>
                <div class="profile-field"><span class="label">Email:</span><span class="value">${currentUser.email}</span></div>
                <div class="profile-field"><span class="label">Phone:</span><span class="value">${currentUser.phone || 'Not added'}</span></div>
                <div class="profile-field"><span class="label">Member Since:</span><span class="value">${new Date(currentUser.joinDate).toLocaleDateString()}</span></div>
            `;
        }
        
        // Load orders
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const userOrders = orders.filter(order => order.customer && order.customer.email === currentUser.email);
        const ordersList = document.getElementById('orders-list');
        if (ordersList) {
            if (userOrders.length === 0) {
                ordersList.innerHTML = '<p style="color: var(--text-muted);">No orders yet. <a href="shop.html">Start shopping!</a></p>';
            } else {
                ordersList.innerHTML = userOrders.map(order => `
                    <div class="order-card">
                        <div class="order-header">
                            <span class="order-id">${order.orderId}</span>
                            <span class="order-status">Delivered</span>
                        </div>
                        <div><strong>Total:</strong> ₹${order.total}</div>
                        <div><strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</div>
                        <div><strong>Items:</strong> ${order.items.length} products</div>
                        <details style="margin-top: 0.5rem;">
                            <summary style="cursor: pointer; color: var(--accent-orange);">View Details</summary>
                            <div style="margin-top: 0.5rem; padding-left: 1rem;">
                                ${order.items.map(item => `<div>${item.name} x ${item.quantity} = ₹${item.price * item.quantity}</div>`).join('')}
                            </div>
                        </details>
                    </div>
                `).join('');
            }
        }
        
        // Load addresses
        let addresses = JSON.parse(localStorage.getItem('user_addresses')) || [];
        const addressesList = document.getElementById('addresses-list');
        if (addressesList) {
            if (addresses.length === 0) {
                addressesList.innerHTML = '<p style="color: var(--text-muted);">No saved addresses. Add one for faster checkout!</p>';
            } else {
                addressesList.innerHTML = addresses.map((addr, index) => `
                    <div class="address-card">
                        <p><strong>${addr.name}</strong> - ${addr.phone}</p>
                        <p>${addr.address}, ${addr.city} - ${addr.pincode}</p>
                        <button onclick="deleteAddress(${index})" style="background: none; border: none; color: #e74c3c; cursor: pointer; margin-top: 0.5rem;"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                `).join('');
            }
        }
        
        // Account menu navigation
        window.switchAccountSection = function(section) {
            document.querySelectorAll('.account-section').forEach(s => s.classList.remove('active'));
            document.getElementById(`${section}-section`).classList.add('active');
            document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
            document.querySelector(`.menu-item[data-section="${section}"]`).classList.add('active');
        };
        
        document.querySelectorAll('.menu-item[data-section]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                switchAccountSection(item.dataset.section);
            });
        });
        
        // Logout
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                window.location.href = 'login.html';
            });
        }
    }
});

// Delete address function
window.deleteAddress = function(index) {
    let addresses = JSON.parse(localStorage.getItem('user_addresses')) || [];
    addresses.splice(index, 1);
    localStorage.setItem('user_addresses', JSON.stringify(addresses));
    location.reload();
};

// Add new address function
window.addNewAddress = function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const address = prompt('Enter your full address:');
    if (address) {
        let addresses = JSON.parse(localStorage.getItem('user_addresses')) || [];
        addresses.push({
            name: currentUser.name,
            phone: currentUser.phone,
            address: address,
            city: 'Your City',
            pincode: '000000'
        });
        localStorage.setItem('user_addresses', JSON.stringify(addresses));
        location.reload();
    }
};

// Coupon function
window.applyCoupon = function() {
    const code = document.getElementById('coupon-code')?.value;
    if (code === 'SAVE10') {
        const subtotal = getCartTotal();
        const discounted = subtotal * 0.9;
        const totalEl = document.getElementById('cart-total');
        if (totalEl) totalEl.textContent = `₹${discounted + 40}`;
        alert('Coupon applied! 10% off on your order.');
    } else if (code === 'WELCOME20') {
        const subtotal = getCartTotal();
        const discounted = subtotal * 0.8;
        const totalEl = document.getElementById('cart-total');
        if (totalEl) totalEl.textContent = `₹${discounted + 40}`;
        alert('Coupon applied! 20% off on your order.');
    } else if (code) {
        alert('Invalid coupon code. Try SAVE10 or WELCOME20');
    }
};

// Auth tab switching
window.switchTab = function(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    if (tab === 'login') {
        document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.querySelector('.auth-tab[data-tab="register"]').classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
};

// Add animation keyframes to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    .alert {
        animation: slideIn 0.3s ease;
    }
`;
document.head.appendChild(style);