function myExecutor(resolve, reject) {
  //   resolve("Successful");
  if (Math.random() < 0.5) {
    resolve("Successful");
  } else {
    reject("Reject Request");
  }
}

function successHandler() {
  let pTag = document.querySelector("h2");
  pTag.innerText = "Success";
  console.log("Success");
}

function rejectHandler() {
  let pTag = document.querySelector("h2");
  pTag.innerText = "Reject";
  console.log("Reject");
}

function myExecutor(resolve, reject) {
  //   resolve("Successful");
  if (Math.random() < 0.5) {
    resolve("Successful");
  } else {
    reject("Reject Request");
  }
}
let myPromise = new Promise(myExecutor);
myPromise.then(successHandler).catch(rejectHandler);
