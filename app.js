// DOM

const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn-modal");
const modalRules = document.querySelector(".modal");

//Show/Hide Rules

btnRules.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
  console.log("btn clicked");
});

btnClose.addEventListener("click", () => {
  modalRules.classList.toggle("show-modal");
});
