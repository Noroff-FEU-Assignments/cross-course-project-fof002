const cartCount = document.querySelector("#quantity");

window.addEventListener("load",cartCounter);

function cartCounter () {

    productsInCart = localStorage.length;
    cartCount.innerHTML = productsInCart;

    if (productsInCart === 0) {
        cartCount.innerHTML = "";
    }

}