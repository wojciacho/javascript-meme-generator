const memeContainer = document.querySelector(".meme-container");
const generateButton = document.querySelector(".generate");
const memeTitle = document.querySelector(".title");
const memeAuthor = document.querySelector(".author");
const memeIMG = document.querySelector(".meme-img");

const getData = () => {
  const URL = "https://meme-api.com/gimme/wholesomememes";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => showMeme(data));
};

const showMeme = (item) => {
  memeTitle.innerHTML = `${item.title}`;
  memeAuthor.innerHTML = `${item.author}`;
  memeIMG.src = `${item.url}`;
  console.log(item);
};

generateButton.addEventListener("click", getData);
