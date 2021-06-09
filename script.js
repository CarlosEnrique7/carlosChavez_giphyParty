// global constants
const apiKey = "api_key=PB1PvDciWiOZc46GmuCoJSXK27seF8YD";
const limit = "&limit=10";
const rating = "&rating=g";
let offset = 0;

const form = document.querySelector("form");
const gifArea = document.querySelector("#gif-area");
const loadBtn = document.querySelector("#load-btn");

let pageNumber = 0;

form.addEventListener("submit", (evt) => {
  offset = 0;
  evt.preventDefault();
  clearHTML();
  getResults(evt);
  loadBtn.classList.remove("hidden");
  loadBtn.addEventListener("click", () => {
    offset += 10;
    getResults(evt);
    pageNumber++;
  });
});

function displayResults(response) {
  index = 0;
  response.forEach((element) => {
    gifArea.innerHTML += `
    <div class="gif">
    <img class="gif-image" src="${response[index].images.fixed_height.url}" alt="${response[index].title}"/>
    </div>`;
    index++;
  });
}

function clearHTML() {
  gifArea.innerHTML = " ";
}

async function getResults(evt) {
  const value = evt.target.gif.value;
  const term = "&q=" + value;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}${limit}${rating}${term}&offset=${offset}`;

  const response = await fetch(apiUrl);
  const responseData = await response.json();

  console.log(responseData);
  displayResults(responseData.data);
}
