import { jacketArray } from "./constants/productList.js";

const jacketContainerIndex = document.querySelector(".jackets-outer-grid");
function fetchJackets () {
     try {
        for (let i=0; i<jacketArray.length; i++) {
            let jacket = jacketArray[i];
            jacketContainerIndex.innerHTML += `<div class="jackets-inner-grid">
            <img
              src="../Images/Raincoat.png"
              alt="Photo of jacket"
              class="jacket-photo"
            />
            <div class="jacket-info">
              <h2>${jacket.name}</h2>
              <p>Men</p>
              <h3>Kr. ${jacket.price}</h3>
            </div>
            <a href="../jacket-specific.html?id=${jacket.id}">
              <div class="jacket-inner-grid-backside">
                <div class="jacket-button">View Product</div>
              </div>
            </a>
          </div>`;
        }
     }
    catch {
        jacketContainerIndex.innerHTML ="unable to load jackets!"
    }
}
fetchJackets();