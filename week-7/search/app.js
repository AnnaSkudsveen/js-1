let beerData = [];

const searchForm = document.getElementById("search");
fetch("https://api.punkapi.com/v2/beers")
  .then((response) => response.json())
  .then((result) => {
    beerData = result;
  });

searchForm.addEventListener("input", (event) => {
  event.preventDefault();
  const searchWordFromUser = searchForm.searchWord.value;

  let resultOfSearch = [];

  for (const beer of beerData) {
    if (beer.name.toLowerCase().includes(searchWordFromUser.toLowerCase())) {
      resultOfSearch.push(beer);
    }
  }

  renderBeers(resultOfSearch);
});

// function debounce(func, delay) {
//   let timer;
//   return function( {
//     const context = this;

//   })
// }

function renderBeers(beers) {
  console.clear();
  for (const beer of beers) {
    console.log(beer);
  }
}
