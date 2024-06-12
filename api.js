"use strict";
const url = "https://swapi.dev/api/people";

const images = [
  "Luke.webp",
  "C-3PO.webp",
  "R2D2.webp",
  "Darth.webp",
  "Leia.webp",
  "Owen.webp",
  "Beru.webp",
  "R5.webp",
  "Biggs.webp",
  "Obi.webp",
];

const fetchAPIContent = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Response status code: ${response.status}`);
  }
  const responseData = await response.json();
  return responseData;
};

const createCard = (name, height, gender, index) => {
  let div = document.createElement("div");
  div.className = "character__card";
  div.innerHTML = `
        <img src="./assets/${images[index]}" alt="${name}" class="character__image">
        <div class="character__info">
          <p class="name"><span class="attribute">Name: </span> <span class="character__name">${name}</span></p>
          <div class="character__info--extra">
            <p><span class="attribute">Gender: </span> <span class="character__gender">${gender}</span></p>
            <p><span class="attribute">Height: </span> <span class="character__height">${height}</span></p>
          </div>
        </div>
    `;
  return div;
};

const appendCharacterCards = (charactersContainer) => {
  fetchAPIContent(url)
    .then((responseData) => {
      let characters = responseData.results;
      characters.forEach(({ name, height, gender }, index) => {
        let card = createCard(name, height, gender, index);
        charactersContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default appendCharacterCards;
