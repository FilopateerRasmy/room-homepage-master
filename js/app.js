"use strict";
const sliderBtnLeft = document.querySelector(".left-btn");
const sliderBtnRight = document.querySelector(".right-btn");
const header = document.querySelector(".header");
const discoverHeading = document.querySelector(".discover-heading");
const discoverParagraph = document.querySelector(".discover-paragraph");
const discover = document.querySelector(".discover");
const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");

let imageArr = [
  `url("images/desktop-image-hero-1.jpg")`,
  `url("images/desktop-image-hero-2.jpg")`,
  `url("images/desktop-image-hero-3.jpg")`,
];
const headingText = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
const paragraphText = [
  "We provide unmatched quality, comfort, and style for property owners across the country.\n" +
    "      Our experts combine form and function in bringing your vision to life. Create a room in your\n" +
    "      own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business.\n" +
    "  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\n" +
    "  store locator. Any questions? Don't hesitate to contact us today.",
  " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \n" +
    "  to ensure that every product is made as perfect and as consistent as possible. With three decades of \n" +
    "  experience in this industry, we understand what customers want for their home and office.",
];

// hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-rotation");
  line1.classList.toggle("line-1-rotation");
  line2.classList.toggle("line-2-opacity");
  line3.classList.toggle("line-3-rotation");
  logo.classList.toggle("logo-animation");
  navbar.classList.toggle("navbar-animation");
});

// slider
const adjustingImagesSizes = function (desktop = "desktop", mobile = "mobile") {
  for (let [i, img] of imageArr.entries()) {
    imageArr[i] = img.replace(desktop, mobile);
  }
};

const screenSize = function () {
  if (window.screen.width < 1025) {
    adjustingImagesSizes();

    header.style.backgroundImage = imageArr[0];
  } else {
    adjustingImagesSizes("mobile", "desktop");
  }
};

screenSize();

let imageIndex = imageArr.findIndex(
  (img) => img === header.style.backgroundImage
);
sliderBtnRight.addEventListener("click", function () {
  screenSize();
  if (imageIndex === imageArr.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }

  discover.classList.add("animation");
  header.style.backgroundImage = imageArr[imageIndex];
  discoverHeading.innerText = headingText[imageIndex];
  discoverParagraph.innerText = paragraphText[imageIndex];
});

sliderBtnLeft.addEventListener("click", function () {
  screenSize();
  if (imageIndex <= 0) {
    imageIndex = imageArr.length - 1;
  } else {
    imageIndex--;
  }
  header.style.backgroundImage = imageArr[imageIndex];
  discover.classList.add("animation");
  discoverHeading.innerText = headingText[imageIndex];
  discoverParagraph.innerText = paragraphText[imageIndex];
});

discover.addEventListener("animationend", function () {
  discover.classList.remove("animation");
});

