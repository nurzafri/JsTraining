let btn = document.querySelector("button");
let para = document.querySelector("p");
let count = 0;
let btnIncrement = document.querySelector(".increment");
let btnDecrement = document.querySelector(".decrement");
function increment() {
  //   let currentbackground = document.body.style.backgroundColor;
  //   console.log("The button was clicked");
  //   console.log(currentbackground);
  //   if (
  //     document.body.style.backgroundColor == "white" ||
  //     document.body.style.backgroundColor == "" ||
  //     document.body.style.backgroundColor == "lime"
  //   )
  //     document.body.style.backgroundColor = "red";
  //   else if (document.body.style.backgroundColor == "red")
  //     document.body.style.backgroundColor = "lime";
  count++;
  console.log(count);
  para.innerText = "Number of clicks" + count;
}

function increment() {
  count++;
  console.log(count);
  para.innerText = "Number of clicks: " + count;
}
btnIncrement.addEventListener("click", increment);

function decrement() {
  if (count > 0) count--;
  console.log(count);
  para.innerText = "Number of clicks: " + count;
}
btnDecrement.addEventListener("click", decrement);
