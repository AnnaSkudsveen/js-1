const API_URL = "https://catfact.ninja/facts"; //Link for Backend Application API

const factsContainer = document.querySelector(".facts-container");

//This GETs all the data
fetch(API_URL)
  .then((response) => response.json())
  .then((factsData) => {
    console.log("data", factsData.data);
    const numberOfFacts = factsData.length;
    for (let i = 0; i < numberOfFacts; i++) {
      //   console.log(i);
      //   console.log(catsData.data.fact);
      factsContainer.innerHTML += `
        <div>
            ${factsData.data[i].fact}
        </div>`;
    }
  });

// .delete, .post, fetch.get.
// metod:GET (Good developers define this)
