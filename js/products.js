const jacketContainer = document.querySelector(".jacket-specific-wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryId = params.get("id");
const url = "https://frithjof.shop/test/wp-json/wc/store/products";

async function fetchJacket() {
  try {
    const response = await fetch(url);
    const jackets = await response.json();
    console.log(jackets);
    for (let i = 0; i < jackets.length; i++) {
      if (queryId == jackets[i].id) {
        let jacket = jackets[i];
        jacketContainer.innerHTML = `<img class="jacket-specific-image" src="../images/raincoat.png"alt="Picture of White Jacket"/>
                <div class="jacket-specific-content">
                <h1>${jacket.name}</h1>
                <p>Description</p>
                <p><b>Kr. ${jacket.prices.price}</b></p>
                <p>
                ${jacket.description}
                </p>
                <div class="size-container">
                    <div>Choose size</div>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div class="quantity-container">
                    <div id="${jacket.id}" class="checkout-button">Add to cart</div>
                </div>
                </div>`;
        break;
      }
    }
  } catch (error) {
    jacketContainer.innerHTML = "Unable to load jacket";
  }
}

fetchJacket();

//Add to cart function
const quantityContainer = document.querySelector("#quantity");
const checkoutButton = document.querySelector(".checkout-button");

checkoutButton.addEventListener("click", () => {
  let cartArray = "";
  const itemToAdd = jackets.find((item) => item.id == checkoutButton.id);
  const cartItems = JSON.parse(localStorage.getItem("Cart"));
  quantityContainer.innerHTML = "";
  if (!cartItems) {
    cartArray = [];
  } else {
    cartArray = cartItems;
  }
  cartArray.push(itemToAdd);
  localStorage.setItem("Cart", JSON.stringify(cartArray));
  quantityContainer.innerHTML = cartArray.length;
});
