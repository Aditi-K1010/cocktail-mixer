document.querySelector('.btn-success').addEventListener('click', () => {
    $('#paymentModal').modal('show');
});
const menuItems = [
    { id: 1, name: 'Mojito', price: 149 },
    { id: 2, name: 'Cosmopolitan', price: 129 },
    { id: 3, name: 'Old Fashioned', price: 139 },
    { id: 4, name: 'Margarita', price: 199 },
    { id: 5, name: 'Pina Colada', price: 69 },
    { id: 6, name: 'Beer with ice cube', price: 999 }
];


function addToCart(itemId) {
    const cartItem = menuItems.find(item => item.id === itemId);
    cart.push(cartItem);
    renderCart();
}

let cart = [];

function renderMenu() {
    const menuElement = document.getElementById('menu');
    menuItems.forEach(item => {
        const itemElement = document.createElement('button');
        itemElement.classList.add('list-group-item', 'list-group-item-action', 'menu-item');
        itemElement.textContent = `${item.name} - ₹${item.price}`;
        itemElement.onclick = () => addToCart(item.id);
        menuElement.appendChild(itemElement);
    });
}
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    cartElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('list-group-item');
        itemElement.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})" class="btn btn-danger btn-sm">Remove</button>`;
        cartElement.appendChild(itemElement);

        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});