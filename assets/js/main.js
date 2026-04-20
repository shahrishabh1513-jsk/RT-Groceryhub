// ========== HEADER & FOOTER LOADER ==========
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeCart();
    updateCartCount();
});

function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header class="main-header">
                <div class="container">
                    <div class="logo">
                        <a href="index.html">RT <span>GroceryHub</span></a>
                    </div>
                    <nav class="nav-menu">
                        <a href="index.html" class="${isActive('index.html') ? 'active' : ''}">Home</a>
                        <a href="shop.html" class="${isActive('shop.html') ? 'active' : ''}">Shop</a>
                        <a href="about.html" class="${isActive('about.html') ? 'active' : ''}">About</a>
                        <a href="contact.html" class="${isActive('contact.html') ? 'active' : ''}">Contact</a>
                        <a href="account.html" class="${isActive('account.html') ? 'active' : ''}"><i class="fas fa-user"></i> Account</a>
                        <a href="cart.html" class="cart-icon"><i class="fas fa-shopping-cart"></i> <span class="cart-count" id="cart-count-nav">0</span></a>
                    </nav>
                </div>
            </header>
        `;
    }
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
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
                            <a href="pages/policies/privacy.html">Privacy Policy</a>
                            <a href="pages/policies/terms.html">Terms & Conditions</a>
                            <a href="pages/policies/refund.html">Refund Policy</a>
                        </div>
                        <div class="footer-col">
                            <h4>Categories</h4>
                            <a href="pages/categories/fruits.html">Fruits</a>
                            <a href="pages/categories/vegetables.html">Vegetables</a>
                            <a href="pages/categories/dairy.html">Dairy</a>
                            <a href="pages/categories/snacks.html">Snacks</a>
                        </div>
                        <div class="footer-col">
                            <h4>Contact Info</h4>
                            <p><i class="fas fa-phone"></i> +91 98765 43210</p>
                            <p><i class="fas fa-envelope"></i> support@rtgroceryhub.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> 123, Food Street, Mumbai, India</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 RT GroceryHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

function isActive(pageName) {
    return window.location.pathname.includes(pageName);
}

// ========== CART MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initializeCart() {
    updateCartCount();
    renderCartItems();
}

function addToCart(id, name, price, image = '') {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${name} added to cart!`, 'success');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    showNotification('Item removed from cart', 'info');
}

function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCartItems();
        }
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Your cart is empty</p><a href="shop.html" class="btn btn-primary">Continue Shopping</a></div>';
        document.getElementById('cart-total')?.setAttribute('data-total', '0');
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image || 'https://via.placeholder.com/70'}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <span class="remove-item" onclick="removeFromCart(${item.id})">Remove</span>
                </div>
            </div>
            <div class="cart-item-subtotal">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    const total = getCartTotal();
    document.getElementById('cart-total')?.setAttribute('data-total', total);
    const totalElement = document.getElementById('cart-total-amount');
    if (totalElement) totalElement.textContent = `₹${total}`;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type}`;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.style.animation = 'slideIn 0.3s ease';
    notification.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

// ========== AUTHENTICATION ==========
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ========== ORDER MANAGEMENT ==========
function placeOrder(orderData) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: 'ORD' + Date.now(),
        ...orderData,
        date: new Date().toISOString(),
        status: 'confirmed'
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    return newOrder;
}