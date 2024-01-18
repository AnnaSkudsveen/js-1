console.log("main");
import products from "./data/products.js";
// console.log(products);

// 1. select the productscontainer
const productsContainer = document.querySelector(".products-container");
// console.log(productsContainer);

const mySavedFavs = window.localStorage.getItem("heartSvgs");
//find
//will compare the two arrays
//products data and the sendcond will be mySavedFavs
//product1       product1
// id      ===      id
//true

// 2. Fill the productsContainer with products
for (let i = 0; i < products.length; i++) {
  const isObjectSavedEarlier = mySavedFavs.find(function (fav) {
    return fav.id === products[i];
  });
  //   console.log(products[i]);
  productsContainer.innerHTML += `
  <div class="product">
                <img src="https://picsum.photos/200" alt="">
                <h3>${products[i].name}</h3>
                <p>NOK ${products[i].price}</p>
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
                        <path
                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                        </path>
                    </svg>
                </span>
            </div>
  `;
}

// 3. Check if fav button is clicked
const heartSvgs = document.querySelectorAll(".heart");
// console.log(heartSvgs);
//The favs need to be declared outside the for loop, so you dont make a new favs array everytime you click it
let favs = [];

// 4 I want to make THAT heart red
for (let x = 0; x < heartSvgs.length; x++) {
  //   console.log(heartSvgs[x]);
  heartSvgs[x].addEventListener("click", function () {
    // console.log("clicked heart:", heartSvgs[x]);

    // console.log("classlist:", this.classlist);

    this.classList.toggle("active-heart");

    // Alternativ way, not as good:
    // event.target.classList.toggle("active-heart")

    // console.log(this.dataset.name);

    favs.push({
      name: this.dataset.name,
      id: this.dataset.id,
      price: this.dataset.price,
    });
    // Alternatively;
    // favs.push(productsIsaved)
    // saveFavs(favs)
    // And a function outside ->
  });
}

//Function for alternative above
// function saveFavs(favs){
//     window.localStorage.setItem("heartSvgs", JSON.stringify(favs));
// }

function getExistingFavs() {
  //Get the items of fav from the local storage
  //It will do a check to check if I have already heartSvgs
  //or not
  //If i have heartSvgs Then i want to use them
  //If i dont have heartSvgs, use nothing

  const savedFavs = window.localStorage.getItem("heartSvgs");

  if (!savedFavs) {
    return [];
  } else {
    return JSON.parse(savedFavs);
  }
}

// when refeshing get data in local storage , and "send" it to heartSvgs

// TODO
//I want to move the clicking event to its own function instead of anonymous function.
