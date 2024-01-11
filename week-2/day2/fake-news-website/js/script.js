let news = [
    {
        headline: "Watch Hesh landing on the moon",
        summary: "He landed with his head first"
    },
    {
        headline: "All time weather record in Oslo",
        summary: "42 degrees and Sun in January"
    },
    {
        headline: "Noahs Ark sighted",
        summary: "With the massive snowstorm coming in, so does Noahs ark"
    },   
];

const newsContainer = document.querySelector(".news");

let content = "";

const numberOfNews = news.length;
console.log(numberOfNews);

for (let i = 0; i < numberOfNews; i++) {
    content += 
    `
    <div>
    <h2>${news[i].headline}</h2>
    <p>${news[i].summary}</p>
    </div>
    `
}

newsContainer.innerHTML = content;
