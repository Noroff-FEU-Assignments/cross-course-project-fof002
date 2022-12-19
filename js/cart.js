const cartCount = document.querySelector("#quantity");

window.addEventListener("load", () => {
    const getCartItems = JSON.parse(localStorage.getItem("Cart"));
    const productsInCart = getCartItems.length;
    if (!getCartItems || productsInCart===0) {
        cartCount.innerHTML = "";
    }

    else {
        cartCount.innerHTML = productsInCart;    
    }
}
);