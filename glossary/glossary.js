let glossaryData = glossary.forEach((element) => {
  return element;
});

console.log(glossaryData);

function GetGlossaryList() {
  let tableTag = document.querySelector("table");
  let table =
    '<table id="myInput"><tr><th>Term</th><th>Class</th><th>Definition</th><th>Tag</th></tr>';
  for (let i = 0; i < glossary.length; i++) {
    table += "<tr>";
    table += `<td>${glossary[i].term}</td>`;
    table += `<td>${glossary[i].class}</td>`;
    table += `<td>${glossary[i].definition}</td>`;
    table += `<td>${glossary[i].tags}</td>`;
    table += "</tr>";
  }
  table += "</table>";
  tableTag.innerHTML = table;
}
GetGlossaryList();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  //   tableTag = document.querySelector("table");
  //   table =
  //     '<table id="myInput"><tr><th>Term</th><th>Class</th><th>Definition</th><th>Tag</th></tr>';
  //   glossary.filter((g) => {
  //     if (g.term.includes(input)) {
  //       table += "<tr>";
  //       table += `<td>${g.term}</td>`;
  //       table += `<td>${g.class}</td>`;
  //       table += `<td>${g.definition}</td>`;
  //       table += `<td>${g.tags}</td>`;
  //       table += "</tr>";
  //     }
  //   });
  //   table += "</table>";
  //   tableTag.innerHTML = table;
}
