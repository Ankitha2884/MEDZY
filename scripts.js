// scripts.js

function addToCart(itemName, price) {
    let quantity = parseInt(event.target.previousElementSibling.value);
    
    // Validate quantity
    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    for (let i = 0; i < quantity; i++) {
        let cartItem = {
            name: itemName,
            price: price
        };
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    alert(quantity + " " + itemName + "(s) added to cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹ ${item.price.toFixed(2)}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before proceeding to checkout.");
        return;
    }
    alert("Redirecting to payment gateway.");
    // Additional checkout logic (payment processing, address input) can be added here
    localStorage.removeItem('cart');
    displayCart();
}

// Display cart items when page loads
displayCart();

// Display cart items when page loads
displayCart();
