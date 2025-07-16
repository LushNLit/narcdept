// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, price) {
  // Always use passed price, don't extract from string
  cart.push({ item: itemName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${itemName} added to cart`);
}

function loadCart() {
  const list = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("cart-total");
  let total = 0;

  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li>Your cart is empty. Add some products!</li>";
  } else {
    cart.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.item} — KES ${entry.price}`;
      list.appendChild(li);
      total += Number(entry.price);
    });
  }

  totalDisplay.textContent = `KES ${total}`;
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Load cart if this page has a cart display
window.onload = function () {
  if (document.getElementById("cart-list")) {
    loadCart();
  }
};
