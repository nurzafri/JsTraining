// function fadeImgAway() {
//   let currentOpacityAsString = getComputedStyle(img).opacity;
//   let currentOpacity = parseFloat(currentOpacityAsString, 10);
//   let newOpacity = (currentOpacity -= 0.01);
//   img.style.opacity = newOpacity;
//   if (currentOpacity >= 0) {
//     setTimeout(fadeImgAway, 10);
//   }
// }
// setTimeout(fadeImgAway, 1000);

// let img = document.querySelector("img");
// let opacity = 1;
// function decreaseOpacity() {
//   console.log("Decrease Opacity");
//   let currentOpacity = parseFloat(getComputedStyle(img).opacity);
//   console.log("Current Opacity: " + currentOpacity);
//   let newOpacity = (currentOpacity -= 0.5);
//   img.style.opacity = newOpacity;
//   console.log("New Opacity: " + newOpacity);
// }
// setTimeout(decreaseOpacity, 3000);

// let img = document.querySelector("img");
// let styles = getComputedStyle(img);
// img.style.width = "300px";
// let decreseOpac = setInterval(decreaseOpacity, 100);
// function decreaseOpacity() {
//   if (img.style.width != "600px") {
//     let currentWidth = parseFloat(styles.width);
//     let newWidth = currentWidth + 5;
//     img.style.width = newWidth + "px";
//     console.log("Increase width by 5\n New Width " + img.style.width);
//   } else {
//     console.log("Reach max witdh");
//     clearInterval(decreseOpac);
//   }
// }
