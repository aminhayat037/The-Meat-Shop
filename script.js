const main = document.getElementById("products-container");
const qurbani = document.getElementById("qurbani-products");

products.forEach(p => {
const div = document.createElement("div");
div.classList.add("card");

div.innerHTML = `     <img src="${p.image}">     <h3>${p.name}</h3>     <p>£${p.price}</p>     <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
  `;

if(p.category === "qurbani"){
qurbani.appendChild(div);
} else {
main.appendChild(div);
}
});

function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart");
}

function checkPostcode(){
const input = document.getElementById("postcodeInput").value.toUpperCase();

if(input.startsWith("E15") || input.startsWith("E20") || input.startsWith("E13")){
document.getElementById("result").innerText = "✅ Delivery available!";
} else {
document.getElementById("result").innerText = "❌ Outside delivery area";
}
}
