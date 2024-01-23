import products from "./products.js";
const productsContainer = document.querySelector(".products-container");

let numberOfProducts = products.length;

for (let i = 0; i < numberOfProducts; i++) {
  productsContainer.innerHTML += `
    <div class="product-card"> 
        <h2>${products[i].name}</h2>
        <p>${products[i].description}</p>
        <span class="heart-container">
            <svg class="heart"
                data-name="${products[i].name}"
                data-id="${products[i].id}"
                data-price="${products[i].price}"
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="#000000" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </span>
        <h3>${products[i].price}</h3>
    </div> 
    `;
}

const heartSvgs = document.querySelectorAll(".heart");

for (let x = 0; x < heartSvgs.length; x++) {
  this.classList.toggle("active-heart");
}
