// script.js

const images = [
  "images/write1.jpg",
  "images/todo.png",
  "images/todo2.webp",
  // Add more image file names here
];

let currentIndex = 0;

const imageElement = document.getElementById("current-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function updateImage(index) {
  currentIndex = index;
  imageElement.src = images[currentIndex];
}

function showPrevImage() {
  if (currentIndex > 0) {
    updateImage(currentIndex - 1);
  } else {
    updateImage(images.length - 1); // Loop to the last image
  }
}

function showNextImage() {
  if (currentIndex < images.length - 1) {
    updateImage(currentIndex + 1);
  } else {
    updateImage(0); // Loop to the first image
  }
}

function changeImage(src) {
  imageElement.src = src;
  currentIndex = images.indexOf(src);
}

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);
