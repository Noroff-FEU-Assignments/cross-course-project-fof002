import { jacketArray } from "./constants/productList.js";

const jacketContainer = document.querySelector(".jacket-specific-wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id");

function fetchJacket () {
    try {      
            const jacket = jacketArray[`${queryId}`];

            jacketContainer.innerHTML = `<img class="jacket-specific-image" src="../images/raincoat.png"alt="Picture of White Jacket"/>
            <div class="jacket-specific-content">
            <h1>${jacket.name}</h1>
            <p>Description</p>
            <p><b>Kr. ${jacket.price}</b></p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                consectetur natus rerum eum ea illum optio excepturi omnis maxime
                quidem?
            </p>
            <div class="size-container">
                <div>Choose size</div>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div class="quantity-container">
                <div class="checkout-button" id="${jacket.id}" class="checkout-button">Add to cart</div>
            </div>
            </div>`; 

    }
    catch (error) {
        jacketContainer.innerHTML = "Unable to load jacket";
    }
}

fetchJacket();

//Add to cart function

const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.addEventListener("click", () => {
    let cartArray = "";
    const cartItems = JSON.parse(localStorage.getItem("Cart"));
    if (!cartItems) {
        cartArray = [];
    }
    else {
        cartArray = cartItems;
    }
    const itemToAdd = jacketArray.find(item => item.id === checkoutButton.id);
    cartArray.push(itemToAdd); 
    localStorage.setItem("Cart", JSON.stringify(cartArray));
    cartCounter();
}
);
//localStorage.clear();
const item = JSON.parse(localStorage.getItem("Cart"));
console.log(item.length);