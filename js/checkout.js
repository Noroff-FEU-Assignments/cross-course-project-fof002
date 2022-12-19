const checkoutContainer = document.querySelector(".checkout-container");
const checkoutWrapper = document.querySelector(".checkout-wrapper");
const checkoutForm = document.querySelector(".checkout-form-wrapper");
const total = document.querySelector(".total");
const cartItems = JSON.parse(localStorage.getItem("Cart"));

function fetchCheckoutItems() {
  let product = "";
  try {
    if (!cartItems) {
      checkoutContainer.innerHTML = "Your cart is empty!";
      checkoutForm.style.display = "none";
    } else {
      for (let i = 0; i < cartItems.length; i++) {
        product = cartItems[i];
        checkoutContainer.innerHTML += `<div class="checkout-item">
                <img
                class="checkout-image"
                src="../images/raincoat.png"
                alt="Picture of ${product.name}"
                />
                <h3>${product.name}</h3>
                <p><b>Kr. ${product.prices.price}</b></p>
                <div class="checkout-button" id="${i}" class="checkout-button">Remove</div>
            </div>
           `;
      }
    }
  } catch {
    checkoutContainer.innerHTML = "Unable to get your products";
  }
}
fetchCheckoutItems();
//localStorage.clear();
//Remove item function
document.addEventListener("click", (event) => {
  if (event.target.matches(".checkout-button")) {
    let cartArray = JSON.parse(localStorage.getItem("Cart"));
    let itemId = event.target.id;
    cartArray.splice(itemId, 1);
    localStorage.setItem("Cart", JSON.stringify(cartArray));
    event.target.parentElement.style.display = "none";
  }
});
