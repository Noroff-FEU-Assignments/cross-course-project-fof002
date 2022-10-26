const url = "https://frithjof.shop/test/wp-json/wc/store/products";
const jacketContainerIndex = document.querySelector(".jackets-outer-grid");

async function fetchJackets() {
  try {
    const response = await fetch(url);
    const jackets = await response.json();
    console.log(jackets);

    for (let i = 0; i < jackets.length; i++) {
      let jacket = jackets[i];
      let sale = "";
      if (jacket.on_sale != true) {
        sale = "";
      } else {
        sale = `<span style="color:red;font-size:1rem; font-weight:600">On sale! (kr. ${jacket.prices.regular_price})</span>`;
      }
      jacketContainerIndex.innerHTML += `<div class="jackets-inner-grid">
            <img
              src="../Images/Raincoat.png"
              alt="Photo of jacket"
              class="jacket-photo"
            />
            <div class="jacket-info">
              <h2>${jacket.name}</h2>
              <p>Men</p>
              <h3>Kr. ${jacket.prices.price}</h3>
              ${sale}
            </div>
            <a href="../jacket-specific.html?id=${jacket.id}">
              <div class="jacket-inner-grid-backside">
                <div class="jacket-button">View Product</div>
              </div>
            </a>
          </div>`;
    }
  } catch {
    jacketContainerIndex.innerHTML =
      "Something went wrong! Contact us for assitance";
  }
}
fetchJackets();
