const checkoutContainer = document.querySelector(".checkout-container");
const removeItemButton = document.querySelectorAll(".checkout-button");
const total = document.querySelector(".total");
const cartItems = JSON.parse(localStorage.getItem("Cart"));

function fetchCheckoutItems () {   
    let product = ""
    try {
        for (let i = 0; i < cartItems.length; i++ ) {
            product = cartItems[i];
            checkoutContainer.innerHTML += `<div class="checkout-item">
            <img
              class="checkout-image"
              src="../images/raincoat.png"
              alt="Picture of ${product.name}"
            />
            <h3>${product.name}</h3>
            <p><b>Kr. ${product.price}</b></p>
            <div class="checkout-button" id="${product.id}">Remove</div>
          </div>`

          total.innerHTML += product.price;
        }
    }
    catch {
        checkoutContainer.innerHTML = "Your cart is empty!";
    }
};

fetchCheckoutItems();
//localStorage.clear();