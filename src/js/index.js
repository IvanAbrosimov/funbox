const mainBlock = document.querySelectorAll(".food-main");

function link() {
  mainBlock.forEach((el) => {
    const textLink = el.querySelector(".food-main__text");
    textLink.addEventListener("click", () => {
      const blocksMain = el.querySelector(".cats-food");
      blocksMain.classList.toggle("cats-food--active");
      const weight = el.querySelector(".cats-food__weight");
      weight.classList.toggle("cats-food__weight--active");
      const corner = el.querySelector(".cats-food__corner");
      corner.classList.toggle("cats-food__corner--active");
      const text = el.querySelector(".food-main__text");
      if (el.dataset.id === "fuagra")
        text.innerHTML = "Печень утки разварная с&nbsp;артишоками.";
      if (el.dataset.id === "fish")
        text.innerHTML =
          "Головы щучьи с&nbsp;чесноком да&nbsp;свежайшая сёмгушка.";
      if (el.dataset.id === "chicken")
        text.innerHTML = "Филе из&nbsp;цыплят с&nbsp;трюфелями в&nbsp;бульоне.";
    });
  });
}
link();

function block() {
  mainBlock.forEach((e) => {
    const block = e.querySelector(".cats-food");
    block.addEventListener("click", () => {
      block.classList.toggle("cats-food--active");
      const weight = block.querySelector(".cats-food__weight");
      weight.classList.toggle("cats-food__weight--active");
      const corner = block.querySelector(".cats-food__corner");
      corner.classList.toggle("cats-food__corner--active");
      const text = e.querySelector(".food-main__text");
      if (e.dataset.id === "fuagra")
        text.innerHTML = "Печень утки разварная с&nbsp;артишоками.";
      if (e.dataset.id === "fish")
        text.innerHTML =
          "Головы щучьи с&nbsp;чесноком да&nbsp;свежайшая сёмгушка.";
      if (e.dataset.id === "chicken")
        text.innerHTML = "Филе из&nbsp;цыплят с&nbsp;трюфелями в&nbsp;бульоне.";
      if (block.classList.contains("cats-food--active") === false) {
        text.innerHTML =
          'Чего сидишь? Порадуй котэ, <a class="food-main__link">купи</a>';
      }
      if (e.dataset.enable === "disable")
        text.innerHTML = "Печалька, с курой закончился.";
      link();
    });
  });
}
block();

const disable = document.getElementsByClassName("food-main-disable");
const text = document.querySelector(".food-main-disable .food-main__text");
text.textContent = "Печалька, с курой закончился.";
text.style.color = "#FFFF66";
