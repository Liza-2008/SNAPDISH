// JavaScript for your Recipe Finder application

// Define arrays for recipes
const adventurousRecipes = [
    {
        name: "Eggplant Parmesan",
        ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/healthy_baked_eggplant_parmesan.jpg",
        description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
    },
     {
        name: "Bruschetta",
        ingredients: ["baguette", "tomatoes", "garlic", "basil", "olive oil", "salt"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/bruschetta-recipe-1.jpg",
        description: "Grilled bread rubbed with garlic and topped with fresh chopped tomatoes and basil."
      },
      {
        name: "Caprese Salad",
        ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/Caprese-Salad-7b.jpg",
        description: "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
      },
      {
        "name": "Chicken Piccata",
        "ingredients": ["chicken breasts", "lemon", "capers", "butter", "white wine", "flour"],
        "cuisine": "Italian",
        "type": "Non-Vegetarian",
        "image": "https://images.themodernproper.com/production/posts/2019/Chicken-Picatta-8.jpg?w=800&q=82&auto=format&fit=crop&dm=1689343305&s=51c93f70d2c9eb342fe7862c7b752d08",
        "description": "Chicken Piccata is a classic Italian-American dish featuring tender chicken breasts lightly dredged in flour and pan-fried, then simmered in a tangy lemon-butter sauce with capers and white wine. It's bright, savory, and perfect with pasta or vegetables."
      },
      {
        name: "Pesto Pasta",
        ingredients: ["pasta", "basil pesto", "parmesan", "pine nuts", "olive oil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/Basil-Pesto-Thumbnail-500x500.jpg",
        description: "A simple, aromatic pasta dish tossed in fresh basil pesto and topped with parmesan and pine nuts."
      },
       {
        name: "Vegetable Lasagna",
        ingredients: ["lasagna noodles", "zucchini", "spinach", "ricotta", "tomato sauce", "mozzarella", "parmesan"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/Easy-Vegetable-Lasagna-Recipe-1200.jpg",
        description: "Layered pasta with vegetables, creamy ricotta, tomato sauce, and melted cheese, baked to perfection."
      },
      {
        name: "Masala Dosa",
        ingredients: ["dosa batter", "potatoes", "onion", "mustard seeds", "curry leaves"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/masala-dosa-recipe.jpg",
        description: "Crispy fermented rice crepe filled with spicy mashed potatoes, served with chutney and sambar."
      },
      {
        name: "Vegetable Biryani",
        ingredients: ["basmati rice", "mixed vegetables", "spices", "yogurt", "saffron"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg",
        description: "A fragrant rice dish layered with spiced vegetables and cooked with saffron and herbs."
      },
      {
        name : "Aloo Paratha",
        ingredients: ["whole wheat flour", "potatoes", "spices", "ghee", "coriander"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Aloo-Paratha-4.jpg",
        description: "Stuffed flatbread with spiced mashed potatoes, traditionally served with curd or pickle."
      },
      {
        name: "Eggplant Parmesan",
        ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image:"images/healthy_baked_eggplant_parmesan-1.jpg",
        description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
      },
      {
        name: "Palak Paneer",
        ingredients: ["spinach", "paneer", "onion", "garlic", "ginger", "tomato", "green chili", "spices", "cream"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Palak Paneer.jpg",
        description: "A creamy spinach-based curry cooked with soft paneer cubes and aromatic spices, served hot with naan or rice."
      },
      {
        name: "Chicken Korma",
        ingredients: ["chicken", "yogurt", "onion", "garlic", "ginger", "spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "images/Eitan-Bernath-Chicken-Korma--819x1024.jpg",
        description: "A rich and flavorful chicken curry cooked in a creamy yogurt-based sauce with aromatic spices."
      },
      {
        name: "Chicken Katsu Curry",
        ingredients: ["chicken breast", "flour", "egg", "breadcrumbs (panko)", "oil for frying", "Japanese curry roux", "onion", "carrot", "potato", "rice"],
        cuisine: "Japanese",
        type: "Non-Vegetarian",
        image: "images/Chicken Katsu Curry.jpg",
        description: "Crispy fried chicken cutlet served with a rich, savory Japanese curry sauce over rice."
      },
      {
        name: "Spicy Peanut Noodles",
        ingredients: ["noodles", "peanut butter", "soy sauce", "rice vinegar", "sesame oil", "garlic", "ginger", "chili flakes", "vegetables (e.g., bell peppers, carrots)", "optional: chicken or tofu"],
        cuisine: "Asian-inspired",
        type: "Vegetarian", // Assuming Vegetarian if no meat/tofu specified
        image: "images/spicy-peanut-noodles.jpg", // Placeholder image path (update with actual URL if hosted)
        description: "Quick and flavorful noodles with a creamy and spicy peanut sauce."
      },
    {
        name: "Shakshuka",
        ingredients: ["eggs", "canned diced tomatoes", "onion", "bell pepper", "garlic", "cumin", "paprika", "chili powder", "olive oil", "salt", "pepper", "optional: feta cheese, cilantro"],
        cuisine: "Middle Eastern / North African",
        type: "Vegetarian",
        image: "images/shakshuka.jpg", // Placeholder image path (update with actual URL if hosted)
        description: "Eggs poached in a simmering, spiced tomato and pepper sauce."
    },
    {
        name: "Lentil Soup with Sausage",
        ingredients: ["lentils", "sausage (chorizo or Italian)", "onion", "carrots", "celery", "garlic", "canned diced tomatoes", "chicken or vegetable broth", "herbs (thyme, bay leaf)"],
        cuisine: "European / Mediterranean",
        type: "Non-Vegetarian", // Assuming Non-Vegetarian due to sausage
        image: "images/lentil-soup-sausage.jpg", // Placeholder image path (update with actual URL if hosted)
        description: "Hearty and comforting lentil soup with flavorful sausage."
    },
      {
        name: "Korean Bibimbap (Simplified)",
        ingredients: ["cooked rice", "beef or tofu", "spinach", "carrots", "zucchini", "mushrooms", "egg", "gochujang (Korean chili paste)", "sesame oil", "soy sauce", "garlic"],
        cuisine: "Korean",
        type: "Non-Vegetarian", // Assuming Non-Vegetarian if beef is listed, adjust if tofu is primary
        image: "images/bibimbap.jpg", // Placeholder image path (update with actual URL if hosted)
        description: "A colorful and customizable mixed rice bowl with various toppings and spicy sauce."
      },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "butter"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/buttermilk-pancakes.jpg",
        description: "Fluffy pancakes served with syrup and butter."
    }
    // Add more adventurous recipes here following the same format
];


const recipes = [
    {
        name: "Grilled Cheese Sandwich",
        ingredients: ["bread", "cheese", "butter"],
        cuisine: "American",
        type: "Vegetarian",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg", // Replace with actual image URL
        description: "A classic grilled cheese sandwich made with toasted bread and melted cheese."
    },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "butter"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/buttermilk-pancakes.jpg", // Replace with actual image URL
        description: "Fluffy pancakes served with syrup and butter."
    },
    {
        name: "Chicken Curry",
        ingredients: ["chicken", "onion", "garlic", "tomato", "spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2.jpg", // Replace with actual image URL
        description: "A spicy and flavorful chicken curry made with a blend of Indian spices."
    },
    {
        name: "Paneer Tikka",
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg", // Replace with actual image URL
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney."
    },
    {
        name: "Margarita Pizza",
        ingredients: ["pizza dough", "tomato sauce", "mozzarella", "basil"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg", // Replace with actual image URL
        description: "Classic pizza topped with fresh tomato sauce, mozzarella, and basil."
    },
    {
        name: "Chole Bhature",
        ingredients: ["chickpeas", "flour", "spices", "onion"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://i.ytimg.com/vi/csfIOfMnRGg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6GPMx72TdT-BQh86wkTA3VKBRpQ", // Replace with actual image URL
        description: "Spicy chickpeas served with deep-fried bread, a North Indian favorite."
    },
    {
        name: "Pasta Alfredo",
        ingredients: ["pasta", "cream", "parmesan cheese", "butter"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit|format,webp/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg", // Replace with actual image URL
        description: "Creamy fettuccine pasta tossed with rich Alfredo sauce."
    },
    {
        name: "Samosa",
        ingredients: ["potato", "peas", "spices", "flour"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg", // Replace with actual image URL
        description: "Crispy pastry filled with spiced potatoes and peas, deep-fried until golden."
    },
    {
        name: "Fish Tacos",
        ingredients: ["fish", "taco shells", "cabbage", "salsa"],
        cuisine: "Mexican",
        type: "Non-Vegetarian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2msBUJqS1l6g2eyPM6MTzvffLe4vf4Lttw&s", // Replace with actual image URL
        description: "Crispy fish fillets served in soft taco shells with fresh toppings."
    },
    {
        name: "Vegetable Stir-Fry",
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic"],
        cuisine: "Chinese",
        type: "Vegetarian",
        image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg", // Replace with actual image URL
        description: "Quick and colorful stir-fried vegetables tossed in soy sauce."
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["paneer", "butter", "cream", "tomato", "spices"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg", // Replace with actual image URL
        description: "Rich and creamy paneer butter masala served with naan or rice."
    },
    {
        name: "Tandoori Chicken",
        ingredients: ["chicken", "yogurt", "tandoori spices"],
        cuisine: "Indian",
        type: "Non-Vegetarian",
        image: "https://static01.nyt.com/images/2024/05/16/multimedia/fs-tandoori-chicken-hmjq/fs-tandoori-chicken-hmjq-videoSmall.jpg", // Replace with actual image URL
        description: "Chicken marinated in yogurt and spices, grilled to perfection."
    },
    {
        name: "Falafel",
        ingredients: ["chickpeas", "herbs", "spices", "pita bread"],
        cuisine: "Middle Eastern",
        type: "Vegetarian",
        image: "https://static01.nyt.com/images/2024/01/10/multimedia/10Felafel-wqbp/10Felafel-wqbp-superJumbo.jpg", // Replace with actual image URL
        description: "Crispy chickpea balls served in pita with tahini sauce."
    },
    {
        name: "Pav Bhaji",
        ingredients: ["vegetables", "pav bread", "spices", "butter"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg", // Replace with actual image URL
        description: "A spicy vegetable mash served with buttered bread rolls."
    },
    {
        name: "Sushi",
        ingredients: ["rice", "seaweed", "fish", "vegetables"],
        cuisine: "Japanese",
        type: "Non-Vegetarian",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIObgM84rxP_9ETuDP0e2dgcPxOSsLT8sEeg&s", // Replace with actual image URL
        description: "Delicious sushi rolls made with rice and fresh ingredients."
    },
    {
        name: "Paneer do pyaza",
        ingredients: ["paneer", "yogurt", "spices", "bell pepper", "onion" , "capsicum" , "coriender"], // Note: 'coriander' spelling
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/DKT-SPL-INDIAN-GRAVY-Paneer-Do-Pyaza.jpg", // Replace with actual image URL
        description: "Marinated paneer cubes grilled with vegetables, served with mint chutney." // Description seems similar to Paneer Tikka? Maybe update.
    },
    {
        name: "Veggie Burger",
        ingredients: ["burger buns", "veggie patty", "lettuce", "tomato", "onion", "ketchup"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg",
        description: "A healthy and hearty burger with a plant-based patty and fresh vegetables."
    },
    {
        name: "Mushroom Risotto",
        ingredients: ["arborio rice", "mushrooms", "vegetable broth", "onion", "parmesan", "garlic"],
        cuisine: "Italian",
        type: "Vegetarian",
        image: "images/TMD-Mushroom-Risotto-WEB-19.jpg",
        description: "Creamy risotto cooked slowly with earthy mushrooms and a touch of parmesan."
    },
    {
        name: "Aloo Gobi",
        ingredients: ["potatoes", "cauliflower", "tomatoes", "onion", "spices", "cilantro"],
        cuisine: "Indian",
        type: "Vegetarian",
        image: "images/Aloo-Gobi-Piping-Pot-Curry.jpg",
        description: "A spiced Indian dish made with potatoes and cauliflower, often served with roti or rice."
    },
    {
        name: "Avocado Toast",
        ingredients: ["bread", "avocado", "lemon juice", "salt", "pepper", "chili flakes"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/EatingWell-April-Avocado-Toast-Directions-04-5b5b86524a3d4b35ac4c57863f6095dc.jpg",
        description: "Toasted bread topped with mashed avocado, seasoning, and optional toppings like chili flakes or seeds."
    },
    {
        name: "Tomato Basil Soup",
        ingredients: ["tomatoes", "onion", "garlic", "vegetable broth", "basil", "cream"],
        cuisine: "American",
        type: "Vegetarian",
        image: "images/tomato-basil-soup.jpg",
        description: "A creamy, comforting soup made with ripe tomatoes and fresh basil, perfect with grilled cheese."
    },
    {
       name: "Mac and Cheese",
       ingredients: ["macaroni", "cheddar cheese", "milk", "butter", "flour", "salt"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/mac-and-cheese-skillet-trivet.jpg",
       description: "A rich and creamy baked macaroni and cheese, a classic American comfort food."
    },
    {
       name: "Stuffed Bell Peppers",
       ingredients: ["bell peppers", "rice", "black beans", "corn", "cheddar cheese", "onion", "tomato"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/southwestern-style-stuffed- bell peppers-1-12.jpg", // Space in filename might cause issues
       description: "Colorful bell peppers stuffed with a flavorful mix of rice, beans, and cheese, then baked to perfection."
     },
     {
       name: "Cornbread",
       ingredients: ["cornmeal", "flour", "baking powder", "milk", "egg", "butter", "sugar"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/Simply-Recipes-Hot-Honey-Cornbread-LEAD-3-5035aac231b6444c96bb31dadbebf511.jpg",
       description: "A slightly sweet, moist cornbread often served with chili or barbecue dishes."
     },
     {
       name: "Mashed Potatoes",
       ingredients: ["potatoes", "butter", "milk", "salt", "pepper"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/18290-garlic-mashed-potatoes-ddmfs-beauty2-4x3-0327-2-47384a10cded40ae90e574bc7fdb9433.jpg",
       description: "Creamy and smooth mashed potatoes, a staple side dish in American meals."
     },
     {
       name: "Coleslaw",
       ingredients: ["cabbage", "carrots", "mayonnaise", "vinegar", "sugar", "salt", "pepper"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/ALR-222218-nanas-southern-coleslaw-VAT-4x3-d44d1396eb3e47e5b5a9db5a33213c92.jpg",
       description: "A crunchy, creamy salad made with shredded cabbage and carrots, perfect for picnics or BBQs."
     },
     {
       name: "Baked Sweet Potato Fries",
       ingredients: ["sweet potatoes", "olive oil", "salt", "pepper", "paprika"],
       cuisine: "American",
       type: "Vegetarian",
       image: "images/Sweet-Potato-Wedges-17.jpg",
       description: "Crispy and slightly sweet baked fries that are a healthier twist on a classic side."
     },
     {
       name: "Bruschetta",
       ingredients: ["baguette", "tomatoes", "garlic", "basil", "olive oil", "salt"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/bruschetta-recipe-1.jpg",
       description: "Grilled bread rubbed with garlic and topped with fresh chopped tomatoes and basil."
     },
     {
       name: "Caprese Salad",
       ingredients: ["tomatoes", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt", "pepper"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/Caprese-Salad-7b.jpg",
       description: "A simple and fresh Italian salad made with ripe tomatoes, mozzarella, and basil."
     },
     {
       name: "Pesto Pasta",
       ingredients: ["pasta", "basil pesto", "parmesan", "pine nuts", "olive oil"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/Basil-Pesto-Thumbnail-500x500.jpg",
       description: "A simple, aromatic pasta dish tossed in fresh basil pesto and topped with parmesan and pine nuts."
     },
     {
       name: "Masala Dosa",
       ingredients: ["dosa batter", "potatoes", "onion", "mustard seeds", "curry leaves"],
       cuisine: "Indian",
       type: "Vegetarian",
       image: "images/masala-dosa-recipe.jpg",
       description: "Crispy fermented rice crepe filled with spicy mashed potatoes, served with chutney and sambar."
     },
     {
       name: "Vegetable Biryani",
       ingredients: ["basmati rice", "mixed vegetables", "spices", "yogurt", "saffron"],
       cuisine: "Indian",
       type: "Vegetarian",
       image: "images/Vegetable-Biryani-Instant-Pot-Piping-Pot-Curry-4.jpg",
       description: "A fragrant rice dish layered with spiced vegetables and cooked with saffron and herbs."
     },
     {
       name: "Aloo Paratha",
       ingredients: ["whole wheat flour", "potatoes", "spices", "ghee", "coriander"],
       cuisine: "Indian",
       type: "Vegetarian",
       image: "images/Aloo-Paratha-4.jpg",
       description: "Stuffed flatbread with spiced mashed potatoes, traditionally served with curd or pickle."
     },
     {
       name: "Eggplant Parmesan",
       ingredients: ["eggplant", "tomato sauce", "mozzarella cheese", "parmesan cheese", "breadcrumbs", "olive oil", "basil"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/healthy_baked_eggplant_parmesan-1.jpg",
       description: "Baked layers of breaded eggplant, tomato sauce, and melted cheese — a comforting Italian classic."
     },
     {
       name: "Vegetable Lasagna",
       ingredients: ["lasagna noodles", "zucchini", "spinach", "ricotta", "tomato sauce", "mozzarella", "parmesan"],
       cuisine: "Italian",
       type: "Vegetarian",
       image: "images/Easy-Vegetable-Lasagna-Recipe-1200.jpg",
       description: "Layered pasta with vegetables, creamy ricotta, tomato sauce, and melted cheese, baked to perfection."
     },
    {
      name: "Palak Paneer",
      ingredients: ["spinach", "paneer", "onion", "garlic", "ginger", "tomato", "green chili", "spices", "cream"],
      cuisine: "Indian",
      type: "Vegetarian",
      image: "images/Palak Paneer.jpg",
      description: "A creamy spinach-based curry cooked with soft paneer cubes and aromatic spices, served hot with naan or rice."
    },
    {
      name: "Panzanella",
      ingredients: ["stale bread", "cherry tomatoes", "cucumber", "red onion", "basil", "olive oil", "red wine vinegar", "salt", "pepper"],
      cuisine: "Italian",
      type: "Vegetarian",
      image: "images/Panzanella.jpg",
      description: "A refreshing Tuscan bread salad made with chunks of day-old bread, juicy tomatoes, crisp cucumbers, and basil, tossed in a zesty vinaigrette."
    },
    {
      name: "Sweet Potato Black Bean Burger",
      ingredients: ["sweet potatoes", "black beans", "onion", "garlic", "breadcrumbs", "cumin", "paprika", "olive oil", "salt", "pepper"],
      cuisine: "American",
      type: "Vegetarian",
      image: "images/Sweet Potato Black Bean Burger.jpg",
      description: "A hearty homemade veggie burger made with mashed sweet potatoes and black beans, seasoned with warm spices and pan-seared for a crispy finish."
    },
    {
      name: "Besan Chilla",
      ingredients: ["besan (gram flour)", "onion", "tomato", "green chili", "coriander", "spices", "water", "oil"],
      cuisine: "Indian",
      type: "Vegetarian",
      image: "images/Besan Chilla (1).jpg",
      description: "A savory Indian pancake made from spiced gram flour batter mixed with chopped vegetables, pan-cooked until golden and crispy — perfect for breakfast or a quick snack."
    },
    {
      name: "Chicken Chettinad",
      ingredients: ["chicken", "onion", "tomato", "garlic", "ginger", "coconut", "black pepper", "fennel seeds", "curry leaves", "spices"],
      cuisine: "Indian",
      type: "Non-Vegetarian",
      image: "images/Chicken Chettinad.jpg",
      description: "A fiery and aromatic South Indian chicken curry made with freshly ground spices and roasted coconut, known for its bold flavor and rich texture."
    },
    {
      name: "Egg Curry",
      ingredients: ["boiled eggs", "onion", "tomato", "ginger", "garlic", "spices", "coriander", "oil"],
      cuisine: "Indian",
      type: "Non-Vegetarian",
      image: "images/Egg Curry.jpg",
      description: "A flavorful curry made with hard-boiled eggs simmered in a rich, spiced onion-tomato gravy — perfect with rice or chapati."
    },
    {
      name: "Chicken Piccata",
      ingredients: ["chicken breasts", "lemon juice", "capers", "garlic", "butter", "white wine", "flour", "parsley"],
      cuisine: "Italian",
      type: "Non-Vegetarian",
      image: "images/Chicken Piccata.jpg",
      description: "Tender chicken breasts lightly floured and sautéed in a tangy lemon-butter sauce with capers — a quick and elegant Italian dish."
    },
    {
      name: "Mutton Keema Pav",
      ingredients: ["minced mutton", "onion", "tomato", "ginger", "garlic", "green peas", "spices", "butter", "pav buns"],
      cuisine: "Indian",
      type: "Non-Vegetarian",
      image: "images/Mutton Keema Pav.jpg",
      description: "A spicy minced mutton curry cooked with peas and aromatic spices, served hot with butter-toasted pav — a Mumbai street-food favorite."
    },
    {
      name: "BBQ Chicken Drumsticks",
      ingredients: ["chicken drumsticks", "BBQ sauce", "paprika", "garlic powder", "brown sugar", "salt", "pepper"],
      cuisine: "American",
      type: "Non-Vegetarian",
      image: "images/BBQ Chicken Drumsticks.jpg",
      description: "Juicy chicken drumsticks coated in a smoky BBQ marinade and baked or grilled until perfectly caramelized and flavorful."
    },
    {
      name: "Gulab Jamun",
      ingredients: ["milk powder", "flour", "baking soda", "milk", "ghee", "sugar", "water", "cardamom", "rose water"],
      cuisine: "Indian",
      type: "Dessert",
      image: "images/gulab jamun.jpg",
      description: "Soft, round dumplings made from milk solids, deep-fried and soaked in a sweet rose-flavored syrup."
    },
    {
      name: "Tiramisu",
      ingredients: ["ladyfingers", "mascarpone cheese", "coffee", "cocoa powder", "sugar", "eggs", "heavy cream", "vanilla extract"],
      cuisine: "Italian",
      type: "Dessert",
      image: "images/Tiramisu.jpg",
      description: "A rich, creamy dessert made with layers of coffee-soaked ladyfingers, mascarpone cream, and dusted with cocoa powder."
    }
];


// Function definitions

// Function to display welcome message
function displayWelcomeMessage() {
    const recipeGrid = document.getElementById("recipe-grid");
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const surpriseMessage = document.getElementById('surprise-message');
    const adventurousButton = document.getElementById('adventurous-button');
    const resultsCountElement = document.getElementById('results-count');
    const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');

    if (recipeGrid) {
        recipeGrid.classList.remove('hidden');
        recipeGrid.innerHTML = `
            <div class="welcome-message">
                <i class="fas fa-utensils"></i>
                <p>Start by entering ingredients or selecting a cuisine</p>
            </div>
        `;
    }
    if(randomRecipesDisplay) {
       randomRecipesDisplay.classList.add('hidden');
       const recipeDetailsContainer = document.getElementById('recipe-details');
       if (recipeDetailsContainer) recipeDetailsContainer.innerHTML = '';
    }
    if(surpriseMessage) {
       surpriseMessage.classList.add('hidden');
    }
    if(adventurousButton) {
        adventurousButton.style.display = 'inline-block';
     }
     if(resultsCountElement) {
         resultsCountElement.textContent = '';
     }
     // Reset toggle to 'All' for welcome state
     const toggleButtons = document.querySelectorAll('.veg-nonveg-toggle .toggle-btn');
     if (toggleButtons.length > 0) {
         toggleButtons.forEach(btn => btn.classList.remove('active'));
         const allButton = document.querySelector('.veg-nonveg-toggle .toggle-btn[data-filter-type="all"]');
         if (allButton) allButton.classList.add('active');
     }
     if (vegNonVegToggle) {
         vegNonVegToggle.classList.remove('hidden');
     }
}

// Function to manage UI states
function updateUIState(state) {
    const recipeGrid = document.getElementById("recipe-grid");
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const surpriseMessage = document.getElementById('surprise-message');
    const adventurousButton = document.getElementById('adventurous-button');
    const loader = document.getElementById("loader");
    const resultsCountElement = document.getElementById('results-count');
    const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');

    if (recipeGrid) recipeGrid.classList.add('hidden');
    if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
    if (surpriseMessage) surpriseMessage.classList.add('hidden');
    if (adventurousButton) adventurousButton.style.display = 'none';
    if (loader) loader.style.display = 'none';
    if (resultsCountElement) resultsCountElement.textContent = '';

    switch (state) {
        case 'welcome':
            if (recipeGrid) {
                recipeGrid.classList.remove('hidden');
            }
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            if (vegNonVegToggle) vegNonVegToggle.classList.remove('hidden');
            break;
        case 'loading':
             if (recipeGrid) {
                 recipeGrid.classList.remove('hidden');
                 recipeGrid.innerHTML = '';
              }
            if (loader) loader.style.display = 'block';
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            if (vegNonVegToggle) vegNonVegToggle.classList.remove('hidden');
            break;
        case 'results':
            if (recipeGrid) recipeGrid.classList.remove('hidden');
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            if (vegNonVegToggle) vegNonVegToggle.classList.remove('hidden');
            break;
        case 'adventurous_surprise':
            if (surpriseMessage) surpriseMessage.classList.remove('hidden');
            break;
           case 'adventurous_result':
             if (randomRecipesDisplay) randomRecipesDisplay.classList.remove('hidden');
             break;
        case 'no_results':
             if (recipeGrid) {
                 recipeGrid.classList.remove('hidden');
                 recipeGrid.innerHTML = '<p class="no-results">No recipes found. Please try different ingredients or filters.</p>';
              }
            if (adventurousButton) adventurousButton.style.display = 'inline-block';
            if (resultsCountElement) resultsCountElement.textContent = '(0 results)';
            if (vegNonVegToggle) vegNonVegToggle.classList.remove('hidden');
            break;
           case 'saved_recipes':
             if (recipeGrid) recipeGrid.classList.add('hidden');
             if (adventurousButton) adventurousButton.style.display = 'inline-block';
             if (resultsCountElement) resultsCountElement.textContent = '';
             if (vegNonVegToggle) vegNonVegToggle.classList.add('hidden'); // Hide toggle for saved
             break;
    }
}

// Function to find recipes based on ingredients (Used by search bar)
function findRecipes(query) {
    const recipeGrid = document.getElementById("recipe-grid");
    updateUIState('loading');

    const activeCuisineButton = document.querySelector('.cuisine-button.active');
    const currentCuisineFilter = activeCuisineButton ? activeCuisineButton.getAttribute('data-cuisine') : 'all';

    const activeToggleBtn = document.querySelector('.veg-nonveg-toggle .toggle-btn.active');
    const currentDietaryFilter = activeToggleBtn ? activeToggleBtn.getAttribute('data-filter-type') : 'all';

    setTimeout(() => {
        let filteredRecipes = recipes;

        if (query && query.trim() !== '') {
            const searchIngredients = query.toLowerCase().split(',').map(ingredient => ingredient.trim());
            filteredRecipes = filteredRecipes.filter(recipe =>
                searchIngredients.every(ingredient =>
                    ingredient && recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
                )
            );
        }

        if (currentCuisineFilter !== 'all' && currentCuisineFilter !== 'veg' && currentCuisineFilter !== 'non-veg') {
             filteredRecipes = filteredRecipes.filter(recipe =>
                 recipe.cuisine && recipe.cuisine.toLowerCase() === currentCuisineFilter
             );
         }

         if (currentDietaryFilter !== 'all') {
             filteredRecipes = filteredRecipes.filter(recipe => {
                 const recipeType = recipe.type ? recipe.type.toLowerCase() : '';
                 if (currentDietaryFilter === 'vegetarian') {
                      return recipeType === 'vegetarian';
                 } else if (currentDietaryFilter === 'non-vegetarian') {
                      return recipeType === 'non-vegetarian';
                 }
                 return true;
             });
          }

        if (filteredRecipes.length > 0) {
            displayRecipes(filteredRecipes, recipeGrid);
            updateUIState('results');
        } else {
            updateUIState('no_results');
        }
    }, 500);
}

// Function to filter recipes by cuisine and dietary type (Used by cuisine buttons and toggle buttons)
function filterRecipesByCuisineAndDiet(cuisineFilter, dietaryFilter) {
    const recipeGrid = document.getElementById("recipe-grid");
    updateUIState('loading');

    const currentSearchQuery = document.getElementById("search-bar").value;

    setTimeout(() => {
        let filteredRecipes = recipes;

        if (currentSearchQuery && currentSearchQuery.trim() !== '') {
            const searchIngredients = currentSearchQuery.toLowerCase().split(',').map(ingredient => ingredient.trim());
            filteredRecipes = filteredRecipes.filter(recipe =>
                searchIngredients.every(ingredient =>
                     ingredient && recipe.ingredients.some(recIng => recIng.toLowerCase().includes(ingredient))
                )
            );
        }

        if (cuisineFilter !== 'all' && cuisineFilter !== 'veg' && cuisineFilter !== 'non-veg') {
            filteredRecipes = filteredRecipes.filter(recipe =>
                recipe.cuisine && recipe.cuisine.toLowerCase() === cuisineFilter
            );
        }

         if (dietaryFilter !== 'all') {
             filteredRecipes = filteredRecipes.filter(recipe => {
                 const recipeType = recipe.type ? recipe.type.toLowerCase() : '';
                 if (dietaryFilter === 'vegetarian') {
                     return recipeType === 'vegetarian';
                 } else if (dietaryFilter === 'non-vegetarian') {
                     return recipeType === 'non-vegetarian';
                 }
                 return true;
             });
         }

        if (filteredRecipes.length > 0) {
            displayRecipes(filteredRecipes, recipeGrid);
            updateUIState('results');
        } else {
             updateUIState('no_results');
        }
    }, 500);
}

// Helper function to display recipes in the grid
function displayRecipes(recipesToDisplay, gridElement) {
    if (!gridElement) return;
    gridElement.innerHTML = '';

    recipesToDisplay.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        const imageUrl = recipe.image ? recipe.image : 'https://via.placeholder.com/250x200?text=Image+Not+Available';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${recipe.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200?text=Image+Error';">
            <h3>${recipe.name}</h3>
            <p>${recipe.description || 'No description available.'}</p>
            <p><strong>Cuisine:</strong> ${recipe.cuisine || 'N/A'} | <strong>Type:</strong> ${recipe.type || 'N/A'}</p> <button class="save-recipe" data-recipe-name="${recipe.name}">
                <i class="far fa-bookmark"></i> Save
            </button>
        `;

        card.addEventListener("click", function(e) {
            if (!e.target.closest('.save-recipe')) {
                 openRecipeModal(recipe);
            }
        });

        const saveBtn = card.querySelector('.save-recipe');
        if(saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const recipeNameToSave = this.getAttribute('data-recipe-name');
                const recipeToSave = recipes.find(r => r.name === recipeNameToSave) || adventurousRecipes.find(r => r.name === recipeNameToSave);
                if(recipeToSave) {
                     saveRecipe(recipeToSave);
                } else {
                     console.error("Could not find recipe object to save:", recipeNameToSave);
                     alert("Error: Could not save recipe.");
                }
            });
        }

        gridElement.appendChild(card);
    });

    const resultsCountElement = document.getElementById('results-count');
    if(resultsCountElement) {
        resultsCountElement.textContent = `(${recipesToDisplay.length} results)`;
    }
}

// Function to save a recipe
function saveRecipe(recipe) {
    let savedRecipes = [];
    try {
        savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    } catch (e) {
        console.error("Error reading saved recipes from localStorage:", e);
        alert("Could not access saved recipes. LocalStorage might be disabled or full.");
        return;
    }

    if (!savedRecipes.some(r => r.name === recipe.name)) {
        savedRecipes.push(recipe);
        try {
            localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
            alert(`${recipe.name} has been saved!`);
        } catch (e) {
             console.error("Error saving recipes to localStorage:", e);
             alert("Could not save recipe. LocalStorage might be disabled or full.");
        }
    } else {
         alert(`${recipe.name} is already saved!`);
    }
}

// Function to show saved recipes
function showSavedRecipes() {
    let savedRecipes = [];
      try {
         savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
      } catch (e) {
         console.error("Error reading saved recipes from localStorage:", e);
         alert("Could not access saved recipes. LocalStorage might be disabled or full.");
         return;
      }

    const savedModal = document.getElementById("saved-modal");
    const savedGrid = document.getElementById("saved-recipes-grid");
    const resultsCountElement = document.getElementById('results-count');

    if (!savedModal || !savedGrid) {
        console.error("Saved recipes modal or grid element not found.");
        return;
    }

    savedGrid.innerHTML = '';

    if (savedRecipes.length === 0) {
        savedGrid.innerHTML = '<p class="empty-message">You haven\'t saved any recipes yet.</p>';
         if (resultsCountElement) resultsCountElement.textContent = '';
    } else {
        savedRecipes.forEach(recipe => {
            const card = document.createElement("div");
            card.className = "recipe-card";
              const imageUrl = recipe.image ? recipe.image : 'https://via.placeholder.com/250x200?text=Image+Not+Available';
            card.innerHTML = `
                <img src="${imageUrl}" alt="${recipe.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/250x200?text=Image+Error';">
                <h3>${recipe.name}</h3>
                <p>${recipe.cuisine || 'N/A'} | ${recipe.type || 'N/A'}</p> `;

            card.addEventListener("click", function() {
                savedModal.style.display = "none";
                 openRecipeModal(recipe);
            });

            savedGrid.appendChild(card);
        });
         if (resultsCountElement) resultsCountElement.textContent = '';
    }

    savedModal.style.display = "block";
     updateUIState('saved_recipes');
}

// Function to open recipe modal
function openRecipeModal(recipe) {
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-modal-title");
    const modalImage = document.getElementById("recipe-modal-img");
    const modalDescription = document.getElementById("recipe-modal-description");
    const modalCuisine = document.getElementById("recipe-modal-cuisine");
    const modalType = document.getElementById("recipe-modal-type");
    const modalIngredients = document.getElementById("recipe-modal-ingredients");
    const saveBtn = document.getElementById("save-recipe");

    if (!modal || !modalTitle || !modalImage || !modalDescription || !modalCuisine || !modalType || !modalIngredients || !saveBtn) {
        console.error("One or more recipe modal elements not found!");
        return;
    }

    modalTitle.textContent = recipe.name || 'Recipe Details';
    modalImage.src = recipe.image ? recipe.image : 'https://via.placeholder.com/300x250?text=Image+Not+Available';
    modalImage.alt = recipe.name || 'Recipe image';
    modalImage.onerror = function() { this.onerror=null; this.src='https://via.placeholder.com/300x250?text=Image+Error'; };

    modalDescription.textContent = recipe.description || 'No description provided.';
    modalCuisine.textContent = recipe.cuisine || 'N/A';
    modalType.textContent = recipe.type || 'N/A';

    modalIngredients.innerHTML = '';
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
        });
    } else {
        modalIngredients.innerHTML = '<li>No ingredients listed.</li>';
    }

    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    newSaveBtn.addEventListener('click', function handler(e) {
        e.stopPropagation();
        saveRecipe(recipe);
    });

    modal.style.display = "block";
}

// Close modals
const closeModalBtn = document.getElementById("close-modal");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function() {
        const modal = document.getElementById("recipe-modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
}

const closeSavedModalBtn = document.getElementById("close-saved-modal");
if (closeSavedModalBtn) {
    closeSavedModalBtn.addEventListener("click", function() {
        const savedModal = document.getElementById("saved-modal");
        if (savedModal) {
            savedModal.style.display = "none";
            displayWelcomeMessage(); // Return to welcome after closing saved
        }
    });
}

// Close modal if clicking outside of it
window.addEventListener("click", function(event) {
    const recipeModal = document.getElementById("recipe-modal");
    const savedModal = document.getElementById("saved-modal");
    if (recipeModal && event.target == recipeModal) {
        recipeModal.style.display = "none";
    }
    if (savedModal && event.target == savedModal) {
        savedModal.style.display = "none";
        displayWelcomeMessage(); // Return to welcome after closing saved
    }
});

document.addEventListener("DOMContentLoaded", function() {
    console.log('finder.js loaded.');

    // Initialize with welcome message
    displayWelcomeMessage();

    // --- Get references for elements ---
    const adventurousButton = document.getElementById('adventurous-button');
    const surpriseMessage = document.getElementById('surprise-message');
    const randomRecipesDisplay = document.getElementById('random-recipes-display');
    const recipeDetailsContainer = document.getElementById('recipe-details');
    const recipeGrid = document.getElementById("recipe-grid");
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    const clearButton = document.getElementById("clear-button");
    const toggleButtons = document.querySelectorAll('.veg-nonveg-toggle .toggle-btn');
    const cuisineButtons = document.querySelectorAll('.cuisine-button');
    const viewSavedButton = document.getElementById("view-saved");
    // ------------------------------------

    // --- Adventurous Button functionality ---
    if (adventurousButton) {
        adventurousButton.addEventListener('click', function() {
            adventurousButton.style.display = 'none';
            if (recipeGrid) {
                recipeGrid.innerHTML = '';
                recipeGrid.classList.add('hidden');
            }
            const welcomeMessage = document.querySelector('.welcome-message');
            if(welcomeMessage) {
                 // If it's outside and needs hiding, add welcomeMessage.classList.add('hidden');
            }
            const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
            if (vegNonVegToggle) {
                vegNonVegToggle.classList.add('hidden');
            }
            if (surpriseMessage) surpriseMessage.classList.remove('hidden');
            setTimeout(() => {
                if (surpriseMessage) surpriseMessage.classList.add('hidden');
                const randomIndex = Math.floor(Math.random() * adventurousRecipes.length);
                const selectedRecipe = adventurousRecipes[randomIndex];
                if (recipeDetailsContainer) recipeDetailsContainer.innerHTML = '';
                if (recipeDetailsContainer) {
                    const recipeName = document.createElement('h3');
                    recipeName.textContent = selectedRecipe.name;
                    recipeDetailsContainer.appendChild(recipeName);
                    if (selectedRecipe.image) {
                        const recipeImage = document.createElement('img');
                        recipeImage.src = selectedRecipe.image;
                        recipeImage.alt = selectedRecipe.name;
                        recipeImage.style.maxWidth = '100%';
                        recipeImage.style.height = 'auto';
                        recipeImage.style.borderRadius = '8px';
                        recipeImage.style.marginBottom = '15px';
                        recipeDetailsContainer.appendChild(recipeImage);
                    }
                    const recipeDescription = document.createElement('p');
                    recipeDescription.textContent = selectedRecipe.description;
                    recipeDetailsContainer.appendChild(recipeDescription);
                    const ingredientsTitle = document.createElement('h4');
                     ingredientsTitle.textContent = "Ingredients:";
                     recipeDetailsContainer.appendChild(ingredientsTitle);
                    const ingredientsList = document.createElement('ul');
                    if (selectedRecipe.ingredients) {
                        selectedRecipe.ingredients.forEach(ingredient => {
                            const li = document.createElement('li');
                            li.textContent = ingredient;
                            ingredientsList.appendChild(li);
                        });
                    }
                    recipeDetailsContainer.appendChild(ingredientsList);
                    const cuisineType = document.createElement('p');
                    cuisineType.textContent = `Cuisine: ${selectedRecipe.cuisine || 'N/A'} | Type: ${selectedRecipe.type || 'N/A'}`;
                    cuisineType.style.fontSize = '0.9em';
                    cuisineType.style.fontStyle = 'italic';
                    recipeDetailsContainer.appendChild(cuisineType);
                    randomRecipesDisplay.classList.remove('hidden');
                }
            }, 1500);
        });
    } else {
        console.error("Button with ID 'adventurous-button' not found.");
    }
    // ----------------------------------------

    // Search button functionality
    if (searchButton && searchBar) {
        searchButton.addEventListener("click", function() {
             const searchQuery = searchBar.value;
             if (searchQuery.trim() === '') {
                 displayWelcomeMessage();
                 return;
             }
             findRecipes(searchQuery);
             if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
             if (surpriseMessage) surpriseMessage.classList.add('hidden');
             if (adventurousButton) adventurousButton.style.display = 'inline-block';
             if (recipeGrid) { recipeGrid.classList.remove('hidden'); }
              const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
              if (vegNonVegToggle) {
                  vegNonVegToggle.classList.remove('hidden');
              }
         });

         searchBar.addEventListener("keypress", function(e) {
             if (e.key === 'Enter') {
                 const searchQuery = searchBar.value;
                 if (searchQuery.trim() === '') {
                     displayWelcomeMessage();
                     return;
                 }
                 findRecipes(searchQuery);
                 if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
                 if (surpriseMessage) surpriseMessage.classList.add('hidden');
                 if (adventurousButton) adventurousButton.style.display = 'inline-block';
                 if (recipeGrid) { recipeGrid.classList.remove('hidden'); }
                  const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
                  if (vegNonVegToggle) {
                      vegNonVegToggle.classList.remove('hidden');
                  }
             }
         });
    } else {
        console.warn('Search elements not found on this page.');
    }

    // Clear button functionality
    if (clearButton && searchBar) {
        clearButton.addEventListener("click", function() {
             searchBar.value = '';
             displayWelcomeMessage();
             if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
             if (surpriseMessage) surpriseMessage.classList.add('hidden');
             if (adventurousButton) adventurousButton.style.display = 'inline-block';
             if (recipeGrid) { recipeGrid.classList.remove('hidden'); }
              const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
              if (vegNonVegToggle) {
                  vegNonVegToggle.classList.remove('hidden');
              }
         });
    } else {
        console.warn('Clear button or search bar not found.');
    }

    // Cuisine filter buttons
    cuisineButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all cuisine buttons
            cuisineButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked cuisine button
            this.classList.add('active');

            const cuisineFilterValue = this.getAttribute('data-cuisine');

            // --- MODIFIED LOGIC ---
            // This is the logic that remains, filtering by the selected cuisine
            // and the currently active dietary filter from the toggle.
            const activeToggleBtn = document.querySelector('.veg-nonveg-toggle .toggle-btn.active');
            const currentDietaryFilter = activeToggleBtn ? activeToggleBtn.getAttribute('data-filter-type') : 'all';

            // We still need the current search bar value for ingredient filtering
            const currentSearchQuery = document.getElementById("search-bar").value;

            // Call the main filter function with the selected filters and search query
            filterRecipesByCuisineAndDiet(cuisineFilterValue, currentDietaryFilter, currentSearchQuery);

            // --- END MODIFIED LOGIC ---


             // Hide adventurous content when filtering
             if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
             if (surpriseMessage) surpriseMessage.classList.add('hidden');
             if (adventurousButton) adventurousButton.style.display = 'inline-block';
             if (recipeGrid) { recipeGrid.classList.remove('hidden'); }

              // Show the Veg/Non-Veg toggle
              const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
              if (vegNonVegToggle) {
                  vegNonVegToggle.classList.remove('hidden');
              }
        });
    });

    // Popular tag buttons
    document.querySelectorAll('.tag-button').forEach(button => {
        button.addEventListener('click', function() {
             const ingredients = this.getAttribute('data-ingredients');
             searchBar.value = ingredients;
             const activeCuisineButton = document.querySelector('.cuisine-button.active');
             const currentCuisine = activeCuisineButton ? activeCuisineButton.getAttribute('data-cuisine') : 'all';
             const activeToggleBtn = document.querySelector('.veg-nonveg-toggle .toggle-btn.active');
             const currentDietaryFilter = activeToggleBtn ? activeToggleBtn.getAttribute('data-filter-type') : 'all';
             findRecipes(ingredients);
             if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
             if (surpriseMessage) surpriseMessage.classList.add('hidden');
             if (adventurousButton) adventurousButton.style.display = 'inline-block';
             if (recipeGrid) { recipeGrid.classList.remove('hidden'); }
              const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
              if (vegNonVegToggle) {
                  vegNonVegToggle.classList.remove('hidden');
              }
         });
    });

    // View saved recipes button
     if (viewSavedButton) {
        viewSavedButton.addEventListener('click', function() {
             showSavedRecipes();
            updateUIState('saved_recipes');
         });
     } else {
            console.warn('"View Saved" button not found.');
      }

    // --- NEW Veg/Non-Veg Toggle Functionality ---
    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                 const filterType = this.getAttribute('data-filter-type');
                 console.log('Toggle button clicked, filtering by:', filterType);

                 toggleButtons.forEach(btn => btn.classList.remove('active'));
                 this.classList.add('active');

                 const activeCuisineButton = document.querySelector('.cuisine-button.active:not([data-cuisine="Veg"]):not([data-cuisine="Non-Veg"])');
                 const currentCuisine = activeCuisineButton ? activeCuisineButton.getAttribute('data-cuisine') : 'all';

                 filterRecipesByCuisineAndDiet(currentCuisine, filterType);

                 if (!activeCuisineButton && document.querySelector('.cuisine-button[data-cuisine="all"]')) {
                       document.querySelectorAll('.cuisine-button.active[data-cuisine="Veg"], .cuisine-button.active[data-cuisine="Non-Veg"]').forEach(btn => btn.classList.remove('active'));
                       document.querySelector('.cuisine-button[data-cuisine="all"]').classList.add('active');
                   }

                 if (randomRecipesDisplay) randomRecipesDisplay.classList.add('hidden');
                 if (surpriseMessage) surpriseMessage.classList.add('hidden');
                 if (adventurousButton) adventurousButton.style.display = 'inline-block';
                 if (recipeGrid) { recipeGrid.classList.remove('hidden'); }
                  const vegNonVegToggle = document.querySelector('.veg-nonveg-toggle');
                  if (vegNonVegToggle) {
                      vegNonVegToggle.classList.remove('hidden');
                  }
              } // <-- Missing closing brace for the if (vegNonVegToggle) check
           ); // <-- Missing closing parenthesis and semicolon for the addEventListener
       }); // <-- Missing closing parenthesis and semicolon for the forEach loop
    } else {
        console.warn('Veg/Non-Veg Toggle buttons (.veg-nonveg-toggle .toggle-btn) not found. Veg/Non-Veg filtering disabled.');
    } // <-- Missing closing brace for the else block
    // --- END NEW Toggle Functionality ---


    // --- Add logic to hide adventurous content when other actions occur ---
    // (Integrated into relevant listeners above)


    // --- Add modal closing listeners ---
    // (Modified to return to welcome state after closing saved modal)

}); // This closes the DOMContentLoaded function block.

// Function definitions for:
// displayWelcomeMessage
// updateUIState
// findRecipes
// filterRecipesByCuisineAndDiet
// displayRecipes
// saveRecipe
// showSavedRecipes
// openRecipeModal

// ... rest of the function definitions should be here ...