// Product Database with all items including rice, dal, spices, oil, milk, chocolate, etc.
const allProducts = [
    // Vegetables (existing)
    { id: 1, name: "Green Cabbage", weight: "1kg", price: 70, image: "./images/p-1.png", category: "veg", stock: true },
    { id: 2, name: "Cauliflower", weight: "1kg", price: 70, image: "./images/p-3 (2).png", category: "veg", stock: true },
    { id: 3, name: "Red Cabbage", weight: "1kg", price: 70, image: "./images/p-3 (1).png", category: "veg", stock: true },
    { id: 4, name: "Green Papaya", weight: "1kg", price: 70, image: "./images/p-3 (3).png", category: "veg", stock: true },
    { id: 5, name: "Red Tomato", weight: "1kg", price: 70, image: "./images/Red Tomato.png", category: "veg", stock: true },
    { id: 6, name: "Green Tomato", weight: "1kg", price: 70, image: "./images/Green Tomato.png", category: "veg", stock: true },
    { id: 7, name: "Bean", weight: "1kg", price: 70, image: "./images/Bean.png", category: "veg", stock: true },
    { id: 8, name: "Radish", weight: "1kg", price: 70, image: "./images/Radish.png", category: "veg", stock: true },
    // Nuts & Dry
    { id: 9, name: "Walnut", weight: "500g", price: 350, image: "./images/Wal Nut.png", category: "nuts", stock: true },
    { id: 10, name: "Cashew Nut", weight: "500g", price: 450, image: "./images/p-1.png", category: "nuts", stock: true },
    { id: 11, name: "Almond", weight: "500g", price: 550, image: "./images/Almond.png", category: "nuts", stock: true },
    { id: 12, name: "China Peanuts", weight: "1kg", price: 180, image: "./images/China Peanuts.png", category: "nuts", stock: true },
    // Meat & Fish
    { id: 13, name: "Stew Beef Meat", weight: "1kg", price: 650, image: "./images/Stew Beef Meat.png", category: "meat", stock: true },
    { id: 14, name: "Chicken Meat", weight: "1kg", price: 320, image: "./images/Chicken Meat.png", category: "meat", stock: true },
    { id: 15, name: "Fresh Fish (Rui)", weight: "1kg", price: 380, image: "./images/Fresh Fish.png", category: "fish", stock: true },
    { id: 16, name: "Mix Fish", weight: "1kg", price: 420, image: "./images/Mix Fish.png", category: "fish", stock: true },
    // NEW PRODUCTS: Rice, Dal, Spices, Oil, Milk, Chocolate, Shampoo, Soap, Detergent etc.
    { id: 17, name: "Premium Basmati Rice", weight: "5kg", price: 550, image: "./images/Rice.png", category: "grocery", stock: true },
    { id: 18, name: "Masoor Dal (Red Lentil)", weight: "2kg", price: 280, image: "./images/Dal.png", category: "grocery", stock: true },
    { id: 19, name: "Mixed Spices Box", weight: "400g", price: 199, image: "./images/Spices.png", category: "spices", stock: true },
    { id: 20, name: "Turmeric Powder", weight: "250g", price: 85, image: "./images/Spices.png", category: "spices", stock: true },
    { id: 21, name: "Soybean Oil", weight: "5L", price: 720, image: "./images/Oil.png", category: "oil", stock: true },
    { id: 22, name: "Organic Mustard Oil", weight: "1L", price: 210, image: "./images/Oil.png", category: "oil", stock: true },
    { id: 23, name: "Full Cream Milk", weight: "1L", price: 85, image: "./images/Milk.png", category: "dairy", stock: true },
    { id: 24, name: "Almond Milk", weight: "1L", price: 220, image: "./images/Milk.png", category: "dairy", stock: true },
    { id: 25, name: "Dark Chocolate Bar", weight: "100g", price: 120, image: "./images/Chocolate.png", category: "snacks", stock: true },
    { id: 26, name: "Milk Chocolate", weight: "80g", price: 95, image: "./images/Chocolate.png", category: "snacks", stock: true },
    { id: 27, name: "Herbal Shampoo", weight: "500ml", price: 450, image: "./images/Shampoo.png", category: "personal", stock: true },
    { id: 28, name: "Organic Soap", weight: "100g", price: 120, image: "./images/Soap.png", category: "personal", stock: true },
    { id: 29, name: "Laundry Detergent", weight: "2kg", price: 380, image: "./images/Detergent.png", category: "household", stock: true },
    { id: 30, name: "Honey (Pure)", weight: "500g", price: 350, image: "./images/Image.png", category: "grocery", stock: true },
    { id: 31, name: "Brown Sugar", weight: "1kg", price: 110, image: "./images/Image.png", category: "grocery", stock: true },
    { id: 32, name: "Pasta Fusilli", weight: "500g", price: 95, image: "./images/Image.png", category: "grocery", stock: true },
];

let cart = [];
let visibleProducts = 12; // Initially show 12 products
let loadMoreBtn = document.getElementById('loadMoreBtn');
let productsGrid = document.getElementById('productsGrid');

// Render products based on visible count
function renderProducts() {
    if (!productsGrid) return;
    const productsToShow = allProducts.slice(0, visibleProducts);
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card border border-primary/20 rounded-2xl p-4 text-center bg-white shadow-sm hover:shadow-md transition">
            <img src="${product.image}" alt="${product.name}" class="w-32 h-32 object-contain mx-auto mb-3" onerror="this.src='https://placehold.co/120x120?text=Product'">
            <h1 class="text-xl font-bold text-dark">${product.name}</h1>
            <p class="text-gray-500">${product.weight}</p>
            <p class="text-primary font-bold text-xl mt-1">৳${product.price}</p>
            <button onclick="addToCart(${product.id})" class="mt-3 w-full bg-primary text-white py-2 rounded-full hover:bg-primary/80 transition">Add to Cart</button>
        </div>
    `).join('');
    
    if (loadMoreBtn) {
        if (visibleProducts >= allProducts.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-block';
        }
    }
}

// Load More functionality
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        visibleProducts += 8;
        renderProducts();
    });
}

// Cart Functions
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function updateCartUI() {
    const cartCountSpan = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotal');
    
    if (cartCountSpan) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.innerText = totalItems;
    }
    
    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<p class="text-center text-gray-400">Your cart is empty</p>';
        } else {
            cartItemsList.innerHTML = cart.map(item => `
                <div class="flex justify-between items-center border-b pb-2">
                    <div class="flex-1">
                        <h4 class="font-bold">${item.name}</h4>
                        <p class="text-sm text-gray-500">${item.weight} x ${item.quantity}</p>
                        <p class="text-primary font-semibold">৳${item.price * item.quantity}</p>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="btn btn-xs btn-outline">-</button>
                        <span class="w-6 text-center">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="btn btn-xs btn-outline">+</button>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 ml-2"><i class="fa-regular fa-trash-can"></i></button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    if (cartTotalSpan) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalSpan.innerText = `৳${total.toFixed(2)}`;
    }
}

function updateQuantity(id, newQty) {
    if (newQty <= 0) {
        removeFromCart(id);
        return;
    }
    const item = cart.find(i => i.id === id);
    if (item) item.quantity = newQty;
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Cart Sidebar Toggle
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');

if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.remove('hidden');
        updateCartUI();
    });
}
if (closeCart) {
    closeCart.addEventListener('click', () => cartSidebar.classList.add('hidden'));
}
if (cartSidebar) {
    cartSidebar.addEventListener('click', (e) => {
        if (e.target === cartSidebar) cartSidebar.classList.add('hidden');
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
});