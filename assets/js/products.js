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
    { id: 40, name: "Coconut Oil", category: "oils", price: 220, oldPrice: 280, image: "./assets/images/oil/Coconut Oil.png", rating: 4.8, stock: 80, description: "Pure coconut oil for cooking and hair care." },
    { id: 41, name: "Soybean Oil", category: "oils", price: 140, oldPrice: 180, image: "./assets/images/oil/Soybean Oil.png", rating: 4.5, stock: 150, description: "Healthy soybean cooking oil for daily use." },
    { id: 42, name: "Rice Bran Oil", category: "oils", price: 170, oldPrice: 220, image: "./assets/images/oil/Rice Bran Oil.png", rating: 4.6, stock: 100, description: "Light and healthy rice bran oil." },
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
    { id: 58, name: "Nigella Seeds", category: "spices", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1596040033229-a9821a540eb3?w=300", rating: 4.5, stock: 130, description: "Healthy aromatic seeds (kalonji)." },

    // ========== DAIRY PRODUCTS 🥛🧀🧈🍦 ==========
    
    // Milk Products 🥛
    { id: 100, name: "Fresh Cow Milk", category: "dairy", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 200, description: "Fresh pasteurized cow milk, rich in calcium and protein. 1 liter pack." },
    { id: 101, name: "Organic A2 Milk", category: "dairy", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 100, description: "Premium A2 Desi cow milk, easily digestible and nutrient-rich. 1 liter." },
    { id: 102, name: "Full Cream Milk", category: "dairy", price: 70, oldPrice: 85, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.8, stock: 150, description: "Rich and creamy full cream milk perfect for tea, coffee, and desserts." },
    { id: 103, name: "Toned Milk", category: "dairy", price: 55, oldPrice: 70, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.7, stock: 180, description: "Low-fat toned milk for health-conscious families. 1 liter pack." },
    { id: 104, name: "Skimmed Milk", category: "dairy", price: 50, oldPrice: 65, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.6, stock: 120, description: "Zero-fat skimmed milk ideal for weight management." },
    { id: 105, name: "Flavored Milk - Chocolate", category: "dairy", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.8, stock: 200, description: "Delicious chocolate flavored milk, kids' favorite." },
    { id: 106, name: "Flavored Milk - Strawberry", category: "dairy", price: 35, oldPrice: 45, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.8, stock: 200, description: "Sweet strawberry flavored milk, perfect for breakfast." },
    { id: 107, name: "Badam Milk", category: "dairy", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300", rating: 4.9, stock: 150, description: "Premium almond flavored milk with real almond pieces." },
    
    // Curd & Yogurt 🥄
    { id: 108, name: "Fresh Curd", category: "dairy", price: 45, oldPrice: 60, image: "https://images.unsplash.com/photo-1550583724-c2692d22c3b7?w=300", rating: 4.8, stock: 200, description: "Creamy and fresh curd made from cow's milk. 500g pack." },
    { id: 109, name: "Greek Yogurt", category: "dairy", price: 95, oldPrice: 130, image: "https://images.unsplash.com/photo-1488477181946-6428a0291779?w=300", rating: 4.9, stock: 100, description: "Thick and creamy Greek yogurt, high in protein. 400g pack." },
    { id: 110, name: "Flavored Yogurt - Mango", category: "dairy", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1488477181946-6428a0291779?w=300", rating: 4.8, stock: 150, description: "Delicious mango flavored yogurt cup." },
    { id: 111, name: "Flavored Yogurt - Mixed Berry", category: "dairy", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1488477181946-6428a0291779?w=300", rating: 4.8, stock: 150, description: "Mixed berry yogurt with real fruit pieces." },
    { id: 112, name: "Probiotic Drink", category: "dairy", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1550583724-c2692d22c3b7?w=300", rating: 4.7, stock: 180, description: "Healthy probiotic drink for gut health. 200ml bottle." },
    
    // Butter 🧈
    { id: 113, name: "Salted Butter", category: "dairy", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300", rating: 4.8, stock: 150, description: "Creamy salted butter perfect for toast and cooking. 100g pack." },
    { id: 114, name: "Unsalted Butter", category: "dairy", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300", rating: 4.8, stock: 150, description: "Pure unsalted butter for baking and cooking." },
    { id: 115, name: "Garlic Butter", category: "dairy", price: 65, oldPrice: 85, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300", rating: 4.9, stock: 100, description: "Flavored garlic butter for garlic bread and pasta." },
    { id: 116, name: "White Butter", category: "dairy", price: 70, oldPrice: 95, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300", rating: 4.8, stock: 80, description: "Traditional homemade style white butter. 200g pack." },
    { id: 117, name: "Amul Butter", category: "dairy", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300", rating: 4.9, stock: 200, description: "Classic Amul butter - India's favorite!" },
    
    // Cheese 🧀
    { id: 118, name: "Cheddar Cheese", category: "dairy", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.8, stock: 120, description: "Aged cheddar cheese block, perfect for sandwiches and pasta. 200g." },
    { id: 119, name: "Mozzarella Cheese", category: "dairy", price: 140, oldPrice: 180, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.9, stock: 100, description: "Stretchy mozzarella cheese for pizzas and pasta." },
    { id: 120, name: "Processed Cheese Slices", category: "dairy", price: 80, oldPrice: 110, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.7, stock: 200, description: "Convenient cheese slices for burgers and sandwiches." },
    { id: 121, name: "Cream Cheese", category: "dairy", price: 100, oldPrice: 135, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.8, stock: 90, description: "Smooth and creamy spreadable cheese. 200g pack." },
    { id: 122, name: "Gouda Cheese", category: "dairy", price: 160, oldPrice: 210, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.9, stock: 70, description: "Premium Dutch Gouda cheese with nutty flavor." },
    { id: 123, name: "Paneer (Cottage Cheese)", category: "dairy", price: 180, oldPrice: 220, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300", rating: 4.9, stock: 150, description: "Fresh, soft paneer for Indian dishes like palak paneer." },
    { id: 124, name: "Cheese Spread - Garlic & Herb", category: "dairy", price: 85, oldPrice: 115, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.7, stock: 100, description: "Flavored cheese spread for bread and crackers." },
    { id: 125, name: "Grated Parmesan Cheese", category: "dairy", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1529928520614-7c76e2d99740?w=300", rating: 4.8, stock: 80, description: "Authentic grated Parmesan for pasta and salads." },
    
    // Ice Cream 🍦
    { id: 126, name: "Vanilla Ice Cream", category: "dairy", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.8, stock: 150, description: "Classic creamy vanilla ice cream. 1 liter tub." },
    { id: 127, name: "Chocolate Ice Cream", category: "dairy", price: 130, oldPrice: 170, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.9, stock: 140, description: "Rich chocolate ice cream with deep cocoa flavor." },
    { id: 128, name: "Strawberry Ice Cream", category: "dairy", price: 130, oldPrice: 170, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.8, stock: 140, description: "Fresh strawberry ice cream with real fruit pieces." },
    { id: 129, name: "Mango Ice Cream", category: "dairy", price: 140, oldPrice: 180, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.9, stock: 120, description: "Tropical mango ice cream with real Alphonso mangoes." },
    { id: 130, name: "Butterscotch Ice Cream", category: "dairy", price: 140, oldPrice: 180, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.8, stock: 120, description: "Caramel butterscotch ice cream with crunchy bits." },
    { id: 131, name: "Chocolate Chip Cookie Dough", category: "dairy", price: 160, oldPrice: 210, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.9, stock: 100, description: "Cookie dough pieces in vanilla ice cream." },
    { id: 132, name: "Kulfi (Malai)", category: "dairy", price: 60, oldPrice: 80, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.9, stock: 200, description: "Traditional Indian malai kulfi on a stick." },
    { id: 133, name: "Kesar Pista Kulfi", category: "dairy", price: 70, oldPrice: 95, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.9, stock: 180, description: "Saffron and pistachio flavored kulfi." },
    { id: 134, name: "Ice Cream Cone - Vanilla", category: "dairy", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.7, stock: 300, description: "Ready-to-eat vanilla ice cream cone." },
    { id: 135, name: "Ice Cream Cone - Chocolate", category: "dairy", price: 40, oldPrice: 55, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.7, stock: 300, description: "Ready-to-eat chocolate ice cream cone." },
    { id: 136, name: "Sugar-Free Ice Cream", category: "dairy", price: 150, oldPrice: 190, image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300", rating: 4.6, stock: 80, description: "Diabetic-friendly sugar-free vanilla ice cream." },
    
    // Candy & Chocolates 🍬
    { id: 137, name: "Mixed Fruit Candies", category: "dairy", price: 30, oldPrice: 45, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.6, stock: 500, description: "Assorted fruit-flavored hard candies." },
    { id: 138, name: "Milk Chocolate Bar", category: "dairy", price: 50, oldPrice: 70, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.8, stock: 300, description: "Creamy milk chocolate bar. 50g." },
    { id: 139, name: "Dark Chocolate (70% Cocoa)", category: "dairy", price: 80, oldPrice: 110, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.9, stock: 200, description: "Rich dark chocolate with antioxidants. 50g." },
    { id: 140, name: "White Chocolate Bar", category: "dairy", price: 60, oldPrice: 85, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.7, stock: 250, description: "Sweet and creamy white chocolate bar." },
    { id: 141, name: "Chocolate Truffles", category: "dairy", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.9, stock: 150, description: "Premium assorted chocolate truffles. 150g pack." },
    { id: 142, name: "Gummy Bears", category: "dairy", price: 40, oldPrice: 60, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.7, stock: 400, description: "Soft and chewy gummy bear candies." },
    { id: 143, name: "Sour Candy Strips", category: "dairy", price: 35, oldPrice: 50, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.6, stock: 350, description: "Tangy sour candy strips in assorted flavors." },
    { id: 144, name: "Chocolate Fudge", category: "dairy", price: 90, oldPrice: 120, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.8, stock: 180, description: "Soft and gooey chocolate fudge pieces." },
    { id: 145, name: "Lollipops (Assorted)", category: "dairy", price: 25, oldPrice: 40, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.5, stock: 600, description: "Colorful assorted flavor lollipops." },
    { id: 146, name: "Toffee (Eclairs)", category: "dairy", price: 30, oldPrice: 45, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.7, stock: 500, description: "Creamy caramel toffee candies." },
    { id: 147, name: "Hazelnut Chocolate", category: "dairy", price: 100, oldPrice: 140, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.9, stock: 120, description: "Smooth chocolate with whole hazelnuts." },
    { id: 148, name: "Mint Chocolate Bar", category: "dairy", price: 55, oldPrice: 75, image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=300", rating: 4.8, stock: 200, description: "Refreshing mint flavored chocolate bar." },
    { id: 149, name: "Assorted Candy Jar", category: "dairy", price: 150, oldPrice: 200, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.8, stock: 100, description: "Party pack with assorted candies. 500g jar." },
    { id: 150, name: "Caramel Popcorn", category: "dairy", price: 80, oldPrice: 110, image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=300", rating: 4.8, stock: 150, description: "Sweet caramel coated popcorn." }
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

// Get dairy products specifically
function getDairyProducts() {
    return productsDatabase.filter(p => p.category === 'dairy');
}

// Get milk products
function getMilkProducts() {
    return productsDatabase.filter(p => p.category === 'dairy' && 
        (p.name.includes("Milk") || p.name.includes("Curd") || p.name.includes("Yogurt")));
}

// Get cheese products
function getCheeseProducts() {
    return productsDatabase.filter(p => p.category === 'dairy' && 
        (p.name.includes("Cheese") || p.name.includes("Paneer")));
}

// Get butter products
function getButterProducts() {
    return productsDatabase.filter(p => p.category === 'dairy' && p.name.includes("Butter"));
}

// Get ice cream products
function getIceCreamProducts() {
    return productsDatabase.filter(p => p.category === 'dairy' && 
        (p.name.includes("Ice Cream") || p.name.includes("Kulfi") || p.name.includes("Cone")));
}

// Get candy and chocolate products
function getCandyProducts() {
    return productsDatabase.filter(p => p.category === 'dairy' && 
        (p.name.includes("Chocolate") || p.name.includes("Candy") || p.name.includes("Toffee") || 
         p.name.includes("Gummy") || p.name.includes("Lollipop") || p.name.includes("Fudge") || 
         p.name.includes("Popcorn")));
}