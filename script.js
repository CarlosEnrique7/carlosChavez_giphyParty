// global constants
const apiKey = "api_key=PB1PvDciWiOZc46GmuCoJSXK27seF8YD";
const limit = "&20";
const rating = "&g";

const form = document.querySelector("form");
const gifArea = document.querySelector("#gif-area");

console.log("loaded");

form.addEventListener("submit", (evt) => {
  // stop page reload
  evt.preventDefault();
  const value = evt.target.gif.value;
  const apiUrl = `api.giphy.com/v1/gifs/search?${apiKey}${limit}${rating}`;
});
