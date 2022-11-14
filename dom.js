let heading = document.querySelector("h1");
let subheading = document.querySelector("h2");
let paragraph = document.querySelector("p");
let listItem = document.querySelector("li");
let anchor = document.querySelector(".container a");

let allListItems = document.querySelectorAll("li");

let allParagraph = document.querySelectorAll("p");

anchor.innerText = "Google!";

// let gugelLogo = document.querySelector(".lnXdpd");
// let imgSrc = gugelLogo.src
// gugelLogo.srcset = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png";

// let gugelSearchBtn = document.querySelector(".gNO89b");
// gugelSearchBtn.ariaLabel = "Yahuu!!";

// let header3 = document.querySelector("h3");
// header3.style.fontSize = 30;
// header3.style.color = "green";

function onClick() {
  // Wait a second...
  console.log("The page was clicked");
}
heading.addEventListener("click", onClick);

function subHeadingClicked() {
  // Wait a second...
  console.log("The h2 was clicked");
}

subheading.addEventListener("click", subHeadingClicked);

let input = document.querySelector("input");
function onKeyPress() {
  // Wait a second...
  console.log(input.value);
}
input.addEventListener("keyup", onKeyPress);

let img = document.querySelector("img");
function onMouseMove() {
  // Wait a second...
  console.log("Mouse is moving");
}
img.addEventListener("mousemove", onMouseMove);

let firstItem = document.querySelectorAll("li")[0];
function clickFirstItem() {
  // Wait a second...
  console.log("First Item Clicked");
}
firstItem.addEventListener("click", clickFirstItem);

// setTimeout(delayedFx, 2000);
// function delayedFx() {

// }

function regularCalledFx() {
  console.log("call every 3 secs");
}
// setInterval(regularCalledFx, 3000);

// function fadeImgAway() {
//     let currentOpacityAsString = getComputedStyle(img).opacity;
//     let currentOpacity = parseFloat(currentOpacityAsString, 10);
//     let newOpacity = currentOpacity -= 0.01;
//     img.style.opacity = newOpacity;
//     if (currentOpacity >= 0) {
//         setTimeout(fadeImgAway, 10);
//     }
// }
// setTimeout(fadeImgAway, 1000);

function increaseWidth() {
  let styles = getComputedStyle(img);
  let currentWidth = parseFloat(styles.width);
  let newWidth = currentWidth + 5;
  img.style.width = newWidth + "px";
}
setInterval(increaseWidth, 1000);
