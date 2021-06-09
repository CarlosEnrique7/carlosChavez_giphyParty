// global constants
const apiKey = "api_key=PB1PvDciWiOZc46GmuCoJSXK27seF8YD";
const limit = "&20";
const rating = "&g";

const form = document.querySelector("form");
const gifArea = document.querySelector("#gif-area");

form.addEventListener("submit", async (evt) => {
  // stop page reload
  evt.preventDefault();

  const value = evt.target.gif.value;
  const term = "&q=" + value;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?${apiKey}${limit}${rating}${term}`;

  const response = await fetch(apiUrl);
  const responseData = await response.json();

  console.log(responseData);
  displayResults(responseData.data);
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
