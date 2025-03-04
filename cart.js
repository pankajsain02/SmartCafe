let lastUpdated = new Date().toISOString(); // Initialize last update timestamp
const POLLING_INTERVAL = 5000; // Poll every 5 seconds
let orderStatusInterval;

document.addEventListener('DOMContentLoaded', () => {
    loadCartItems(); // Load cart items from localStorage
    pollOrderUpdates(); // Start polling for order updates

    const placeOrderButton = document.getElementById('place-order-button');
    const infoDrawer = document.getElementById('info-drawer');
    const submitInfoButton = document.getElementById('submit-info');
    const cancelInfoButton = document.getElementById('cancel-info');

    // Show the drawer when "Place Order" is clicked
    placeOrderButton.addEventListener('click', () => {
        if (Object.keys(JSON.parse(localStorage.getItem('cart')) || {}).length === 0) {
            alert('Your cart is empty!');
            return;
        }
        infoDrawer.classList.add('visible');
        infoDrawer.classList.remove('hidden');
    });

    // Handle form submission
    submitInfoButton.addEventListener('click', async () => {
        const customerName = document.getElementById('customer-name').value.trim();
        const mobile = document.getElementById('mobile').value.trim();

        if (!customerName || !mobile) {
            alert('Please fill in your name and mobile number!');
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert('Mobile number must be a valid 10-digit number!');
            return;
        }

        // Proceed to place the order
        await placeOrder(customerName, mobile);
        infoDrawer.classList.add('hidden');
        infoDrawer.classList.remove('visible');
    });

    // Hide the drawer when "Cancel" is clicked
    cancelInfoButton.addEventListener('click', () => {
        infoDrawer.classList.add('hidden');
        infoDrawer.classList.remove('visible');
    });
});

// Place order and send to backend
async function placeOrder(customerName, mobile) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const orderDetails = {
        items: cart,
        totalPrice: document.getElementById('total-price').textContent.replace('₹', ''),
        customerName,
        mobile,
    };

    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails),
        });

        if (response.ok) {
            const order = await response.json();
            alert(`Order placed successfully! Order ID: ${order.id}`);
            localStorage.removeItem('cart'); // Clear cart after placing order
            loadCartItems();
            startOrderTracking(order.id); // Start tracking the order
        } else {
            alert('Failed to place order.');
        }
    } catch (error) {
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again.');
    }
}

// Start tracking the order
function startOrderTracking(orderId) {
    orderStatusInterval = setInterval(() => checkOrderStatus(orderId), POLLING_INTERVAL);
}

// Check order status
async function checkOrderStatus(orderId) {
    try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`);
        if (response.ok) {
            const order = await response.json();
            handleOrderStatus(order);
        } else {
            console.error('Error fetching order status:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching order status:', error);
    }
}

// Handle order status updates
function handleOrderStatus(order) {
    const { id, status } = order;
    if (status === 'Accepted') {
        showMessage(`Order #${id} is accepted! Your order is being prepared. Please wait.`);
        clearInterval(orderStatusInterval); // Stop polling
    } else if (status === 'Declined') {
        showMessage(`Order #${id} is declined. Sorry, we are unable to process your order.`);
        clearInterval(orderStatusInterval); // Stop polling
    }
}

// Poll for order updates
function pollOrderUpdates() {
    setInterval(async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/orders/updates?lastUpdated=${lastUpdated}`);
            if (response.ok) {
                const updates = await response.json();
                updates.forEach(handleOrderUpdate); // Handle each updated order
                if (updates.length > 0) {
                    lastUpdated = new Date().toISOString(); // Update the timestamp
                }
            } else {
                console.error('Error fetching updates:', response.statusText);
            }
        } catch (error) {
            console.error('Error polling updates:', error);
        }
    }, POLLING_INTERVAL);
}

// Handle order updates dynamically
function handleOrderUpdate(order) {
    const { id, status } = order;

    if (status === 'Accepted') {
        showMessage(`Order #${id} is accepted! Your order is under preparation.`);
    } else if (status === 'Declined') {
        showMessage(`Order #${id} is declined. We apologize for the inconvenience.`);
    }
}

// Show dynamic message on the screen
function showMessage(message) {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
        messageContainer.innerHTML = `<p>${message}</p>`;
        messageContainer.style.display = 'block';

        // Hide the message after 5 seconds
        setTimeout(() => {
            messageContainer.style.display = 'none';
        }, 5000);
    }
}

// Load cart items from localStorage and render them
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    cartItemsContainer.innerHTML = ""; // Clear previous items in cart

    for (const [itemName, { price, quantity }] of Object.entries(cart)) {
        const itemTotal = price * quantity;
        totalPrice += itemTotal;

        const itemBanner = document.createElement("div");
        itemBanner.className = "cart-item-banner";
        itemBanner.innerHTML = `
            <div class="cart-item-info">
                <p>${itemName}</p>
                <p>Price: ₹${price}</p>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateCartQuantity('${itemName}', -1)">-</button>
                <span>${quantity}</span>
                <button onclick="updateCartQuantity('${itemName}', 1)">+</button>
            </div>
            <p class="item-total">Total: ₹${itemTotal}</p>
        `;
        cartItemsContainer.appendChild(itemBanner);
    }

    totalPriceElement.textContent = `₹${totalPrice}`;
}

// Update cart quantity
function updateCartQuantity(itemName, change) {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[itemName]) {
        cart[itemName].quantity += change;
        if (cart[itemName].quantity <= 0) {
            delete cart[itemName];
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart
    loadCartItems(); // Refresh cart items
}

// Toggle menu for mobile view
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
