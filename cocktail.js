JS:
// Defining our menu items
const menuItems = [
    { id: 1, name: 'Mojito', price: 10 },
    { id: 2, name: 'Cosmopolitan', price: 12 },
    { id: 3, name: 'Old Fashioned', price: 15 },
    { id: 4, name: 'Margarita', price: 11 },
    { id: 5, name: 'Pina Colada', price: 13 }
];

// Function to add a menu item to the cart
function addToCart(itemId) {
    const cartItem = menuItems.find(item => item.id === itemId);
    cart.push(cartItem);
    renderCart();
}

let cart = [];

// Function to render the menu items dynamically
function renderMenu() {
    const menuElement = document.getElementById('menu');
    menuItems.forEach(item => {
        const itemElement = document.createElement('button');
        itemElement.classList.add('list-group-item', 'list-group-item-action', 'menu-item');
        itemElement.textContent = `${item.name} - $${item.price}`;
        itemElement.onclick = () => addToCart(item.id);
        menuElement.appendChild(itemElement);
    });
}

// Function to render the cart and calculate the total
function renderCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartElement.innerHTML = ''; // Clear the cart for re-render
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('list-group-item');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartElement.appendChild(itemElement);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2); // Update the total price
}
// document.querySelector('.btn-success').addEventListener('click', function () {
//     if (window.PaymentRequest) {
//         // Payment Request supported
//         const supportedPaymentMethods = [{
//             supportedMethods: ['basic-card'],
//             data: {
//                 supportedNetworks: ['visa', 'mastercard', 'amex', 'discover']
//             }
//         }];

//         const paymentDetails = {
//             total: {
//                 label: 'Total',
//                 amount: {
//                     currency: 'USD',
//                     value: '10.00'
//                 }
//             }
//             // Additional details like shipping options, etc. can be added here
//         };

//         const options = {
//             requestShipping: true, // Set to true if you need shipping address
//             requestPayerEmail: true // Set to true if you need payer's email
//         };

//         const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

//         paymentRequest.show()
//             .then(function (paymentResponse) {
//                 // Handle payment success
//                 // You may want to send the paymentResponse to your server for processing
//                 console.log(paymentResponse);
//             })
//             .catch(function (error) {
//                 // Handle payment failure
//                 console.error(error);
//             });
//     } else {
//         // Fallback to traditional checkout
//         // Redirect the user to a checkout page
//         window.location.href = '/checkout.html';
//     }
// });
// Initializing the app
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});
