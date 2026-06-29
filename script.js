const container = document.getElementById("products");
const qurbaniContainer = document.getElementById("qurbani-products");

// LOAD PRODUCTS
products.forEach(product => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `     <img src="${product.image}">     <h3>${product.name}</h3>     <p>£${product.price}</p>     <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;

if(product.category === "qurbani"){
qurbaniContainer.appendChild(card);
} else {
container.appendChild(card);
}
});

// SIMPLE CART
let cart = [];

function addToCart(name){
cart.push(name);
alert(name + " added to cart");
}

// POSTCODE CHECK (basic for now)
function checkPostcode(){
const input = document.getElementById("postcodeInput").value.toUpperCase();

if(input.startsWith("E20")){
document.getElementById("result").innerText = "✅ Delivery available!";
} else {
document.getElementById("result").innerText = "❌ Outside delivery area";
}
}

