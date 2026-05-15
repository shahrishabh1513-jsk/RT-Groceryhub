// ========== COMPLETE PRODUCTS DATABASE ==========
const productsDatabase = [
    // Vegetables 🥔🥦
    { id: 1, name: "Potato", category: "vegetables", price: 40, oldPrice: 55, image: "./assets/images/Vegetables/potato.png", rating: 4.5, stock: 100, description: "Fresh potatoes for cooking and frying. Rich in carbohydrates and vitamin C." },
    { id: 2, name: "Tomato", category: "vegetables", price: 30, oldPrice: 45, image: "./assets/images/Vegetables/Tomoto.png", rating: 4.6, stock: 120, description: "Juicy red tomatoes for salads and curry. Perfect for Indian cooking." },
    { id: 3, name: "Cabbage", category: "vegetables", price: 35, oldPrice: 50, image: "./assets/images/Vegetables/cabbage.png", rating: 4.4, stock: 80, description: "Fresh green cabbage rich in fiber and vitamins." },
    { id: 4, name: "Cauliflower", category: "vegetables", price: 45, oldPrice: 65, image: "./assets/images/Vegetables/Cauli flower.png", rating: 4.7, stock: 70, description: "Healthy cauliflower for vegetables and curry dishes." },
    { id: 5, name: "Sweet Potato", category: "vegetables", price: 50, oldPrice: 70, image: "./assets/images/Vegetables/Sweet Potato.png", rating: 4.8, stock: 60, description: "Naturally sweet and nutritious sweet potatoes." },
    { id: 6, name: "Brinjal", category: "vegetables", price: 40, oldPrice: 55, image: "./assets/images/Vegetables/Brinjal.png", rating: 4.5, stock: 90, description: "Fresh brinjal (eggplant) for Indian dishes like baingan bharta." },
    { id: 7, name: "Carrot", category: "vegetables", price: 60, oldPrice: 80, image: "./assets/images/Vegetables/Carrat.png", rating: 4.9, stock: 85, description: "Crunchy carrots rich in vitamin A and antioxidants." },
    { id: 8, name: "Peas", category: "vegetables", price: 45, oldPrice: 60, image: "./assets/images/Vegetables/peas.png", rating: 4.6, stock: 100, description: "Fresh green peas for cooking and curries." },
    { id: 9, name: "Bottle Gourd", category: "vegetables", price: 35, oldPrice: 50, image: "./assets/images/Vegetables/Bottle Gound.png", rating: 4.3, stock: 75, description: "Light and healthy bottle gourd (lauki)." },
    { id: 10, name: "Onion", category: "vegetables", price: 30, oldPrice: 45, image: "./assets/images/Vegetables/Onion.png", rating: 4.4, stock: 150, description: "Essential kitchen vegetable, adds flavor to every dish." },
    { id: 11, name: "Drumstick", category: "vegetables", price: 50, oldPrice: 70, image: "./assets/images/Vegetables/Drumstick.png", rating: 4.7, stock: 50, description: "Nutritious drumsticks for sambar and curry." },
    { id: 12, name: "Pointed Gourd", category: "vegetables", price: 55, oldPrice: 75, image: "./assets/images/Vegetables/Point Gourd.png", rating: 4.5, stock: 65, description: "Fresh pointed gourd (parwal) for Indian recipes." },
    { id: 13, name: "Green Bean", category: "vegetables", price: 40, oldPrice: 55, image: "./assets/images/Vegetables/Green Bean.png", rating: 4.6, stock: 80, description: "Fresh beans rich in nutrients and fiber." },
    { id: 14, name: "Ridge Gourd", category: "vegetables", price: 35, oldPrice: 50, image: "./assets/images/Vegetables/Ridged Gourd.png", rating: 4.4, stock: 70, description: "Soft ridge gourd (tori) for light curries." },
    { id: 15, name: "Cucumber", category: "vegetables", price: 30, oldPrice: 45, image: "./assets/images/Vegetables/Cucumber.png", rating: 4.5, stock: 110, description: "Cool and refreshing cucumbers for salads." },

    // Fruits 🍎🍉
    { id: 16, name: "Cranberry", category: "fruits", price: 120, oldPrice: 160, image: "./assets/images/Fruits/Cranberry.png", rating: 4.8, stock: 40, description: "Tangy berries rich in antioxidants and vitamin C." },
    { id: 17, name: "Orange", category: "fruits", price: 80, oldPrice: 110, image: "./assets/images/Fruits/Orange.png", rating: 4.7, stock: 90, description: "Juicy oranges rich in Vitamin C and fiber." },
    { id: 18, name: "Apple", category: "fruits", price: 140, oldPrice: 180, image: "./assets/images/Fruits/Apple.png", rating: 4.9, stock: 70, description: "Sweet and crispy apples from Himalayan orchards." },
    { id: 19, name: "Banana", category: "fruits", price: 60, oldPrice: 80, image: "./assets/images/Fruits/Banana.png", rating: 4.6, stock: 120, description: "Fresh bananas, rich in potassium and energy." },
    { id: 20, name: "Cherry", category: "fruits", price: 180, oldPrice: 240, image: "./assets/images/Fruits/Cherry.png", rating: 4.9, stock: 30, description: "Sweet cherries, perfect for snacking and desserts." },
    { id: 21, name: "Grapes", category: "fruits", price: 70, oldPrice: 95, image: "./assets/images/Fruits/Grapes.png", rating: 4.7, stock: 85, description: "Fresh seedless grapes, sweet and juicy." },
    { id: 22, name: "Peach", category: "fruits", price: 120, oldPrice: 160, image: "./assets/images/Fruits/Peach.png", rating: 4.8, stock: 50, description: "Soft and juicy peaches with sweet flesh." },
    { id: 23, name: "Black Currant", category: "fruits", price: 150, oldPrice: 200, image: "./assets/images/Fruits/Black Currant.png", rating: 4.8, stock: 35, description: "Tangy berries packed with nutrients and antioxidants." },
    { id: 24, name: "Blueberry", category: "fruits", price: 220, oldPrice: 280, image: "./assets/images/Fruits/Blueberry.png", rating: 4.9, stock: 25, description: "Premium blueberries rich in antioxidants." },
    { id: 25, name: "Watermelon", category: "fruits", price: 90, oldPrice: 120, image: "./assets/images/Fruits/Watermelon.png", rating: 4.7, stock: 60, description: "Sweet and refreshing watermelon, perfect for summer." },
    { id: 26, name: "Pineapple", category: "fruits", price: 80, oldPrice: 110, image: "./assets/images/Fruits/Pineapple.png", rating: 4.6, stock: 55, description: "Tropical fruit with sweet and juicy taste." },
    { id: 27, name: "Strawberry", category: "fruits", price: 140, oldPrice: 180, image: "./assets/images/Fruits/Strawberry.png", rating: 4.8, stock: 45, description: "Fresh strawberries with rich flavor and aroma." },
    { id: 28, name: "Avocado", category: "fruits", price: 120, oldPrice: 160, image: "./assets/images/Fruits/Avocado.png", rating: 4.8, stock: 40, description: "Creamy avocado for healthy meals and salads." },
    { id: 29, name: "Dragon Fruit", category: "fruits", price: 110, oldPrice: 150, image: "./assets/images/Fruits/Dragon Fruit.png", rating: 4.7, stock: 35, description: "Exotic fruit rich in nutrients and antioxidants." },
    { id: 30, name: "Kiwi", category: "fruits", price: 100, oldPrice: 135, image: "./assets/images/Fruits/Kiwi.png", rating: 4.8, stock: 50, description: "Tangy kiwi rich in Vitamin C and fiber." },

    // Grains 🌾
    { id: 31, name: "Corn (Maize)", category: "grains", price: 45, oldPrice: 60, image: "./assets/images/Grains & Rice/Corn.png", rating: 4.5, stock: 100, description: "Fresh maize for snacks and healthy meals." },
    { id: 32, name: "Wheat", category: "grains", price: 40, oldPrice: 55, image: "./assets/images/Grains & Rice/Wheat.png", rating: 4.6, stock: 200, description: "Premium quality wheat grains for atta." },
    { id: 33, name: "Oats", category: "grains", price: 120, oldPrice: 160, image: "./assets/images/Grains & Rice/Oats.png", rating: 4.8, stock: 150, description: "Healthy oats for a nutritious breakfast." },
    { id: 34, name: "Basmati Rice", category: "grains", price: 90, oldPrice: 120, image: "./assets/images/Grains & Rice/Basmati Rice.png", rating: 4.9, stock: 120, description: "Aromatic long grain basmati rice for biryani." },
    { id: 35, name: "Regular Rice", category: "grains", price: 55, oldPrice: 75, image: "./assets/images/Grains & Rice/Regular Rice.png", rating: 4.7, stock: 200, description: "Daily use rice for everyday meals." },
    { id: 36, name: "Bajri", category: "grains", price: 50, oldPrice: 65, image: "./assets/images/Grains & Rice/Bajri.png", rating: 4.5, stock: 100, description: "Nutritious pearl millet for rotis." },
    { id: 37, name: "Jowar", category: "grains", price: 45, oldPrice: 60, image: "./assets/images/Grains & Rice/Jowar.png", rating: 4.6, stock: 90, description: "Healthy sorghum grain for gluten-free diet." },
   
    // Oils 🛢️
    { id: 40, name: "Coconut Oil", category: "oils", price: 220, oldPrice: 280, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.8, stock: 80, description: "Pure coconut oil for cooking and hair care." },
    { id: 41, name: "Soybean Oil", category: "oils", price: 140, oldPrice: 180, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.5, stock: 150, description: "Healthy soybean cooking oil for daily use." },
    { id: 42, name: "Rice Bran Oil", category: "oils", price: 170, oldPrice: 220, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.6, stock: 100, description: "Light and healthy rice bran oil." },
    { id: 43, name: "Sunflower Oil", category: "oils", price: 160, oldPrice: 210, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.5, stock: 120, description: "Popular daily cooking oil." },
    { id: 44, name: "Mustard Oil", category: "oils", price: 190, oldPrice: 250, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.7, stock: 90, description: "Strong flavored mustard oil for authentic taste." },
    { id: 45, name: "Olive Oil", category: "oils", price: 450, oldPrice: 600, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300", rating: 4.9, stock: 60, description: "Premium olive oil for healthy cooking." },

    // Spices 🌶️✨
    { id: 46, name: "Red Chilli", category: "spices", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300", rating: 4.6, stock: 200, description: "Spicy red chilli powder for heat in dishes." },
    { id: 47, name: "Turmeric", category: "spices", price: 30, oldPrice: 45, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300", rating: 4.8, stock: 180, description: "Pure turmeric powder with medicinal properties." },
    { id: 48, name: "Cumin", category: "spices", price: 45, oldPrice: 65, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.7, stock: 150, description: "Aromatic cumin seeds for tempering." },
    { id: 49, name: "Bay Leaf", category: "spices", price: 20, oldPrice: 30, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300", rating: 4.5, stock: 250, description: "Fragrant leaves for biryani and curries." },
    { id: 50, name: "Cinnamon", category: "spices", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1589118949248-6c2b63a4e0e8?w=300", rating: 4.8, stock: 120, description: "Sweet aromatic spice for desserts and chai." },
    { id: 51, name: "White Pepper", category: "spices", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300", rating: 4.6, stock: 100, description: "Mild spicy white pepper powder." },
    { id: 52, name: "Star Anise", category: "spices", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1589118949248-6c2b63a4e0e8?w=300", rating: 4.7, stock: 80, description: "Strong aromatic spice for biryani." },
    { id: 53, name: "Cloves", category: "spices", price: 80, oldPrice: 110, image: "https://images.unsplash.com/photo-1589118949248-6c2b63a4e0e8?w=300", rating: 4.7, stock: 90, description: "Flavorful cloves for aromatic dishes." },
    { id: 54, name: "Black Cardamom", category: "spices", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1589118949248-6c2b63a4e0e8?w=300", rating: 4.8, stock: 70, description: "Strong flavored cardamom for rich dishes." },
    { id: 55, name: "Saffron", category: "spices", price: 250, oldPrice: 350, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.9, stock: 30, description: "Premium saffron strands for desserts and biryani." },
    { id: 56, name: "Black Pepper", category: "spices", price: 70, oldPrice: 95, image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=300", rating: 4.7, stock: 120, description: "Classic spicy pepper for seasoning." },
    { id: 57, name: "Fennel Seeds", category: "spices", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.6, stock: 140, description: "Sweet fennel seeds for mouth freshener." },
    { id: 58, name: "Nigella Seeds", category: "spices", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.5, stock: 130, description: "Healthy aromatic seeds (kalonji)." }
];

// Brand data for auto-slider
const brands = [
    { name: "Amul", logo: "assets/Brand_logo/Amul.jpg" },
    { name: "Nestle", logo: "assets/Brand_logo/NESTLE.jpg" },
    { name: "Britannia", logo: "assets/Brand_logo/BRITANNIA.jpg" },
    { name: "Patanjali", logo: "assets/Brand_logo/PATANJALI.jpg" },
    { name: "Tata Sampann", logo: "assets/Brand_logo/TataSampann.jpg" },
    { name: "Fortune", logo: "assets/Brand_logo/Fortune.jpg" },
    { name: "Daawat", logo: "assets/Brand_logo/Daawat.png" },
    { name: "India Gate", logo: "assets/Brand_logo/India Gate.png" }
];

function getAllProducts() {
    return productsDatabase;
}

function getProductsByCategory(category) {
    if (category === 'all') return productsDatabase;
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

function getProductsByPriceRange(min, max) {
    return productsDatabase.filter(p => p.price >= min && p.price <= max);
}

function sortProducts(products, sortType) {
    const sorted = [...products];
    switch(sortType) {
        case 'price-low':
            return sorted.sort((a,b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a,b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a,b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a,b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}