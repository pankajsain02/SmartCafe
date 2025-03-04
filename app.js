const menuData = {
    Drinks: [
        { name: "Cold Coffee", price: 150, img: "Asset/cold coffee.jpg" },
        { name: "Mango Shake", price: 100, img: "Asset/mango s.jpg" },
        { name: "Oreo Shake", price: 120, img: "Asset/oreo s.jpg" },
        { name: "Chocolate Shake", price: 120, img: "Asset/chocolate s.jpg" },
        { name: "Mix Berry Shake", price: 150, img: "Asset/mix berry s.jpg" },
        { name: "Blueberry Shake", price: 150, img: "Asset/blueberry s.jpg" },
        { name: "Black Current Shake", price: 150, img: "Asset/black current shake.jpg" },
        { name: "Brownie Shake", price: 150, img: "Asset/brownie s.jpg" },
        { name: "Strawberry Shake", price: 120, img: "Asset/strawberry s.jpg" },
        { name: "Pineapple Shake", price: 100, img: "Asset/pineapple s.jpg" },
        { name: "Butterscotch Shake", price: 120, img: "Asset/butterscotch s.jpg" },
        { name: "Brownie Cold Coffee", price: 180, img: "Asset/brownie cold coffee.jpg" },
        { name: "Badam Shake", price: 120, img: "Asset/badam s.jpg" },
        { name: "Paan Shake", price: 120, img: "Asset/paan s.jpg" },
        { name: "Vanilla Shake", price: 100, img: "Asset/vanilla s.jpg" },
        { name: "Hot Coffee", price: 100, img: "Asset/hot coffee.jpg" },
        { name: "KitKat Shake", price: 120, img: "Asset/kitkat s.jpg" },
        { name: "Kesar Pista Shake", price: 150, img: "Asset/kesar pista s.jpg" }
    ],
    Icecream: [
        { name: "Vanilla", price: 30, img: "Asset/vanilla.jpg" },
        { name: "StrawBerry", price: 30, img: "Asset/strawberry.jpg" },
        { name: "Pineapple", price: 30, img: "Asset/pineapple.jpg" },
        { name: "Black Current", price: 50, img: "Asset/black current.jpg" },
        { name: "Paan", price: 50, img: "Asset/paan.jpg" },
        { name: "Mango", price: 30, img: "Asset/mango.jpg" },
        { name: "Kesar Pista", price: 50, img: "Asset/kesar pista.jpg" },
        { name: "Chocolate", price: 50, img: "Asset/chocolate.jpg" },
        { name: "Badam", price: 50, img: "Asset/badam.jpg" },
        { name: "Butterscotch", price: 50, img: "Asset/butterscotch.jpg" }
    ],
    Mocktails: [
        { name: "Peach", price: 120, img: "Asset/peach.jpg" },
        { name: "Blue Coracao", price: 150, img: "Asset/blue coracao.jpg" },
        { name: "Green Apple", price: 120, img: "Asset/green apple.jpg" },
        { name: "Watermelon", price: 120, img: "Asset/watermelon.jpg" },
        { name: "Bubblegum", price: 150, img: "Asset/bubblegum.jpg" },
        { name: "Blueberry", price: 120, img: "Asset/blueberry.jpg" },
        { name: "Lemon Ice Tea", price: 100, img: "Asset/lemon ice tea.jpg" },
        { name: "Virgin Mojito", price: 70, img: "Asset/virgin mojito.jpg" }
    ],
    Burger: [
        { name: "Peri Peri Burger", price: 100, img: "Asset/PeriPeriBG.jpg" },
        { name: "Veg Makhani", price: 120, img: "Asset/VegMakhaniBG.jpg" },
        { name: "Cheese Slice Burger", price: 150, img: "Asset/CheeseSliceBG.jpg" },
        { name: "Aloo Tikki Burger", price: 70, img: "Asset/AlooTikkiBG.jpg" },
        { name: "Veg Decker", price: 120, img: "Asset/VeggieDeckerBG.jpg" }
    ],
    Maggie: [
        { name: "Plain Maggie", price: 50, img: "Asset/PlainMaggi.jpg" },
        { name: "Peri Peri Maggie", price: 100, img: "Asset/PeriPeriMaggi.jpg" },
        { name: "Cheese Maggie", price: 150, img: "Asset/CheeseMaggi.jpg" },
        { name: "Schezwan Maggie", price: 150, img: "Asset/SchezwanMaggi.jpg" },
        { name: "Veg Fried Maggie", price: 100, img: "Asset/VegFriedMaggi.jpg" },
        { name: "Paneer Maggie", price: 150, img: "Asset/PaneerMaggi.jpg" }
        
    ],
    Sandwiches: [
        { name: "Sweet Corn Sandwich", price: 150, img: "Asset/SweetCornSW.jpg" },
        { name: "Paneer Tandoori Sandwich", price: 180, img: "Asset/PaneerTandooriSW.jpg" },
        { name: "Veg Grill Sandwich", price: 100, img: "Asset/VegGrillSW.jpg" },
        { name: "Paneer Tikka Sandwich", price: 180, img: "Asset/PaneerTikkaSw.jpg" },
        { name: "Makhani Sandwich", price: 180, img: "Asset/MakhaniSandwich.jpg" },
        { name: "Cheese Loaded Sandwich", price: 180, img: "Asset/CheeseLoadedSW.jpg" }
    ],
    Desserts: [
        { name: "Chocolate Pastry", price: 50, img: "Asset/chocolatePastry.jpg" },
        { name: "Vanilla Pastry", price: 50, img: "Asset/VanillaPastry.jpg" },
        { name: "KitKat Waffle", price: 150, img: "Asset/KitkatWaffle.jpg" },
        { name: "Oreo Waffle", price: 150, img: "Asset/OreoWaffle.jpg" },
        { name: "Hot Sizzling Brownie", price: 200, img: "Asset/HotSizzlingBrownie.jpg" }
    ],
    Pizza: [
        { name: "Farm Villa", price: 259, img: "Asset/farm villa.jpg" },
        { name: "Onion Pizza", price: 109, img: "Asset/onion.jpg" },
        { name: "Onion Paneer Pizza", price: 149, img: "Asset/onion paneer.jpg" },
        { name: "Makhani 2 Pyaza", price: 259, img: "Asset/makhana 2 pyaza.jpg" },
        { name: "Farm Fresh", price: 259, img: "Asset/farm fresh.jpg" },
        { name: "Margherita", price: 109, img: "Asset/margherita.jpg" },
        { name: "Garden Delight", price: 199, img: "Asset/garden delight.jpg" },
        { name: "Capsicum Pizza", price: 109, img: "Asset/capsicum.jpg" },
        { name: "Capsicum Paneer Pizza", price: 149, img: "Asset/capsicum paneer.jpg" },
        { name: "American Veg", price: 199, img: "Asset/american veg.jpg" },
        { name: "Cheese Lovers", price: 299, img: "Asset/cheese lovers.jpg" },
        { name: "Sweet Corn Pizza", price: 109, img: "Asset/sweet corn.jpg" },
        { name: "Tomato Pizza", price: 109, img: "Asset/tomato.jpg" }
    ],
    Momos: [
        { name: "Afghani Momo", price: 160, img: "Asset/afghani.jpg" },
        { name: "Veg Fried", price: 120, img: "Asset/veg fried.jpg" },
        { name: "Veg Steam", price: 100, img: "Asset/veg steam.jpg" },
        { name: "Tandoori Momo", price: 180, img: "Asset/tandoori.jpg" }
    ],
    Fries: [
        { name: "Peri Peri Cheesy Fries", price: 120, img: "Asset/peri peri cheesy.jpg" },
        { name: "Salted Fries", price: 60, img: "Asset/salted.jpg" },
        { name: "Honey Chilli Potato", price: 150, img: "Asset/honey chilli potato.jpg" },
        { name: "Cheesy Fries", price: 100, img: "Asset/cheesy.jpg" },
        { name: "Chilli Potato", price: 120, img: "Asset/chilli potato.jpg" },
        { name: "Peri Peri Fries", price: 80, img: "Asset/peri per.jpg" }
    ],
    Breads: [
        { name: "Paneer Tikka Garlic Bread", price: 159, img: "Asset/paneer tikka.jpg" },
        { name: "Cheesy Garlic Bread", price: 99, img: "Asset/cheesy garlic.jpg" },
        { name: "Supreem Garlic Bread", price: 109, img: "Asset/supreme.jpg" }
    ],
    Manchurian: [
        { name: "Gravy Manchurian", price: 170, img: "Asset/gravy.jpg" },
        { name: "Dry Manchurian", price: 150, img: "Asset/dry.jpg" }
    ],
    Pasta: [
        { name: "White Sauce Pasta", price: 200, img: "Asset/white.jpg" },
        { name: "Red Sauce Pasta", price: 200, img: "Asset/red.jpg" },
        { name: "Veg Pasta", price: 150, img: "Asset/veg.jpg" },
        { name: "Makhani Sauce Pasta", price: 220, img: "Asset/makhanipasta.jpg" },
        { name: "Pink Sauce Pasta", price: 220, img: "Asset/pink.jpg" }
    ]
    
};




