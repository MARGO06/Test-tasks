const button = document.querySelector(".button-travel");
const article = document.querySelector(".rome-article");

const changeVisibleInformation = () => {
  button.addEventListener("click", () => {
    article.classList.toggle("active");
    button.classList.toggle("active");
  });
};

changeVisibleInformation();
