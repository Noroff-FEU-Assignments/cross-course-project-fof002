//cart counter

const cartQuantity = document.querySelector("#quantity");
productsInCart = localStorage.length;

function cartQuantityCounter () {
   //localStorage.clear()
    if (productsInCart === 0) {
        cartQuantity.innerHTML = "";
    }
    else {
        cartQuantity.innerHTML = productsInCart;
    }
}
window.addEventListener("load", () => {
    cartQuantityCounter();
}
);