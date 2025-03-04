// Admin credentials (for demonstration purposes)
const ADMIN_ID = 'SmartAdmin02';
const ADMIN_PASSWORD = 'Smart@02';

// Track already announced order IDs
const announcedOrders = new Set();

// Check session storage for login status on page load
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
        showAdminDashboard();
    } else {
        showLoginInterface();
    }

    const resetOrdersButton = document.getElementById('reset-orders-button');
    if (resetOrdersButton) {
        resetOrdersButton.addEventListener('click', resetOrders);
    }

    const logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
        logoutButton.addEventListener("click", adminLogout);
    }

    setupSocketListeners(); // Set up real-time listeners for new orders
});

// Show the admin dashboard after login
function showAdminDashboard() {
    document.getElementById("welcomeSection").classList.add("hidden");
    document.getElementById("loginDrawer").classList.add("hidden");
    document.getElementById("adminDashboard").classList.remove("hidden");
    document.getElementById("logoutBtn").classList.add("show"); // Show the logout button
    loadPendingOrders(); // Load orders on dashboard
}

// Show the login interface if not logged in
function showLoginInterface() {
    document.getElementById("welcomeSection").classList.remove("hidden");
    document.getElementById("loginDrawer").classList.remove("hidden");
    document.getElementById("adminDashboard").classList.add("hidden");
    document.getElementById("logoutBtn").classList.remove("show"); // Hide the logout button
}

// Handle Admin Login
function adminLogin(event) {
    event.preventDefault();
    const adminId = document.getElementById("admin-id").value;
    const adminPassword = document.getElementById("admin-password").value;

    if (adminId === ADMIN_ID && adminPassword === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        alert("Login successful");
        showAdminDashboard();
    } else {
        alert("Invalid credentials");
    }
}

// Logout function
function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    alert("You have logged out");
    showLoginInterface(); // Go back to the login interface
}

// Load orders from the backend
async function loadPendingOrders() {
    try {
        const response = await fetch('http://localhost:3000/api/orders');
        if (!response.ok) throw new Error('Failed to fetch orders');
        const orders = await response.json();
        renderOrders(orders);
        announceNewOrders(orders); // Handle voice announcements for new orders
    } catch (error) {
        console.error('Error loading orders:', error);
    }
}

// Render orders dynamically
function renderOrders(orders) {
    const orderSection = document.getElementById('order-section');
    orderSection.innerHTML = ''; // Clear existing orders

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerHTML = `
            <h4>Order #${order.id}</h4>
            <p>Customer: ${order.customerName}</p>
            <p>Items: ${Object.entries(order.items)
                .map(([name, { quantity }]) => `${name} (x${quantity})`)
                .join(', ')}</p>
            <p>Total Price: ₹${order.totalPrice}</p>
            <p>Status: <span id="status-${order.id}">${order.status}</span></p>
            ${order.status === 'Pending' ? `
                <button onclick="updateOrderStatus(${order.id}, 'Accepted')">Accept</button>
                <button onclick="updateOrderStatus(${order.id}, 'Declined')">Decline</button>
            ` : `
                <button disabled>Already ${order.status}</button>
            `}
        `;
        orderSection.appendChild(orderDiv);
    });
}

// Update order status
async function updateOrderStatus(orderId, status) {
    try {
        const response = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status }),
        });

        if (response.ok) {
            alert(`Order #${orderId} has been ${status.toLowerCase()}.`);
            loadPendingOrders(); // Refresh orders
        } else {
            alert('Failed to update order status.');
        }
    } catch (error) {
        console.error('Error updating order status:', error);
    }
}

// Reset all orders
async function resetOrders() {
    const confirmReset = confirm('Are you sure you want to reset all orders? This action cannot be undone.');
    if (confirmReset) {
        try {
            const response = await fetch('http://localhost:3000/api/orders/reset', { method: 'DELETE' });
            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                loadPendingOrders(); // Reload orders
            } else {
                alert('Failed to reset orders.');
            }
        } catch (error) {
            console.error('Error resetting orders:', error);
            alert('Failed to reset orders.');
        }
    }
}

// Real-time notifications using Socket.IO
function setupSocketListeners() {
    const socket = io('http://localhost:3000');

    socket.on('new-order', (order) => {
        if (!announcedOrders.has(order.id)) {
            alert(`New order received from ${order.customerName}`);
            textToSpeech(`New order from ${order.customerName}`);
            announcedOrders.add(order.id); // Mark order as announced
            loadPendingOrders(); // Reload orders to reflect the new order
        }
    });
}

// Voice announcements for new orders
function announceNewOrders(orders) {
    const newOrders = orders.filter(order => order.status === 'Pending' && !announcedOrders.has(order.id));
    newOrders.forEach(order => {
        textToSpeech(`New order from ${order.customerName}`);
        announcedOrders.add(order.id); // Mark order as announced
    });
}

// Convert text to speech for voice announcements
function textToSpeech(message) {
    if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "en-US";
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
    } else {
        console.error("Text-to-speech is not supported in this browser.");
    }
}

// Initial call to load orders
loadPendingOrders();
