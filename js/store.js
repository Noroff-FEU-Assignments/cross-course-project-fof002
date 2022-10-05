import { jacketArray } from "./constants/productList";

const jacketContainerStore = document.querySelector(".jackets-outer-grid-store");

function fetchJackets () {
    for (i=0; i<jacketArray.length; i++) {
        let jacket = jacketArray[i];
        jacketContainerStore.innerHTML = `<a href="../jacket-specific.html?id=${jacket.id}">
        <div class="jackets-inner-grid-store">
            <img src="../Images/Raincoat.png" alt="Photo of jacket" class="jacket-photo">
            <div class="jacket-info">
                <h2>${jacket.name}</h2>
                <p>
                    Men
                </p>
                <h3>
                    kr. ${jacket.price}
                </h3>
            </div>
        </div>`
    }
}
fetchJackets();