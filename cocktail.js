JS:
// Defining our menu items
console.log(`heyy`)
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = 0;
    }

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        if (this.count > 0) {
            this.count--;
        }
    }

    resetCount() {
        this.count = 0;
    }
}
 old_fashioned = new MenuItem(1, 'Old Fashioned', 15);
 cosmopolitan = new MenuItem(2, 'Cosmopolitan', 12);
 mojito = new MenuItem(3, 'Mojito', 10);
 margarita = new MenuItem(4, 'Margarita', 11);
 pina_colado = new MenuItem(5, 'Pina Colada', 13);

// Function to add a menu item to the cart
function addToCart(itemId) {
    const cartItem = menuItems.find(item => item.id === itemId);
    cart.push(cartItem);
    renderCart();
}
let totalPrice=0;
let cart = [];

//Function to show the total
function final(){
    alert(`
    ${old_fashioned.name} : ${old_fashioned.count}
    ${cosmopolitan.name} : ${cosmopolitan.count}
    ${mojito.name} : ${mojito.count}
    ${margarita.name} : ${margarita.count}
    ${pina_colado.name} : ${pina_colado.count}
    THE TOTAL PRICE TO BE PAID IS ${totalPrice}`)}
// Function to render the menu items dynamically
function renderMenu() {
    const menuElement = document.getElementById('menu');
    // menuItems.forEach(item => {
    //     const itemElement = document.createElement('button');
    //     itemElement.classList.add('list-group-item', 'list-group-item-action', 'menu-item');
    //     itemElement.textContent = `${item.name} - $${item.price}`;
    //     itemElement.onclick = () => addToCart(item.id);
    //     menuElement.appendChild(itemElement);
    // });
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
