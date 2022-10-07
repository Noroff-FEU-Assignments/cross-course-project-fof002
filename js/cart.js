const cartCount = document.querySelector("#quantity");

window.addEventListener("load", () => {
    const getCartItems = JSON.parse(localStorage.getItem("Cart"));
    if (!getCartItems) {
        cartCount.innerHTML = "";
    }
    else {
        let productsInCart = getCartItems.length;
        cartCount.innerHTML = productsInCart;    
    }
}
);