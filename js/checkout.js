const checkedOutItem = document.querySelector(".checkout-item");

function getProducts () {

    for (i= 0; i < localStorage.length; i++ ) {
        let key = localStorage.key(i);
        checkedOutItem.innerHTML += `${key}`;
    }
}

getProducts();