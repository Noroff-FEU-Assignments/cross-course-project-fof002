const checkoutContainer = document.querySelector(".checkout-container");
const total = document.querySelector(".total");
const cartItems = JSON.parse(localStorage.getItem("Cart"));

function fetchCheckoutItems () {   
    let product = ""
    try {
        if (!cartItems) {
            checkoutContainer.innerHTML = "Your cart is empty!"
        }
        else {
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
            </div>`
            console.log(typeof(product.price));
            }
        }
    }
    catch {
        checkoutContainer.innerHTML = "Unable to get your products";
    }
};
fetchCheckoutItems();
//localStorage.clear();