console.log("main");
import products from "./data/products.js";
// console.log(products);

// 1. select the productscontainer
const productsContainer = document.querySelector(".products-container");
// console.log(productsContainer);

// 2. Fill the productsContainer with products
for (let i = 0; i < products.length; i++) {
  //   console.log(products[i]);
  productsContainer.innerHTML += `
  <div class="product">
                <img src="https://picsum.photos/200" alt="">
                <h3>${products[i].name}</h3>
                <p>NOK ${products[i].price}</p>
                <span class="heart-container">
                    <svg class="heart"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none"
                        stroke="#000000" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </span>
            </div>
  `;
}

// 3. Check if fav button is clicked
const favorites = document.querySelectorAll(".heart");
// console.log(favorites);
// 4 I want to make THAT heart red
for (let x = 0; x < favorites.length; x++) {
  //   console.log(favorites[x]);
  favorites[x].addEventListener("click", function () {
    // console.log("cliked heart", favorites[x]);
    console.log("classlist:", this.classlist);
    // this.classlist.toggle(".active-heart");
  });
}
//TODO I want to fix the heart to toggle classes when clicked
//I want to move the clicking vent to its own function instead of anonymous function.
