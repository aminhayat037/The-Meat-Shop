const products = [
  {name: "Lamb Chops", price: 12},
  {name: "Chicken Breast", price: 8},
  {name: "Beef Steak", price: 15}
];

let cart = [];

function loadProducts() {
  const grid = document.getElementById("products-grid");

  products.forEach((p, i) => {
    grid.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>£${p.price}</p>
        <button onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(i) {
  cart.push(products[i]);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let html = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    html += `<p>${item.name} £${item.price} <button onclick="removeItem(${i})">x</button></p>`;
  });

  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("cart-total").innerText = total;
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("open");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function checkDelivery() {
  const pc = document.getElementById("postcode").value.toUpperCase();

  document.getElementById("delivery-result").innerText =
    pc.startsWith("E") || pc.startsWith("EN")
    ? "Delivery Available ✅"
    : "Not Available ❌";
}

loadProducts();