// Initialize the app and load categories on page load
document.addEventListener("DOMContentLoaded", () => {
    showCategories();
    // updateViewCartButton();
});

// Display categories with round images
function showCategories() {
    const categoriesContainer = document.getElementById("categories-container");
    const itemsContainer = document.getElementById("items-container");
    categoriesContainer.style.display = "grid";
    itemsContainer.style.display = "none";

    categoriesContainer.innerHTML = '';
    Object.keys(menuData).forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "category-item";
        categoryDiv.innerHTML = `
            <img src="${menuData[category][0].img}" alt="${category}">
            <p>${category}</p>
        `;
        categoryDiv.onclick = () => showCategoryItems(category);
        categoriesContainer.appendChild(categoryDiv);
    });
}

// Display items of a selected category
function showCategoryItems(category) {
    const categoriesContainer = document.getElementById("categories-container");
    const itemsContainer = document.getElementById("items-container");
    const categoryTitle = document.getElementById("category-title");
    const menuContainer = document.getElementById("menu-container");

    categoriesContainer.style.display = "none";
    itemsContainer.style.display = "block";

    categoryTitle.textContent = category;
    menuContainer.innerHTML = '';

    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    menuData[category].forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";
        const itemKey = item.name.replace(/\s+/g, '');

        // Check if item is in cart and set the initial button state
        if (cart[itemKey]) {
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
                <p>Price: ₹${item.price}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity('${itemKey}', -1, this, ${item.price})" class="quantity-btn">-</button>
                    <span id="quantity-${itemKey}">${cart[itemKey].quantity}</span>
                    <button onclick="updateQuantity('${itemKey}', 1, this, ${item.price})" class="quantity-btn">+</button>
                </div>
            `;
        } else {
            itemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
                <p>Price: ₹${item.price}</p>
                <button onclick="addToCart('${item.name}', ${item.price}, this)">Add to Cart</button>
            `;
        }

        menuContainer.appendChild(itemDiv);
    });
}



