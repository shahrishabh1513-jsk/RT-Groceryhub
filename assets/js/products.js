// ================================================================
//  GreenBasket — Product Database
//  All images: Unsplash high-quality photos
// ================================================================

const PRODUCTS = [

  // ── VEGETABLES ───────────────────────────────────────────────
  { id:1,  name:"Organic Baby Spinach",   brand:"NatureFresh",  category:"vegetables", price:49,  oldPrice:65,  image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80", rating:4.8, reviews:312, stock:200, unit:"250g", badge:"Organic", description:"Tender baby spinach leaves, washed and ready to eat. Rich in iron and vitamins." },
  { id:2,  name:"Red Bell Peppers",       brand:"FarmDirect",   category:"vegetables", price:89,  oldPrice:120, image:"https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80", rating:4.7, reviews:198, stock:150, unit:"500g", badge:"Fresh",   description:"Bright, sweet red bell peppers. Perfect for salads and stir-fries." },
  { id:3,  name:"Cherry Tomatoes",        brand:"SunRipe",      category:"vegetables", price:75,  oldPrice:95,  image:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80", rating:4.9, reviews:445, stock:180, unit:"500g", badge:"Popular", description:"Juicy, sweet cherry tomatoes bursting with flavour." },
  { id:4,  name:"Broccoli Crown",         brand:"GreenFarm",    category:"vegetables", price:69,  oldPrice:90,  image:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80", rating:4.6, reviews:221, stock:120, unit:"500g", badge:null,      description:"Fresh broccoli crowns, rich in fibre and vitamin C." },
  { id:5,  name:"Purple Cabbage",         brand:"NatureFresh",  category:"vegetables", price:55,  oldPrice:70,  image:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400&q=80", rating:4.5, reviews:167, stock:100, unit:"1 head", badge:null,     description:"Vibrant purple cabbage packed with antioxidants." },
  { id:6,  name:"French Beans",           brand:"FarmDirect",   category:"vegetables", price:59,  oldPrice:75,  image:"https://images.unsplash.com/photo-1627735330979-6f7f32d4f3f2?w=400&q=80", rating:4.6, reviews:133, stock:110, unit:"500g", badge:null,      description:"Tender crisp French beans for salads and curries." },
  { id:7,  name:"Sweet Corn",             brand:"SunRipe",      category:"vegetables", price:45,  oldPrice:60,  image:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&q=80", rating:4.8, reviews:389, stock:200, unit:"2 pcs", badge:"Seasonal", description:"Sweet golden corn cobs, perfect for grilling or boiling." },
  { id:8,  name:"Zucchini",              brand:"GreenFarm",    category:"vegetables", price:79,  oldPrice:99,  image:"https://images.unsplash.com/photo-1566842600175-97dca489844f?w=400&q=80", rating:4.5, reviews:102, stock:90,  unit:"500g", badge:null,      description:"Tender zucchini great for pasta, grilling and baking." },
  { id:9,  name:"Mushrooms - Button",     brand:"FungiFarm",    category:"vegetables", price:99,  oldPrice:130, image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", rating:4.7, reviews:278, stock:150, unit:"200g", badge:"Fresh",   description:"Farm-fresh button mushrooms with earthy flavour." },
  { id:10, name:"Baby Carrots",           brand:"NatureFresh",  category:"vegetables", price:65,  oldPrice:85,  image:"https://images.unsplash.com/photo-1447175008436-054170c2e979?w=400&q=80", rating:4.6, reviews:212, stock:130, unit:"500g", badge:"Organic", description:"Cute, sweet baby carrots — a healthy snack on the go." },
  { id:11, name:"Avocado",               brand:"TropicFresh",  category:"vegetables", price:149, oldPrice:190, image:"https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&q=80", rating:4.9, reviews:521, stock:80,  unit:"2 pcs", badge:"Popular", description:"Creamy, ripe Hass avocados. Ready to eat." },
  { id:12, name:"Cucumber",              brand:"FarmDirect",   category:"vegetables", price:39,  oldPrice:50,  image:"https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&q=80", rating:4.5, reviews:189, stock:200, unit:"3 pcs", badge:null,      description:"Crisp, refreshing cucumbers. Perfect for salads." },

  // ── FRUITS ───────────────────────────────────────────────────
  { id:13, name:"Alphonso Mangoes",       brand:"KonkanKing",   category:"fruits", price:399, oldPrice:499, image:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80", rating:4.9, reviews:892, stock:60,  unit:"1 kg", badge:"Premium",  description:"The king of mangoes — Ratnagiri Alphonso. Sweet, saffron-hued pulp." },
  { id:14, name:"Strawberries",           brand:"HillBerry",    category:"fruits", price:199, oldPrice:260, image:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80", rating:4.8, reviews:634, stock:80,  unit:"250g", badge:"Fresh",   description:"Plump, red strawberries picked at peak sweetness." },
  { id:15, name:"Black Seedless Grapes",  brand:"VineVault",    category:"fruits", price:149, oldPrice:199, image:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80", rating:4.7, reviews:445, stock:100, unit:"500g", badge:null,      description:"Luscious black grapes with no seeds — great for snacking." },
  { id:16, name:"Kiwi Fruits",           brand:"KiwiCraft",    category:"fruits", price:129, oldPrice:169, image:"https://images.unsplash.com/photo-1582404588660-4aa0ef27d18e?w=400&q=80", rating:4.8, reviews:378, stock:90,  unit:"4 pcs", badge:"Imported", description:"Tangy-sweet green kiwis loaded with vitamin C." },
  { id:17, name:"Blueberries",           brand:"BluePeak",     category:"fruits", price:249, oldPrice:320, image:"https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80", rating:4.9, reviews:567, stock:70,  unit:"125g", badge:"Superfood",description:"Antioxidant-rich blueberries. Great for smoothies and desserts." },
  { id:18, name:"Dragon Fruit",          brand:"TropicFresh",  category:"fruits", price:179, oldPrice:230, image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", rating:4.7, reviews:289, stock:50,  unit:"1 pc",  badge:"Exotic",   description:"Stunning dragon fruit with mild, sweet white flesh." },
  { id:19, name:"Papaya",               brand:"TropicFresh",  category:"fruits", price:79,  oldPrice:100, image:"https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80", rating:4.6, reviews:211, stock:120, unit:"1 kg", badge:null,      description:"Ripe, golden papaya rich in papain enzymes." },
  { id:20, name:"Pomegranate",          brand:"RedGranate",   category:"fruits", price:159, oldPrice:200, image:"https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=400&q=80", rating:4.8, reviews:334, stock:100, unit:"2 pcs", badge:"Popular", description:"Jewel-red pomegranate seeds bursting with antioxidants." },
  { id:21, name:"Watermelon",           brand:"SummerSlice",  category:"fruits", price:129, oldPrice:160, image:"https://images.unsplash.com/photo-1587049332298-1c42e83937a7?w=400&q=80", rating:4.7, reviews:421, stock:40,  unit:"1 pc (4-5kg)", badge:"Seasonal", description:"Cool, sweet watermelon — the ultimate summer refresher." },
  { id:22, name:"Pineapple",            brand:"TropicFresh",  category:"fruits", price:99,  oldPrice:130, image:"https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&q=80", rating:4.6, reviews:267, stock:60,  unit:"1 pc", badge:null,      description:"Sweet, tangy pineapple — perfect fresh or in smoothies." },
  { id:23, name:"Figs (Fresh)",         brand:"FigGrove",     category:"fruits", price:299, oldPrice:380, image:"https://images.unsplash.com/photo-1504877800426-0a17d2d50a8c?w=400&q=80", rating:4.8, reviews:189, stock:40,  unit:"250g", badge:"Premium",  description:"Soft, honey-sweet fresh figs. A Mediterranean delicacy." },

  // ── DAIRY & EGGS ─────────────────────────────────────────────
  { id:24, name:"Greek Yogurt - Plain",  brand:"MilkyWay",     category:"dairy", price:149, oldPrice:180, image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80", rating:4.8, reviews:567, stock:150, unit:"400g", badge:"Probiotic", description:"Thick, creamy Greek yogurt with live cultures. No added sugar." },
  { id:25, name:"Free-Range Eggs",       brand:"HappyHen",     category:"dairy", price:119, oldPrice:150, image:"https://images.unsplash.com/photo-1518569656558-1f25e69d2fd4?w=400&q=80", rating:4.9, reviews:789, stock:200, unit:"12 pcs", badge:"Free Range", description:"Golden-yolk eggs from cage-free, pasture-raised hens." },
  { id:26, name:"Aged Cheddar",         brand:"CheeseHouse",  category:"dairy", price:289, oldPrice:360, image:"https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=400&q=80", rating:4.8, reviews:412, stock:80,  unit:"200g", badge:"Aged",     description:"Sharp, crumbly aged cheddar matured for 12 months." },
  { id:27, name:"Fresh Mozzarella",     brand:"ItaliaDelite", category:"dairy", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1607908555464-8003f7e5c1be?w=400&q=80", rating:4.7, reviews:334, stock:90,  unit:"200g", badge:"Fresh",    description:"Soft, milky mozzarella balls. Perfect for Caprese." },
  { id:28, name:"Butter - Salted",      brand:"CreAmour",     category:"dairy", price:89,  oldPrice:110, image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80", rating:4.7, reviews:456, stock:160, unit:"100g", badge:null,       description:"Rich, creamy salted butter for baking and cooking." },
  { id:29, name:"A2 Cow Milk",          brand:"PureMilk",     category:"dairy", price:79,  oldPrice:95,  image:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80", rating:4.9, reviews:623, stock:200, unit:"1 L",   badge:"A2 Protein", description:"Pure A2 milk from desi cows — easier to digest." },
  { id:30, name:"Heavy Cream",          brand:"CreAmour",     category:"dairy", price:129, oldPrice:160, image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80", rating:4.6, reviews:211, stock:100, unit:"200ml", badge:null,       description:"Rich heavy cream for whipping, cooking and baking." },
  { id:31, name:"Paneer - Fresh",       brand:"PureMilk",     category:"dairy", price:139, oldPrice:170, image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80", rating:4.8, reviews:534, stock:130, unit:"200g", badge:"Fresh",    description:"Soft, fresh Indian cottage cheese made daily." },

  // ── BAKERY ───────────────────────────────────────────────────
  { id:32, name:"Sourdough Loaf",        brand:"ArtisanBread", category:"bakery", price:249, oldPrice:299, image:"https://images.unsplash.com/photo-1585478259715-4d3239af8b4e?w=400&q=80", rating:4.9, reviews:678, stock:50,  unit:"750g", badge:"Artisan",  description:"Slow-fermented sourdough with crispy crust and chewy crumb." },
  { id:33, name:"Croissants (4 pack)",   brand:"LaPatisserie",category:"bakery", price:199, oldPrice:240, image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", rating:4.8, reviews:489, stock:60,  unit:"4 pcs", badge:"Freshly Baked", description:"Buttery, flaky French croissants baked fresh each morning." },
  { id:34, name:"Chocolate Croissant",   brand:"LaPatisserie",category:"bakery", price:89,  oldPrice:110, image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", rating:4.8, reviews:534, stock:80,  unit:"1 pc", badge:"Popular",  description:"Dark chocolate-filled croissant — a morning indulgence." },
  { id:35, name:"Multigrain Sandwich Bread", brand:"WheatWorks", category:"bakery", price:79, oldPrice:99, image:"https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&q=80", rating:4.6, reviews:312, stock:100, unit:"400g", badge:null,       description:"Soft multigrain bread packed with seeds and whole grains." },
  { id:36, name:"Blueberry Muffins (2pk)", brand:"MuffinTop",  category:"bakery", price:149, oldPrice:180, image:"https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80", rating:4.7, reviews:398, stock:70,  unit:"2 pcs", badge:"Fresh",   description:"Moist blueberry muffins loaded with real berries." },
  { id:37, name:"Cinnamon Rolls",        brand:"BakersDelight",category:"bakery", price:179, oldPrice:220, image:"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80", rating:4.9, reviews:612, stock:55,  unit:"2 pcs", badge:"Popular", description:"Gooey cinnamon rolls with cream cheese frosting." },
  { id:38, name:"Focaccia Bread",        brand:"ArtisanBread", category:"bakery", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1573821663912-569905455b1c?w=400&q=80", rating:4.7, reviews:278, stock:45,  unit:"400g", badge:"Artisan", description:"Herb-topped Italian focaccia, perfect with olive oil." },
  { id:39, name:"Dark Rye Bread",        brand:"WheatWorks",   category:"bakery", price:169, oldPrice:210, image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80", rating:4.6, reviews:189, stock:60,  unit:"500g", badge:null,      description:"Dense, hearty dark rye bread with robust flavour." },

  // ── BEVERAGES ─────────────────────────────────────────────────
  { id:40, name:"Cold Brew Coffee",      brand:"BrewCraft",    category:"beverages", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80", rating:4.8, reviews:534, stock:100, unit:"350ml", badge:"Chilled", description:"Smooth, low-acid cold brew concentrate. Just add water or milk." },
  { id:41, name:"Matcha Latte Mix",      brand:"ZenLeaf",      category:"beverages", price:349, oldPrice:430, image:"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80", rating:4.8, reviews:412, stock:80,  unit:"150g", badge:"Premium",  description:"Ceremonial-grade Japanese matcha powder for lattes." },
  { id:42, name:"Sparkling Water (6pk)", brand:"AquaPure",     category:"beverages", price:199, oldPrice:240, image:"https://images.unsplash.com/photo-1585621386284-bb69bdbb7c8d?w=400&q=80", rating:4.6, reviews:298, stock:150, unit:"6×330ml", badge:null,    description:"Natural sparkling mineral water with gentle bubbles." },
  { id:43, name:"Fresh Orange Juice",    brand:"SunPress",     category:"beverages", price:149, oldPrice:190, image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80", rating:4.9, reviews:678, stock:120, unit:"1 L",   badge:"Cold-Pressed", description:"100% fresh-pressed orange juice — no added sugar." },
  { id:44, name:"Kombucha - Original",   brand:"BrewGut",      category:"beverages", price:179, oldPrice:220, image:"https://images.unsplash.com/photo-1598143166362-ca437f1ea1ef?w=400&q=80", rating:4.7, reviews:345, stock:90,  unit:"330ml", badge:"Probiotic", description:"Raw, naturally fermented kombucha with live cultures." },
  { id:45, name:"Coconut Water",         brand:"TropicBliss",  category:"beverages", price:79,  oldPrice:99,  image:"https://images.unsplash.com/photo-1559037739-5b6cf6f40da3?w=400&q=80", rating:4.8, reviews:489, stock:200, unit:"330ml", badge:"Natural", description:"Pure coconut water — nature's sports drink." },
  { id:46, name:"Green Juice Blend",     brand:"VitalPress",   category:"beverages", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1609357651067-2f8a7bd0c1be?w=400&q=80", rating:4.7, reviews:267, stock:70,  unit:"500ml", badge:"Detox",   description:"Spinach, cucumber, celery, ginger and apple cold-pressed juice." },
  { id:47, name:"Masala Chai Concentrate", brand:"ChaiPoint",  category:"beverages", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", rating:4.9, reviews:712, stock:110, unit:"500ml", badge:"Popular", description:"Rich, spiced chai concentrate — add milk and serve hot or iced." },
  { id:48, name:"Almond Milk - Unsweetened", brand:"NutBliss", category:"beverages", price:199, oldPrice:249, image:"https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?w=400&q=80", rating:4.7, reviews:378, stock:100, unit:"1 L",   badge:"Vegan",   description:"Smooth, creamy almond milk with no added sugar." },

  // ── SNACKS ───────────────────────────────────────────────────
  { id:49, name:"Trail Mix Deluxe",      brand:"NutNest",      category:"snacks", price:299, oldPrice:370, image:"https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80", rating:4.8, reviews:445, stock:120, unit:"300g", badge:"Popular",  description:"Almonds, cashews, cranberries, dark chocolate chips and more." },
  { id:50, name:"Hummus & Pita Chips",   brand:"DipMaster",    category:"snacks", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&q=80", rating:4.7, reviews:334, stock:100, unit:"200g+100g", badge:null, description:"Creamy classic hummus with crispy baked pita chips." },
  { id:51, name:"Popcorn - Truffle Salt",brand:"CornerKernel", category:"snacks", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1627308595229-7830a5c18e30?w=400&q=80", rating:4.8, reviews:523, stock:150, unit:"100g", badge:"Gourmet",  description:"Gourmet popcorn tossed in black truffle oil and sea salt." },
  { id:52, name:"Dark Chocolate Bar",    brand:"CocoaBliss",   category:"snacks", price:179, oldPrice:220, image:"https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&q=80", rating:4.9, reviews:678, stock:200, unit:"80g", badge:"70% Cocoa",  description:"Intense 70% dark chocolate — rich, complex and satisfying." },
  { id:53, name:"Roasted Chickpeas",     brand:"CrunchLab",    category:"snacks", price:149, oldPrice:190, image:"https://images.unsplash.com/photo-1587589976084-a9e7f9e18ef3?w=400&q=80", rating:4.6, reviews:289, stock:180, unit:"150g", badge:"Protein",  description:"Crispy roasted chickpeas in smoked paprika seasoning." },
  { id:54, name:"Granola Bars (5pk)",    brand:"OatsNGold",    category:"snacks", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&q=80", rating:4.7, reviews:412, stock:130, unit:"5×45g", badge:null,       description:"Oat, honey, almond and berry granola bars for sustained energy." },
  { id:55, name:"Kettle Chips - Sea Salt", brand:"CrunchLab",  category:"snacks", price:129, oldPrice:160, image:"https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80", rating:4.6, reviews:356, stock:200, unit:"150g", badge:null,       description:"Thick-cut kettle chips with pure sea salt. Satisfying crunch." },
  { id:56, name:"Cashew Clusters",       brand:"NutNest",      category:"snacks", price:349, oldPrice:430, image:"https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80", rating:4.8, reviews:289, stock:90,  unit:"200g", badge:"Premium",  description:"Honey-roasted cashew clusters with a touch of sea salt." },

  // ── PANTRY ───────────────────────────────────────────────────
  { id:57, name:"Extra Virgin Olive Oil", brand:"OliveEstate", category:"pantry", price:599, oldPrice:750, image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80", rating:4.9, reviews:512, stock:80,  unit:"500ml", badge:"Cold-Pressed", description:"Single-origin EVOO cold-pressed within hours of harvest." },
  { id:58, name:"Himalayan Pink Salt",    brand:"SaltRock",     category:"pantry", price:149, oldPrice:190, image:"https://images.unsplash.com/photo-1553787434-dd9eb4ea4d0e?w=400&q=80", rating:4.7, reviews:378, stock:200, unit:"500g", badge:null,       description:"Pure Himalayan pink salt with 84 trace minerals." },
  { id:59, name:"Raw Honey",            brand:"BeeCraft",     category:"pantry", price:499, oldPrice:620, image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80", rating:4.9, reviews:623, stock:100, unit:"500g", badge:"Raw",      description:"Unprocessed raw honey direct from the hive. Full of enzymes." },
  { id:60, name:"Basmati Rice Premium",  brand:"RiceField",    category:"pantry", price:299, oldPrice:380, image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", rating:4.8, reviews:489, stock:150, unit:"1 kg", badge:"Aged",     description:"2-year aged extra-long grain Basmati with natural aroma." },
  { id:61, name:"Tahini",               brand:"SeedPaste",    category:"pantry", price:399, oldPrice:490, image:"https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&q=80", rating:4.7, reviews:234, stock:90,  unit:"300g", badge:null,       description:"Smooth sesame tahini — perfect for hummus and dressings." },
  { id:62, name:"Apple Cider Vinegar",   brand:"BrewCraft",    category:"pantry", price:299, oldPrice:370, image:"https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=400&q=80", rating:4.8, reviews:389, stock:120, unit:"500ml", badge:"Raw",      description:"Raw, unfiltered ACV with the 'mother'. Tangy and beneficial." },
  { id:63, name:"Coconut Oil - Virgin",  brand:"TropicBliss",  category:"pantry", price:449, oldPrice:560, image:"https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&q=80", rating:4.8, reviews:412, stock:100, unit:"500ml", badge:"Organic", description:"Cold-pressed virgin coconut oil with rich tropical flavour." },
  { id:64, name:"Soy Sauce - Premium",   brand:"UmamiLab",     category:"pantry", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", rating:4.7, reviews:267, stock:140, unit:"200ml", badge:null,       description:"Naturally brewed premium soy sauce aged for 18 months." },
  { id:65, name:"Oat Flour",            brand:"WheatWorks",   category:"pantry", price:179, oldPrice:220, image:"https://images.unsplash.com/photo-1567599872555-1b9e8e3f0f3a?w=400&q=80", rating:4.6, reviews:189, stock:160, unit:"500g", badge:"Gluten-Friendly", description:"Stone-ground oat flour for healthier bakes." },
  { id:66, name:"Quinoa - White",       brand:"GrainCraft",   category:"pantry", price:349, oldPrice:430, image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80", rating:4.8, reviews:312, stock:110, unit:"500g", badge:"Superfood", description:"Fluffy white quinoa — complete protein and gluten-free." },

  // ── MEAT & SEAFOOD ───────────────────────────────────────────
  { id:67, name:"Chicken Breast Fillets",brand:"FarmGrown",   category:"meat", price:349, oldPrice:430, image:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80", rating:4.7, reviews:523, stock:100, unit:"500g", badge:"Antibiotic-Free", description:"Boneless, skinless chicken breast from free-range birds." },
  { id:68, name:"Salmon Fillet",         brand:"OceanPrime",  category:"meat", price:699, oldPrice:870, image:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80", rating:4.9, reviews:678, stock:60,  unit:"300g", badge:"Wild-Caught", description:"Fresh Atlantic salmon fillet — rich in omega-3 fatty acids." },
  { id:69, name:"Grass-Fed Ground Beef", brand:"RanchForce",  category:"meat", price:499, oldPrice:620, image:"https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&q=80", rating:4.8, reviews:389, stock:80,  unit:"500g", badge:"Grass-Fed",  description:"100% grass-fed lean ground beef. No hormones or antibiotics." },
  { id:70, name:"Tiger Prawns",          brand:"OceanPrime",  category:"meat", price:599, oldPrice:750, image:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&q=80", rating:4.8, reviews:445, stock:70,  unit:"500g", badge:"Fresh",      description:"Jumbo tiger prawns — fresh, cleaned and deveined." },
  { id:71, name:"Lamb Chops",           brand:"HighlandFarm", category:"meat", price:799, oldPrice:990, image:"https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=400&q=80", rating:4.7, reviews:234, stock:50,  unit:"400g", badge:"Premium",    description:"Tender, marbled lamb chops with delicate herb flavour." },
  { id:72, name:"Tuna Steak",           brand:"OceanPrime",  category:"meat", price:549, oldPrice:680, image:"https://images.unsplash.com/photo-1607893378714-007fd47c8719?w=400&q=80", rating:4.8, reviews:312, stock:60,  unit:"250g", badge:"Wild-Caught", description:"Yellowfin tuna steak — sear it rare for the perfect meal." },

  // ── FROZEN ───────────────────────────────────────────────────
  { id:73, name:"Acai Berry Smoothie Pack", brand:"BreezeFresh", category:"frozen", price:449, oldPrice:560, image:"https://images.unsplash.com/photo-1525385444278-b7968e515e7a?w=400&q=80", rating:4.8, reviews:389, stock:100, unit:"4 sachets", badge:"Superfood", description:"Frozen Brazilian açaí packets — just blend for a perfect bowl." },
  { id:74, name:"Edamame (Frozen)",      brand:"GreenPod",     category:"frozen", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1551450038-3ad8a4a39584?w=400&q=80", rating:4.7, reviews:289, stock:150, unit:"400g", badge:"Plant Protein", description:"Steam-cooked whole edamame pods — a nutritious snack." },
  { id:75, name:"Frozen Mixed Berries",  brand:"BreezeFresh",  category:"frozen", price:299, oldPrice:370, image:"https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80", rating:4.8, reviews:445, stock:120, unit:"500g", badge:null,       description:"Strawberries, blueberries, raspberries and blackberries." },
  { id:76, name:"Cauliflower Rice",      brand:"GreenPod",     category:"frozen", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400&q=80", rating:4.6, reviews:223, stock:130, unit:"400g", badge:"Low Carb",  description:"Ready-to-cook riced cauliflower. Steam in the bag." },
  { id:77, name:"Artisan Pizza Base",    brand:"ItaliaDelite", category:"frozen", price:299, oldPrice:370, image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80", rating:4.7, reviews:312, stock:80,  unit:"2 pcs", badge:null,       description:"Thin and crispy wood-fired style pizza bases." },
  { id:78, name:"Falafel (Pre-made)",    brand:"MidEastBites", category:"frozen", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1530469525856-cf37954301f7?w=400&q=80", rating:4.7, reviews:267, stock:90,  unit:"12 pcs", badge:"Vegan",    description:"Authentic chickpea falafel balls. Air-fry in minutes." },

  // ── HEALTH & WELLNESS ─────────────────────────────────────────
  { id:79, name:"Whey Protein - Vanilla", brand:"PeakPower",   category:"health", price:1499, oldPrice:1800, image:"https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80", rating:4.8, reviews:623, stock:80,  unit:"1 kg", badge:"25g Protein", description:"Premium whey isolate with 25g protein per serving. Smooth vanilla." },
  { id:80, name:"Vitamin D3 Drops",      brand:"VitaShield",   category:"health", price:799, oldPrice:990, image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80", rating:4.8, reviews:445, stock:100, unit:"30ml",  badge:"Immunity",  description:"High-potency Vitamin D3 drops for bone health and immunity." },
  { id:81, name:"Chia Seeds - Organic",  brand:"SeedPaste",    category:"health", price:299, oldPrice:380, image:"https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=400&q=80", rating:4.7, reviews:389, stock:150, unit:"300g", badge:"Omega-3",  description:"Organic chia seeds — rich in omega-3, fibre and calcium." },
  { id:82, name:"Turmeric Latte Mix",    brand:"ZenLeaf",      category:"health", price:399, oldPrice:490, image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80", rating:4.8, reviews:312, stock:90,  unit:"200g", badge:"Anti-Inflammatory", description:"Golden milk turmeric latte with black pepper and ginger." },
  { id:83, name:"Spirulina Powder",      brand:"AlgaLife",     category:"health", price:599, oldPrice:750, image:"https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=400&q=80", rating:4.7, reviews:234, stock:80,  unit:"200g", badge:"Superfood", description:"100% pure organic spirulina powder — nature's superfood." },
  { id:84, name:"Collagen Peptides",     brand:"VitaShield",   category:"health", price:1299, oldPrice:1599, image:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80", rating:4.7, reviews:289, stock:70,  unit:"300g", badge:"Beauty",   description:"Marine collagen peptides for skin, hair and joints." },

  // ── PERSONAL CARE ─────────────────────────────────────────────
  { id:85, name:"Bamboo Toothbrush (4pk)",brand:"EcoSmile",   category:"personal", price:299, oldPrice:380, image:"https://images.unsplash.com/photo-1564519111216-4b6e93c58f48?w=400&q=80", rating:4.8, reviews:534, stock:200, unit:"4 pcs", badge:"Eco",      description:"Sustainable bamboo toothbrushes with charcoal-infused bristles." },
  { id:86, name:"Natural Deodorant",      brand:"PureSkin",    category:"personal", price:399, oldPrice:490, image:"https://images.unsplash.com/photo-1567721913486-6585f069b3b3?w=400&q=80", rating:4.6, reviews:289, stock:120, unit:"75g",  badge:"Aluminium-Free", description:"Natural deodorant with coconut oil and baking soda. 48hr protection." },
  { id:87, name:"Vitamin C Face Serum",   brand:"GlowLab",     category:"personal", price:899, oldPrice:1100, image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80", rating:4.8, reviews:612, stock:90,  unit:"30ml", badge:"Brightening", description:"20% Vitamin C serum with hyaluronic acid. Visibly brighter skin." },
  { id:88, name:"Argan Oil Shampoo",      brand:"HairElixir",  category:"personal", price:549, oldPrice:680, image:"https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=400&q=80", rating:4.7, reviews:445, stock:100, unit:"300ml", badge:null,      description:"Nourishing argan oil shampoo for silky, frizz-free hair." },
  { id:89, name:"Neem Face Wash",         brand:"PureSkin",    category:"personal", price:299, oldPrice:370, image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80", rating:4.7, reviews:378, stock:130, unit:"150ml", badge:"Ayurvedic", description:"Antibacterial neem face wash for clear, healthy skin." },

  // ── HOUSEHOLD ─────────────────────────────────────────────────
  { id:90, name:"Dish Soap - Citrus",     brand:"CleanCo",     category:"household", price:199, oldPrice:250, image:"https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80", rating:4.7, reviews:389, stock:200, unit:"500ml", badge:null,       description:"Powerful citrus dish soap that cuts through grease. Biodegradable." },
  { id:91, name:"Laundry Pods (30ct)",    brand:"FreshWash",   category:"household", price:699, oldPrice:870, image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", rating:4.8, reviews:534, stock:100, unit:"30 pods", badge:"Concentrated", description:"3-in-1 laundry pods — wash, soften and fight stains in one." },
  { id:92, name:"Multi-Surface Spray",    brand:"CleanCo",     category:"household", price:249, oldPrice:310, image:"https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80", rating:4.6, reviews:267, stock:150, unit:"750ml", badge:"Plant-Based", description:"Plant-based all-purpose spray cleaner. Safe for food surfaces." },
  { id:93, name:"Beeswax Food Wraps (3pk)",brand:"EcoWrap",   category:"household", price:599, oldPrice:750, image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80", rating:4.8, reviews:412, stock:80,  unit:"3 wraps", badge:"Plastic-Free", description:"Reusable beeswax food wraps — a sustainable cling film alternative." },
];

// ── Category Metadata ─────────────────────────────────────────
const CATEGORIES = [
  { key:"all",        label:"All Products",    icon:"🛒", count: PRODUCTS.length },
  { key:"vegetables", label:"Vegetables",      icon:"🥬", count: PRODUCTS.filter(p=>p.category==="vegetables").length },
  { key:"fruits",     label:"Fruits",          icon:"🍎", count: PRODUCTS.filter(p=>p.category==="fruits").length },
  { key:"dairy",      label:"Dairy & Eggs",    icon:"🥛", count: PRODUCTS.filter(p=>p.category==="dairy").length },
  { key:"bakery",     label:"Bakery",          icon:"🍞", count: PRODUCTS.filter(p=>p.category==="bakery").length },
  { key:"beverages",  label:"Beverages",       icon:"☕", count: PRODUCTS.filter(p=>p.category==="beverages").length },
  { key:"snacks",     label:"Snacks",          icon:"🍿", count: PRODUCTS.filter(p=>p.category==="snacks").length },
  { key:"pantry",     label:"Pantry",          icon:"🫙", count: PRODUCTS.filter(p=>p.category==="pantry").length },
  { key:"meat",       label:"Meat & Seafood",  icon:"🐟", count: PRODUCTS.filter(p=>p.category==="meat").length },
  { key:"frozen",     label:"Frozen",          icon:"🧊", count: PRODUCTS.filter(p=>p.category==="frozen").length },
  { key:"health",     label:"Health",          icon:"💊", count: PRODUCTS.filter(p=>p.category==="health").length },
  { key:"personal",   label:"Personal Care",   icon:"🧴", count: PRODUCTS.filter(p=>p.category==="personal").length },
  { key:"household",  label:"Household",       icon:"🧹", count: PRODUCTS.filter(p=>p.category==="household").length },
];

// ── Cart Helpers ──────────────────────────────────────────────
function getCart()        { try { return JSON.parse(localStorage.getItem("gb_cart")) || []; } catch { return []; } }
function saveCart(cart)   { localStorage.setItem("gb_cart", JSON.stringify(cart)); }
function getCartTotal()   { return getCart().reduce((s,i) => s + i.price * i.qty, 0); }
function getCartCount()   { return getCart().reduce((s,i) => s + i.qty, 0); }

function addToCart(productId, qty = 1) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty = Math.min(existing.qty + qty, p.stock); }
  else { cart.push({ id:p.id, name:p.name, brand:p.brand, price:p.price, image:p.image, unit:p.unit, qty }); }
  saveCart(cart);
  updateCartBadge();
  showToast(`🛒 "${p.name}" added to cart!`);
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
  updateCartBadge();
}

function updateCartQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(productId);
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

// ── Wishlist Helpers ──────────────────────────────────────────
function getWishlist()      { try { return JSON.parse(localStorage.getItem("gb_wish")) || []; } catch { return []; } }
function toggleWishlist(id) {
  const w = getWishlist();
  const idx = w.indexOf(id);
  if (idx >= 0) w.splice(idx,1); else w.push(id);
  localStorage.setItem("gb_wish", JSON.stringify(w));
  return idx < 0; // true = added
}

// ── Auth Helpers ──────────────────────────────────────────────
function getUser()    { try { return JSON.parse(localStorage.getItem("gb_user")); } catch { return null; } }
function isLoggedIn() { return !!getUser(); }

// ── Toast Notification ────────────────────────────────────────
function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  toast.className = `gb-toast gb-toast--${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 400); }, 3000);
}

// ── Star Rating HTML ──────────────────────────────────────────
function starHTML(rating) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) s += '<i class="fas fa-star text-amber-400"></i>';
    else if (rating >= i - 0.5) s += '<i class="fas fa-star-half-alt text-amber-400"></i>';
    else s += '<i class="far fa-star text-gray-300"></i>';
  }
  return s;
}

// ── Discount % ────────────────────────────────────────────────
function discPct(p) { return p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0; }

// ── Search ───────────────────────────────────────────────────
function searchProducts(q, cat = "all", sort = "popular", minP = 0, maxP = 2000) {
  let list = PRODUCTS.filter(p => {
    const matchCat  = cat === "all" || p.category === cat;
    const matchQ    = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    const matchPrice = p.price >= minP && p.price <= maxP;
    return matchCat && matchQ && matchPrice;
  });
  if (sort === "price-asc")  list.sort((a,b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
  if (sort === "rating")     list.sort((a,b) => b.rating - a.rating);
  if (sort === "discount")   list.sort((a,b) => discPct(b) - discPct(a));
  if (sort === "popular")    list.sort((a,b) => b.reviews - a.reviews);
  if (sort === "newest")     list.sort((a,b) => b.id - a.id);
  return list;
}

// ── Format currency ───────────────────────────────────────────
function fmt(n) { return "₹" + n.toLocaleString("en-IN"); }

// Init badge on load
document.addEventListener("DOMContentLoaded", updateCartBadge);
