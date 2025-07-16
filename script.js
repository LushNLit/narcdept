// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to display cart contents
function displayCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");

  if (!cartList || !cartTotal) return;

  // Clear previous list to prevent duplicates
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong> – ${item.price ? "KES " + item.price : "Price TBD"}
    `;

    // Add image if available
    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.style.width = "80px";
      img.style.borderRadius = "8px";
      img.style.display = "block";
      img.style.marginTop = "8px";
      li.appendChild(img);
    }

    cartList.appendChild(li);

    if (item.price) {
      total += parseFloat(item.price);
    }
  });

  cartTotal.innerText = "KES " + total.toFixed(2);
}

// Function to clear cart
function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  displayCart();
}

// Display cart on load
window.onload = displayCart;
