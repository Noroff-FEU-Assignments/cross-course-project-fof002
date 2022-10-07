const cartCount = document.querySelector("#quantity");

window.addEventListener("load",cartCounter);

const getCartItems = JSON.parse(localStorage.getItem("Cart"));

function cartCounter () {
    productsInCart = getCartItems.length;
    cartCount.innerHTML = productsInCart;
    if (productsInCart === 0) {
        cartCount.innerHTML = "";
    }
}