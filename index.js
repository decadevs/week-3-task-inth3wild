"use strict";

const charactersContainer = document.querySelector(".characters");

charactersContainer.addEventListener("click", (event) => {
  let targetParent = event.target.parentElement;
  if (targetParent.className === "name") {
    // Check and remove extra info from other characters
    hideExtraInfo(targetParent);

    // toggle display of extra info for a particular character
    showExtraInfo(targetParent);
  }
});

const showExtraInfo = (targetParent) => {
  targetParent.nextElementSibling.classList.toggle("show_element--flex");
};

const hideExtraInfo = (targetParent) => {
  document.querySelectorAll(".character__info--extra").forEach((element) => {
    if (
      element.classList.contains("show_element--flex") &&
      element.previousElementSibling !== targetParent
    ) {
      element.classList.remove("show_element--flex");
    }
  });
};
