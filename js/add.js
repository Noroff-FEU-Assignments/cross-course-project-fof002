const addProductButton = document.querySelector(".checkout-button");
const productId = addProductButton.id;

addProductButton.addEventListener("click", addToCart);

function addToCart () {
    localStorage.setItem("Name of Jacket", JSON.stringify(productId));
    cartQuantityCounter ();
}
