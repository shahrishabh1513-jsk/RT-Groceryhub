// 100% vegetarian catalogue (no meat, fish, eggs). Dairy allowed; bakery is eggless.
window.RT_CATS = [
    { id: "veg", name: "Fresh Vegetables", e: "🥕", bg: "#EAF5EC" }, { id: "fruits", name: "Fruits", e: "🍎", bg: "#FFF0E8" },
    { id: "dairy", name: "Dairy Products", e: "🥛", bg: "#EAF5EC" }, { id: "bakery", name: "Bakery (Eggless)", e: "🍞", bg: "#FFF0E8" },
    { id: "bev", name: "Beverages", e: "🧃", bg: "#EAF5EC" }, { id: "grains", name: "Rice & Grains", e: "🌾", bg: "#FFF0E8" },
    { id: "snacks", name: "Snacks", e: "🥨", bg: "#EAF5EC" }, { id: "pantry", name: "Pantry & Cooking Oil", e: "🫒", bg: "#FFF0E8" },
    { id: "frozen", name: "Frozen Veg Snacks", e: "🍟", bg: "#EAF5EC" }, { id: "spices", name: "Spices & Masala", e: "🌶️", bg: "#FFF0E8" },
    { id: "dry", name: "Dry Fruits & Nuts", e: "🥜", bg: "#EAF5EC" }, { id: "home", name: "Household & Personal Care", e: "🧴", bg: "#FFF0E8" }];
