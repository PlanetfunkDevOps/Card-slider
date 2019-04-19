const slidesBot = document.querySelectorAll(".inner-slide__bot");
const slidesTop = document.querySelectorAll(".inner-slide__top");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlideBot = () => {
  const currentBot = document.querySelector(".current-bot");
  currentBot.classList.remove("current-bot");
  if (currentBot.nextElementSibling) {
    currentBot.nextElementSibling.classList.add("current-bot");
  } else {
    slidesBot[0].classList.add("current-bot");
  }
  setTimeout(() => currentBot.classList.remove("current-bot"));
};

const nextSlideTop = () => {
  const currentTop = document.querySelector(".current-top");
  currentTop.classList.remove("current-top");
  if (currentTop.nextElementSibling) {
    currentTop.nextElementSibling.classList.add("current-top");
  } else {
    slidesTop[0].classList.add("current-top");
  }
  setTimeout(() => currentTop.classList.remove("current-top"));
};

if (auto) {
  slideInterval = setInterval(nextSlideBot, intervalTime);
  slideInterval = setInterval(nextSlideTop, intervalTime);
}