import { jacketArray } from "./constants/productList.js";

const jacketContainer = document.querySelector(".jacket-specific-wrapper");

jacketArray.forEach( product => {
    jacketContainer.innerHTML += `<img class="jacket-specific-image" src="../images/raincoat.png"alt="Picture of White Jacket"/>
    <div class="jacket-specific-content">
      <h1>${product.name}</h1>
      <p>Description</p>
      <p><b>Kr. ${product.price}</b></p>
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
        <div class="checkout-button" id="${product.id}" class="checkout-button">Add to cart</div>
      </div>
    </div>` 
}
);

