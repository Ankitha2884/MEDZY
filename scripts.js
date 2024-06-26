// Add item to cart function
function addToCart(itemName, price) {
    let cartItem = {
        name: itemName,
        price: price
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(itemName + " added to cart!");
}

// Display cart items function
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    let totalAmount = document.getElementById('total-amount');
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// Checkout function (simulate checkout process)
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
        return;
    }
    alert(`Redirecting to payment gateway. Total amount: $${calculateTotal()}`);
    localStorage.removeItem('cart');
    displayCart();
}

// Calculate total function
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    return total.toFixed(2);
}

// Display cart items on cart.html page load
if (window.location.pathname.includes("cart.html")) {
    displayCart();
}
