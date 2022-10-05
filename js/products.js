import { jacketArray } from "./constants/productList.js";

const jacketContainer = document.querySelector(".jacket-specific-wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id");

function fetchJacket () {

    try {

    for (let i = 0; i < jacketArray.length; i++)

    if (!i === queryId) {
        continue;
    }
    else {
        jacketContainer.innerHTML = `<img class="jacket-specific-image" src="../images/raincoat.png"alt="Picture of White Jacket"/>
        <div class="jacket-specific-content">
        <h1>${jacketArray[i].name}</h1>
        <p>Description</p>
        <p><b>Kr. ${jacketArray[i].price}</b></p>
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
            <div class="checkout-button" id="${jacketArray[i].id}" class="checkout-button">Add to cart</div>
        </div>
        </div>`; 
    }
    }
    catch (error) {
        jacketContainer.innerHTML = "Unable to load jacket";
    }
}

fetchJacket();