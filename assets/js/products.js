// ========== PRODUCTS DATABASE ==========
const productsDatabase = [
    { id: 1, name: "Organic Red Apples", category: "fruits", price: 120, oldPrice: 180, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300", rating: 4.5, stock: 50, description: "Fresh organic apples from Himalayan orchards. Sweet and crispy." },
    { id: 2, name: "Fresh Spinach", category: "vegetables", price: 40, oldPrice: 60, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300", rating: 4.8, stock: 100, description: "Farm-fresh spinach leaves, rich in iron and nutrients." },
    { id: 3, name: "Farm Fresh Eggs", category: "dairy", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300", rating: 4.7, stock: 200, description: "Free-range organic eggs from healthy hens." },
    { id: 4, name: "Organic Milk", category: "dairy", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 150, description: "Fresh pasteurized milk, rich and creamy." },
    { id: 5, name: "Fresh Broccoli", category: "vegetables", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=300", rating: 4.6, stock: 80, description: "Green, crunchy broccoli heads." },
    { id: 6, name: "Sweet Mangoes", category: "fruits", price: 200, oldPrice: 300, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300", rating: 4.9, stock: 40, description: "Juicy Alphonso mangoes - King of fruits!" },
    { id: 7, name: "Potato Chips", category: "snacks", price: 30, oldPrice: 45, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300", rating: 4.3, stock: 300, description: "Crispy salted potato chips." },
    { id: 8, name: "Greek Yogurt", category: "dairy", price: 95, oldPrice: 120, image: "https://images.unsplash.com/photo-1488477181946-6428a0291779?w=300", rating: 4.7, stock: 90, description: "Creamy probiotic Greek yogurt." }
];

function getAllProducts() {
    return productsDatabase;
}

function getProductsByCategory(category) {
    return productsDatabase.filter(p => p.category === category);
}

function getProductById(id) {
    return productsDatabase.find(p => p.id === id);
}

function searchProducts(query) {
    return productsDatabase.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
}

function renderProductGrid(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = '<div class="no-products">No products found <i class="fas fa-frown"></i></div>';
        return;
    }
    
    container.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.oldPrice ? `<div class="product-badge">Sale</div>` : ''}
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300'">
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

function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-products');
    const sortSelect = document.getElementById('sort-products');
    
    let currentProducts = [...productsDatabase];
    
    function applyFilters() {
        let filtered = [...productsDatabase];
        
        // Category filter
        if (categoryFilter && categoryFilter.value !== 'all') {
            filtered = filtered.filter(p => p.category === categoryFilter.value);
        }
        
        // Price filter
        if (priceFilter && priceFilter.value !== 'all') {
            const [min, max] = priceFilter.value.split('-').map(Number);
            filtered = filtered.filter(p => p.price >= min && (max ? p.price <= max : true));
        }
        
        // Search
        if (searchInput && searchInput.value) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchInput.value.toLowerCase())
            );
        }
        
        // Sort
        if (sortSelect) {
            switch(sortSelect.value) {
                case 'price-low':
                    filtered.sort((a,b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a,b) => b.price - a.price);
                    break;
                case 'rating':
                    filtered.sort((a,b) => b.rating - a.rating);
                    break;
                default:
                    filtered.sort((a,b) => a.id - b.id);
            }
        }
        
        currentProducts = filtered;
        renderProductGrid(currentProducts, 'shop-products-grid');
    }
    
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (priceFilter) priceFilter.addEventListener('change', applyFilters);
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applyFilters);
    
    renderProductGrid(productsDatabase, 'shop-products-grid');
}

// Load single product page
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = getProductById(productId);
    
    if (product && document.getElementById('product-details')) {
        document.getElementById('product-details').innerHTML = `
            <div class="product-detail-container">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <div class="product-rating">${'★'.repeat(Math.floor(product.rating))} (${product.rating})</div>
                    <div class="product-price">
                        <span class="current">₹${product.price}</span>
                        ${product.oldPrice ? `<span class="old">₹${product.oldPrice}</span>` : ''}
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-stock">${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</div>
                    <div class="quantity-selector">
                        <label>Quantity:</label>
                        <button onclick="updateQuantityInput(-1)">-</button>
                        <input type="number" id="product-quantity" value="1" min="1" max="${product.stock}">
                        <button onclick="updateQuantityInput(1)">+</button>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }
}

function updateQuantityInput(change) {
    const input = document.getElementById('product-quantity');
    if (input) {
        let newVal = parseInt(input.value) + change;
        if (newVal >= 1) {
            input.value = newVal;
        }
    }
}