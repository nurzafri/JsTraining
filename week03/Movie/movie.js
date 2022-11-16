function getData() {
  let input = document.getElementById("myInput");
  let inputVal = input.value;
  let apiKey = "1442286b";
  let query = inputVal;
  let urlEncodedQuery = encodeURI(query);
  let url = `http://www.omdbapi.com/?t=${urlEncodedQuery}&apikey=${apiKey}`;
  console.log(url);

  let data = fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let arrData = [];
      arrData.push(data);
      console.log(arrData);
      let table = document.querySelector("#data-output");
      let out = "";
      for (let d of arrData) {
        out += `
          <tr>
             <td>${d.Title}</td>
             <td>${d.Year}</td>
             <td>${d.Released}</td>
             <td>${d.Actors}</td>
             <td>${d.Awards}</td>
             <td>${d.BoxOffice}</td>
             <td>${d.Genre}</td>
             <td>${d.Runtime}</td>
          </tr>
       `;
      }

      table.innerHTML = out;
    })
    .catch(rejectHandler);
}

function rejectHandler() {
  let pTag = document.querySelector("h2");
  pTag.innerText = "Error";
  //   console.log("Reject");
}
