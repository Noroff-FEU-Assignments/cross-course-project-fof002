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
const quantityContainer = document.querySelector("#quantity");
const checkoutButton = document.querySelector(".checkout-button");
let cartArray = "";

checkoutButton.addEventListener("click", () => {
    const itemToAdd = jacketArray.find(item => item.id === checkoutButton.id);
    const cartItems = JSON.parse(localStorage.getItem("Cart"));
    quantityContainer.innerHTML = "";   
    if (!cartItems) {
        cartArray = [];
    }
    else {
        cartArray = cartItems;
    }
    cartArray.push(itemToAdd); 
    localStorage.setItem("Cart", JSON.stringify(cartArray));
    quantityContainer.innerHTML = cartArray.length;
}
);