(function () {
    const raw = {
        grains: "Premium Basmati Rice,India Gate,5 kg,620,🍚;Regular Rice,Daawat,5 kg,340,🍚;Brown Rice,Organic Tattva,1 kg,160,🌾;Sona Masoori Rice,Fortune,5 kg,430,🍚;Wheat Flour,Aashirvaad,5 kg,265,🌾;Multigrain Atta,Aashirvaad,5 kg,350,🌾;Poha,Tata Sampann,500 g,60,🍚;Dalia,Patanjali,500 g,55,🌾;Oats,Quaker,1 kg,215,🥣;Quinoa,Organic Tattva,500 g,380,🌾;Ragi Flour,Tata Sampann,500 g,75,🌾;Corn Flour,Weikfield,500 g,90,🌽",
        fruits: "Organic Apples,Fresh Farms,1 kg,260,🍎;Fresh Bananas,Fresh Farms,1 dozen,70,🍌;Mango,Fresh Farms,1 kg,180,🥭;Fresh Oranges,Fresh Farms,1 kg,120,🍊;Fresh Green Grapes,Fresh Farms,500 g,110,🍇;Pomegranate,Fresh Farms,1 kg,240,🍎;Watermelon,Fresh Farms,1 piece (~3 kg),110,🍉;Papaya,Fresh Farms,1 piece (~1 kg),80,🍈;Guava,Fresh Farms,500 g,70,🍐;Kiwi,Zespri,3 pcs,150,🥝;Pineapple,Fresh Farms,1 piece,90,🍍;Strawberry,Fresh Farms,200 g,120,🍓;Pear,Fresh Farms,500 g,130,🍐;Sweet Lime,Fresh Farms,1 kg,110,🍋",
        veg: "Potato,Fresh Farms,1 kg,40,🥔;Onion,Fresh Farms,1 kg,45,🧅;Organic Red Tomatoes,Fresh Farms,500 g,45,🍅;Cucumber,Fresh Farms,500 g,35,🥒;Fresh Carrots,Fresh Farms,500 g,50,🥕;Capsicum,Fresh Farms,250 g,45,🫑;Cauliflower,Fresh Farms,1 piece,50,🥦;Broccoli,Fresh Farms,250 g,70,🥦;Spinach,Fresh Farms,250 g,30,🥬;Green Peas,Fresh Farms,500 g,90,🫛;Cabbage,Fresh Farms,1 piece,40,🥬;Beetroot,Fresh Farms,500 g,40,🫜;Brinjal,Fresh Farms,500 g,45,🍆;Ladyfinger,Fresh Farms,500 g,60,🫛;Green Chilli,Fresh Farms,100 g,20,🌶️;Ginger,Fresh Farms,250 g,50,🫚;Garlic,Fresh Farms,250 g,70,🧄",
        dairy: "Fresh Whole Milk,Amul,1 L,72,🥛;Butter,Amul,500 g,290,🧈;Cheese Slices,Britannia,200 g,140,🧀;Paneer,Mother Dairy,500 g,200,🧀;Curd,Mother Dairy,1 kg,80,🥣;Pure Ghee,Amul,1 L,650,🧈;Fresh Cream,Amul,250 ml,75,🥛;Buttermilk,Amul,200 ml,20,🥛;Flavoured Milk,Amul Kool,200 ml,30,🥛;Dairy Dessert,Mother Dairy,100 g,35,🍮",
        bakery: "White Bread,Britannia,400 g,50,🍞;Brown Bread,Britannia,400 g,55,🍞;Multigrain Bread,Harvest Gold,400 g,60,🍞;Eggless Cake,Monginis,350 g,320,🍰;Eggless Muffins,Monginis,2 pcs,120,🧁;Cookies,Britannia,200 g,60,🍪;Biscuits,Parle,500 g,60,🍪;Croissants,Harvest Gold,2 pcs,90,🥐;Rusk,Britannia,300 g,70,🍞;Khari,Local Bakery,200 g,60,🥨",
        bev: "Orange Juice,Real,1 L,120,🍊;Mango Juice,Maaza,1.2 L,80,🥭;Apple Juice,Tropicana,1 L,125,🍎;Lemon Drink,Nimbooz,600 ml,40,🍋;Mineral Water,Bisleri,1 L,20,💧;Green Tea,Tetley,25 bags,170,🍵;Black Tea,Tata Tea,500 g,260,🫖;Coffee,Nescafé,100 g,350,☕;Cold Drink,Coca-Cola,2 L,100,🥤;Chocolate Milkshake,Amul,200 ml,40,🥤;Coconut Water,Raw Pressery,200 ml,40,🥥",
        snacks: "Potato Chips,Lay's,90 g,40,🥔;Banana Chips,Haldiram's,200 g,90,🍌;Namkeen Mix,Haldiram's,400 g,130,🥨;Bhujia,Haldiram's,400 g,130,🥨;Popcorn,Act II,100 g,50,🍿;Nachos,Doritos,90 g,50,🌮;Wafers,Balaji,150 g,50,🥔;Roasted Makhana,Farmley,90 g,180,🌰;Peanuts,Tata Sampann,200 g,60,🥜;Chocolates,Cadbury,150 g,160,🍫",
        pantry: "Sunflower Oil,Fortune,1 L,160,🌻;Groundnut Oil,Fortune,1 L,220,🥜;Mustard Oil,Fortune,1 L,170,🫒;Rice Bran Oil,Fortune,1 L,150,🫒;Olive Oil,Figaro,500 ml,650,🫒;Sugar,Tata,1 kg,55,🧂;Salt,Tata,1 kg,28,🧂;Jaggery,Organic Tattva,500 g,70,🟤;Honey,Dabur,500 g,260,🍯;Tomato Ketchup,Maggi,1 kg,160,🍅;Soy Sauce,Ching's,200 ml,70,🫙;Vinegar,Tata,500 ml,40,🫙",
        frozen: "French Fries,McCain,420 g,150,🍟;Potato Nuggets,McCain,400 g,170,🥔;Veg Burger Patties,McCain,360 g,170,🍔;Frozen Samosa,Haldiram's,300 g,120,🥟;Spring Rolls,Godrej Yummiez,240 g,150,🌯;Veg Momos,Wow! Momo,240 g,160,🥟;Frozen Paratha,Haldiram's,400 g,110,🫓;Frozen Corn,Safal,500 g,110,🌽;Veg Cutlets,Godrej Yummiez,240 g,140,🥘;Potato Wedges,McCain,400 g,150,🥔",
        spices: "Turmeric Powder,Tata Sampann,200 g,60,🟡;Red Chilli Powder,Everest,200 g,90,🌶️;Coriander Powder,Everest,200 g,60,🌿;Cumin,Tata Sampann,100 g,70,🌱;Garam Masala,Everest,100 g,85,🟤;Kitchen King Masala,MDH,100 g,90,🟤;Black Pepper,Tata Sampann,50 g,90,⚫;Mustard Seeds,Tata Sampann,100 g,30,🟤;Cardamom,Catch,25 g,150,🌿;Cinnamon,Catch,50 g,60,🟤",
        dry: "Almonds,Happilo,500 g,520,🌰;Cashews,Happilo,500 g,600,🥜;Raisins,Tata Sampann,500 g,200,🍇;Walnuts,Happilo,250 g,360,🌰;Pistachios,Happilo,200 g,420,🥜;Dates,Lion,500 g,180,🟤;Figs,Happilo,250 g,320,🟣;Roasted Peanuts,Tata Sampann,500 g,110,🥜;Pumpkin Seeds,Farmley,200 g,190,🌱;Chia Seeds,Farmley,250 g,190,🌱",
        home: "Detergent Powder,Surf Excel,1 kg,130,🧺;Dishwashing Liquid,Vim,500 ml,110,🍽️;Floor Cleaner,Lizol,975 ml,200,🧽;Handwash,Dettol,200 ml,99,🧼;Soap,Dove,3 x 100 g,180,🧼;Shampoo,Dove,340 ml,330,🧴;Toothpaste,Colgate,200 g,120,🪥;Toilet Cleaner,Harpic,500 ml,100,🚽;Tissue Paper,Origami,10 rolls,300,🧻;Garbage Bags,Ezee,30 bags,120,🛍️"
    };
    const ds = [5, 8, 10, 12, 15, 18, 20]; let id = 0; window.RT_PRODUCTS = [];
    RT_CATS.forEach(c => raw[c.id].split(";").forEach(s => {
        const [n, b, u, m, e] = s.split(","); id++; const d = ds[id % 7], mrp = +m;
        RT_PRODUCTS.push({
            id, name: n, brand: b, cat: c.id, unit: u, mrp, price: Math.round(mrp * (1 - d / 100)), disc: d, rating: +(3.8 + ((id * 7) % 12) / 10).toFixed(1),
            stock: id % 23 === 0 ? 0 : 5 + (id * 13) % 60, pop: (id * 37) % 100, isNew: id % 9 === 0, e, bg: c.bg,
            desc: `${n} by ${b}, pack of ${u}. Part of our 100% vegetarian range – always check the pack label for ingredients and allergens.`
        });
    }));
})();

// Real photos available in assets/images/products/<id>.jpg (Fruits-360 dataset, CC BY-SA 4.0). Drop more <id>.jpg files in and add the id here.
window.RT_PHOTOS = [1, 2, 3, 4, 6, 7, 12, 13, 15, 16, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 104, 117, 119, 120, 122];
