let cart = JSON.parse(localStorage.getItem("cart")) || [];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function addToCart(itemName, price) {
  cart.push({ item: itemName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart`);
}

function loadCart() {
  const list = document.getElementById("cart-list");
  const totalDisplay = document.getElementById("cart-total");
  let total = 0;

  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML = "<li>Your cart is empty.</li>";
  } else {
    cart.forEach((entry) => {
      const li = document.createElement("li");

      const imgName = slugify(entry.item) + ".jpg";
      const img = document.createElement("img");
      img.src = `images/${imgName}`;
      img.alt = entry.item;
      img.style.width = "60px";
      img.style.height = "60px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "10px";
      img.style.marginRight = "10px";

      const text = document.createElement("span");
      text.textContent = `${entry.item} — KES ${entry.price}`;

      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.marginBottom = "12px";
      li.appendChild(img);
      li.appendChild(text);
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

window.onload = function () {
  if (document.getElementById("cart-list")) {
    loadCart();
  }
};