// Add item to cart and manage quantity controls
function addToCart(itemName, price, button) {
    const itemKey = itemName.replace(/\s+/g, '');
    let quantity = 1;

    // Replace "Add to Cart" button with quantity controls
    button.outerHTML = `
        <div class="quantity-controls">
            <button onclick="updateQuantity('${itemKey}', -1, this, ${price})" class="quantity-btn">-</button>
            <span id="quantity-${itemKey}">${quantity}</span>
            <button onclick="updateQuantity('${itemKey}', 1, this, ${price})" class="quantity-btn">+</button>
        </div>
    `;

    // Update cart in localStorage
    updateCart(itemKey, price, quantity);
    showViewCartButton();
}

// Update quantity or remove item from cart
function updateQuantity(itemKey, change, button, price) {
    const quantityElement = document.getElementById(`quantity-${itemKey}`);
    let quantity = parseInt(quantityElement.textContent) + change;

    if (quantity <= 0) {
        // If quantity is zero, remove item from cart and show "Add to Cart" button
        button.parentNode.outerHTML = `<button onclick="addToCart('${itemKey.replace(/([A-Z])/g, ' $1').trim()}', ${price}, this)">Add to Cart</button>`;
        removeFromCart(itemKey);
    } else {
        // Update displayed quantity and cart in localStorage
        quantityElement.textContent = quantity;
        updateCart(itemKey, price, quantity);
    }
}

// Update cart in localStorage
function updateCart(itemKey, price, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    cart[itemKey] = { price, quantity };
    localStorage.setItem("cart", JSON.stringify(cart));
    showViewCartButton();
}

// Remove item from cart in localStorage
function removeFromCart(itemKey) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    delete cart[itemKey];
    localStorage.setItem("cart", JSON.stringify(cart));

    // Hide "View Cart" button if the cart is empty
    if (Object.keys(cart).length === 0) {
        document.getElementById("view-cart-button").style.display = "none";
    }
}

// Show the "View Cart" button if items are in the cart
function showViewCartButton() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    document.getElementById("view-cart-button").style.display = Object.keys(cart).length > 0 ? "block" : "none";
}



// Initialize the cart state on page load
document.addEventListener("DOMContentLoaded", () => {
    showCategories();
    showViewCartButton();
});

// Toggle navbar for mobile view
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

