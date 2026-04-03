let cart = [];

function showMessage() {
  alert("AR Feature Coming Soon!");
}

function addToCart(item) {
  cart.push(item);
  displayCart();
}

function displayCart() {
  let cartList = document.getElementById("cart");
  if (!cartList) return;

  cartList.innerHTML = "";

  cart.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }

  alert("Message sent!");
  return true;
}
