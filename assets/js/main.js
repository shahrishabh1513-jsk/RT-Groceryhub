// ========== PRODUCTS DATABASE ==========
const productsDatabase = [
    { id: 1, name: "Organic Red Apples", category: "fruits", price: 120, oldPrice: 180, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300", rating: 4.5, stock: 50, description: "Fresh organic apples from Himalayan orchards. Sweet and crispy." },
    { id: 2, name: "Fresh Spinach", category: "vegetables", price: 40, oldPrice: 60, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300", rating: 4.8, stock: 100, description: "Farm-fresh spinach leaves, rich in iron and nutrients." },
    { id: 3, name: "Organic Milk", category: "dairy", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 150, description: "Fresh pasteurized milk, rich and creamy." },
    { id: 4, name: "Fresh Broccoli", category: "vegetables", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=300", rating: 4.6, stock: 80, description: "Green, crunchy broccoli heads." },
    { id: 5, name: "Sweet Mangoes", category: "fruits", price: 200, oldPrice: 300, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300", rating: 4.9, stock: 40, description: "Juicy Alphonso mangoes - King of fruits!" },
    { id: 6, name: "Basmati Rice", category: "grains", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300", rating: 4.7, stock: 100, description: "Premium aged basmati rice, long grains with rich aroma." },
    { id: 7, name: "Fresh Tomato", category: "vegetables", price: 40, oldPrice: 60, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=300", rating: 4.5, stock: 200, description: "Farm-fresh ripe tomatoes." },
    { id: 8, name: "Potato", category: "vegetables", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300", rating: 4.6, stock: 250, description: "Fresh premium quality potatoes." },
    { id: 9, name: "Onion", category: "vegetables", price: 45, oldPrice: 65, image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=300", rating: 4.4, stock: 200, description: "Fresh red onions." },
    { id: 10, name: "Turmeric Powder", category: "spices", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300", rating: 4.9, stock: 300, description: "Pure organic turmeric powder." },
    { id: 11, name: "Cumin Seeds", category: "spices", price: 95, oldPrice: 120, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.7, stock: 180, description: "Premium quality cumin seeds." },
    { id: 12, name: "Fresh Paneer", category: "dairy", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300", rating: 4.8, stock: 90, description: "Fresh soft cottage cheese." }
];

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
    }
};

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCartPage();
    showNotification('Item removed from cart', 'info');
};

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
                <div class="navbar bg-base-100 w-[90%] mx-auto">
                    <div class="navbar-start">
                        <a href="index.html"><img class="w-40" src="https://i.imgur.com/4QZ7qV0.png" alt="Logo" onerror="this.src='https://via.placeholder.com/160'"></a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal px-1 font-sora text-lg text-[#4b4b4b]">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="shop.html">Shop</a></li>
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
        
        <!-- Cart Sidebar -->
        <div id="cart-sidebar" class="cart-sidebar">
            <div class="cart-sidebar-header">
                <h2 class="text-xl font-bold"><i class="fas fa-shopping-cart"></i> Your Cart</h2>
                <button onclick="toggleCartSidebar()" class="text-2xl">&times;</button>
            </div>
            <div id="cart-sidebar-items" class="cart-sidebar-items"></div>
            <div class="cart-sidebar-footer">
                <div class="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span id="cart-sidebar-total">₹0</span>
                </div>
                <a href="cart.html" class="btn btn-primary w-full bg-green-600 text-white py-2 rounded-lg text-center block">View Cart</a>
                <a href="checkout.html" class="btn btn-success w-full bg-orange-500 text-white py-2 rounded-lg text-center block mt-2">Checkout</a>
            </div>
        </div>
    `;
}

function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    footerPlaceholder.innerHTML = `
        <div class="relative mt-20">
            <div class="absolute w-5/6 -top-28 left-1/2 transform -translate-x-1/2 lg:w-5/6 flex flex-col lg:flex-row gap-4 p-6 bg-[#EFEBE4] rounded-3xl z-20">
                <div class="lg:p-4">
                    <img src="https://i.imgur.com/4QZ7qV0.png" alt="Newsletter" class="w-24">
                </div>
                <div class="flex flex-col gap-4 justify-center items-center lg:items-start text-center">
                    <h2 class="text-2xl lg:text-3xl font-bold text-green-600">Get Grocery News!</h2>
                    <p class="text-sm lg:text-lg">Exclusive training tips, tricks, product deals and more.</p>
                    <div class="flex w-full max-w-md gap-2">
                        <input id="newsletter-email" class="flex-1 p-3 rounded-lg border border-gray-300" type="email" placeholder="Enter email....">
                        <button onclick="subscribeNewsletter()" class="text-white bg-green-600 px-6 py-2 rounded-lg">Subscribe</button>
                    </div>
                </div>
            </div>
            <footer class="relative pt-48 pb-16 text-white bg-[#179800]">
                <div class="container mx-auto px-4 lg:px-20">
                    <div class="flex flex-col gap-12 lg:flex-row lg:justify-between">
                        <div>
                            <img src="https://i.imgur.com/4QZ7qV0.png" alt="Logo" class="w-40 mb-4">
                            <p class="text-lg">Fresh groceries delivered to your <br> doorstep with love and care.</p>
                        </div>
                        <div>
                            <ul class="flex flex-col gap-3 text-lg">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="flex flex-col gap-4">
                            <h5 class="text-xl">Follow Us</h5>
                            <div class="flex text-3xl gap-6">
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center pt-8 mt-8 border-t border-white/20">
                        <p>&copy; 2024 RT GroceryHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    `;
}

window.subscribeNewsletter = function() {
    const email = document.getElementById('newsletter-email')?.value;
    if (email) {
        alert(`Thanks for subscribing! ${email} will receive exclusive offers.`);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
};

// ========== RENDER FUNCTIONS ==========
function renderPopularProducts() {
    const grid = document.getElementById('popular-products-grid');
    if (!grid) return;
    
    const popular = productsDatabase.slice(0, 6);
    grid.innerHTML = popular.map(product => `
        <div class="product-card bg-white rounded-lg p-3">
            <img src="${product.image}" alt="${product.name}" class="w-full h-32 object-cover rounded-lg cursor-pointer" onclick="location.href='product-detail.html?id=${product.id}'">
            <div class="flex items-center gap-1 mt-2">
                <i class="fa-solid fa-star text-yellow-500 text-sm"></i>
                <p class="text-sm">${product.rating}</p>
            </div>
            <h4 class="font-bold text-sm lg:text-base">${product.name}</h4>
            <p class="text-orange-500 font-bold">₹${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="w-full mt-2 bg-green-600 text-white py-1 rounded-lg text-sm">Add to Cart</button>
        </div>
    `).join('');
}

function renderShopProducts(filteredProducts = null) {
    const grid = document.getElementById('shop-products-grid');
    if (!grid) return;
    
    const products = filteredProducts || productsDatabase;
    document.getElementById('products-count').textContent = `Showing ${products.length} products`;
    
    if (products.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12">No products found</div>';
        return;
    }
    
    grid.innerHTML = products.map(product => `
        <div class="product-card bg-white rounded-lg p-4 shadow-sm">
            <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-lg cursor-pointer" onclick="location.href='product-detail.html?id=${product.id}'">
            <div class="flex items-center gap-1 mt-2">
                <i class="fa-solid fa-star text-yellow-500"></i>
                <span>${product.rating}</span>
            </div>
            <h3 class="font-bold text-lg mt-1">${product.name}</h3>
            <div class="flex gap-2 items-center mt-1">
                <span class="text-orange-600 font-bold text-xl">₹${product.price}</span>
                <span class="text-gray-400 line-through">₹${product.oldPrice}</span>
            </div>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">Add to Cart</button>
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
        document.getElementById('cart-subtotal').textContent = '₹0';
        document.getElementById('cart-total').textContent = '₹40';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="flex gap-4 p-4 border-b">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="font-bold">${item.name}</h3>
                <p class="text-orange-500 font-bold">₹${item.price}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 border rounded-full">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 border rounded-full">+</button>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 ml-4"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            <div class="font-bold text-lg">₹${item.price * item.quantity}</div>
        </div>
    `).join('');
    
    const subtotal = getCartTotal();
    document.getElementById('cart-subtotal').textContent = `₹${subtotal}`;
    document.getElementById('cart-total').textContent = `₹${subtotal + 40}`;
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = productsDatabase.find(p => p.id === productId);
    const container = document.getElementById('product-detail-container');
    
    if (product && container) {
        container.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-8 py-12" data-aos="fade-up">
                <div class="lg:w-1/2">
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-xl shadow-lg">
                </div>
                <div class="lg:w-1/2">
                    <h1 class="text-3xl font-bold text-gray-800">${product.name}</h1>
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
                    <div class="flex items-center gap-4 mt-6">
                        <div class="flex items-center border rounded-lg">
                            <button onclick="updateQty(-1)" class="px-4 py-2 text-xl">-</button>
                            <input type="number" id="product-qty" value="1" min="1" max="${product.stock}" class="w-16 text-center border-x">
                            <button onclick="updateQty(1)" class="px-4 py-2 text-xl">+</button>
                        </div>
                        <button onclick="addToCartFromDetail(${product.id}, '${product.name}', ${product.price}, '${product.image}')" class="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
}

function updateQty(change) {
    const input = document.getElementById('product-qty');
    let val = parseInt(input.value) + change;
    if (val >= 1) input.value = val;
}

function addToCartFromDetail(id, name, price, image) {
    const qty = parseInt(document.getElementById('product-qty').value);
    for (let i = 0; i < qty; i++) {
        addToCart(id, name, price, image);
    }
}

// ========== FILTERS & SORTING ==========
function setupFilters() {
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const resetBtn = document.getElementById('reset-filters');
    const categoryCheckboxes = document.querySelectorAll('#category-filters input');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    
    function filterProducts() {
        let filtered = [...productsDatabase];
        
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked && cb.value !== 'all')
            .map(cb => cb.value);
        
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
        }
        
        if (searchInput && searchInput.value) {
            const query = searchInput.value.toLowerCase();
            filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
        }
        
        const min = parseInt(minPrice?.value) || 0;
        const max = parseInt(maxPrice?.value) || 1000;
        filtered = filtered.filter(p => p.price >= min && p.price <= max);
        
        if (sortSelect) {
            switch(sortSelect.value) {
                case 'price-low': filtered.sort((a,b) => a.price - b.price); break;
                case 'price-high': filtered.sort((a,b) => b.price - a.price); break;
                case 'rating': filtered.sort((a,b) => b.rating - a.rating); break;
                case 'name': filtered.sort((a,b) => a.name.localeCompare(b.name)); break;
            }
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
            const allCheckbox = document.querySelector('#category-filters input[value="all"]');
            if (allCheckbox) allCheckbox.checked = true;
            if (searchInput) searchInput.value = '';
            if (minPrice) minPrice.value = 0;
            if (maxPrice) maxPrice.value = 500;
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
            alert('Your cart is empty!');
            window.location.href = 'shop.html';
            return;
        }
        
        const orderData = {
            orderId: 'ORD' + Date.now(),
            customer: {
                name: document.getElementById('fullname')?.value,
                phone: document.getElementById('phone')?.value,
                email: document.getElementById('email')?.value,
                address: document.getElementById('address')?.value,
                city: document.getElementById('city')?.value,
                pincode: document.getElementById('pincode')?.value
            },
            items: [...cart],
            total: getCartTotal() + 40,
            orderDate: new Date().toISOString()
        };
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('lastOrder', JSON.stringify(orderData));
        
        cart = [];
        saveCart();
        
        window.location.href = 'order-success.html';
    });
}

// ========== AUTHENTICATION ==========
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
            alert('Registration successful!');
            window.location.href = 'index.html';
        });
    }
}

// ========== ACCOUNT PAGE ==========
function loadAccountPage() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser && document.getElementById('user-name')) {
        window.location.href = 'login.html';
        return;
    }
    
    if (document.getElementById('user-name')) {
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-email').textContent = currentUser.email;
        
        document.getElementById('profile-info').innerHTML = `
            <div class="flex py-2 border-b"><span class="w-32 font-semibold">Name:</span><span>${currentUser.name}</span></div>
            <div class="flex py-2 border-b"><span class="w-32 font-semibold">Email:</span><span>${currentUser.email}</span></div>
            <div class="flex py-2 border-b"><span class="w-32 font-semibold">Phone:</span><span>${currentUser.phone || 'Not added'}</span></div>
            <div class="flex py-2"><span class="w-32 font-semibold">Member Since:</span><span>${new Date(currentUser.joinDate).toLocaleDateString()}</span></div>
        `;
        
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const userOrders = orders.filter(order => order.customer?.email === currentUser.email);
        const ordersList = document.getElementById('orders-list');
        
        if (userOrders.length === 0) {
            ordersList.innerHTML = '<p class="text-gray-500">No orders yet. <a href="shop.html" class="text-green-600">Start shopping!</a></p>';
        } else {
            ordersList.innerHTML = userOrders.map(order => `
                <div class="border rounded-lg p-4 mb-3">
                    <div class="flex justify-between">
                        <span class="font-bold text-orange-500">${order.orderId}</span>
                        <span class="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-sm">Delivered</span>
                    </div>
                    <div class="mt-2"><strong>Total:</strong> ₹${order.total}</div>
                    <div><strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()}</div>
                    <details class="mt-2">
                        <summary class="text-orange-500 cursor-pointer">View Details</summary>
                        <div class="pl-4 mt-2">${order.items.map(item => `<div>${item.name} x ${item.quantity} = ₹${item.price * item.quantity}</div>`).join('')}</div>
                    </details>
                </div>
            `).join('');
        }
        
        document.getElementById('logout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
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
    loadProductDetail();
    renderCartPage();
    loadOrderSummary();
    setupCheckout();
    setupAuth();
    loadAccountPage();
    
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }
});