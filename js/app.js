const sliderBtnLeft = document.querySelector('.left-btn');
const sliderBtnRight = document.querySelector('.right-btn');
const header = document.querySelector('.header');
const discoverHeading = document.querySelector('.discover-heading');
const discoverParagraph = document.querySelector('.discover-paragraph');
const discover = document.querySelector('.discover');
const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');
const logo =document.querySelector('.logo');
const navbar = document.querySelector('.navbar')

let imageArr = ['images/desktop-image-hero-1.jpg', 'images/desktop-image-hero-2.jpg', 'images/desktop-image-hero-3.jpg'];
const imageMobArr = ['images/mobile-image-hero-1.jpg', 'images/mobile-image-hero-2.jpg', 'images/mobile-image-hero-3.jpg'];
const imageDesk = [...imageArr]
const headingText = ['Discover innovative ways to decorate',
    'We are available all across the globe', 'Manufactured with the best materials'];
const paragraphText = ['We provide unmatched quality, comfort, and style for property owners across the country.\n' +
'      Our experts combine form and function in bringing your vision to life. Create a room in your\n' +
'      own style with our collection and make your property a reflection of you and what you love.', 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business.\n' +
'  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our\n' +
'  store locator. Any questions? Don\'t hesitate to contact us today.', ' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology \n' +
'  to ensure that every product is made as perfect and as consistent as possible. With three decades of \n' +
'  experience in this industry, we understand what customers want for their home and office.']




// hamburger menu
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('hamburger-rotation')
    line1.classList.toggle('line-1-rotation');
    line2.classList.toggle('line-2-opacity');
    line3.classList.toggle('line-3-rotation');
    logo.classList.toggle('logo-animation');
    navbar.classList.toggle('navbar-animation');
})

// slider
const backGroundImg =  getComputedStyle(header).getPropertyValue('background-image');
const imagesSrc = backGroundImg.indexOf('images');
let imageIndex = imageArr.findIndex(img => img === backGroundImg.slice(imagesSrc, -2));

const screenSize = function (){
    if (window.screen.width < 1025){
        imageArr = [...imageMobArr]
    }else{
        imageArr = [...imageDesk]
    }
}

screenSize();



sliderBtnRight.addEventListener('click', function (){

 if(imageIndex === imageArr.length - 1){
     imageIndex = 0
 }else {
     imageIndex+=1;
 }
    screenSize()
    discover.classList.add('animation');
  header.style.backgroundImage = `url(${imageArr[imageIndex]})`;
    discoverHeading.innerText = headingText[imageIndex];
 discoverParagraph.innerText = paragraphText[imageIndex];



})

sliderBtnLeft.addEventListener('click', function (){
    if(imageIndex <= 0){
        imageIndex = imageArr.length - 1;
    }else {
        imageIndex--;
    }
    screenSize();
    header.style.backgroundImage = `url(${imageArr[imageIndex]} )`;
    discover.classList.add('animation')
    discoverHeading.innerText = headingText[imageIndex];
    discoverParagraph.innerText = paragraphText[imageIndex];

})




discover.addEventListener('animationend', function (){

    discover.classList.remove('animation')

})
