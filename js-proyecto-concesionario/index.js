const images = ["img/football.jpg", "img/football2.jpg", "img/football3.jpg"];

let index = 0;
const max = images.length;

const containerElement = document.querySelector(".container");
const prevSlideButton = document.querySelector(".prevSlide");
const nextSlideButton = document.querySelector(".nextSlide");

prevSlideButton.addEventListener("click", () => {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);

});

nextSlideButton.addEventListener("click", () => {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
});

function setImageIndex() {
    if (index < 0) index = max - 1;
    if (index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
}