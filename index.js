let currentPage = 1;

function fetchData(page) {
  fetch(
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const startIndex = (page - 1) * 10;
      const endIndex = startIndex + 10;
      const currentPageData = data.slice(startIndex, endIndex);
      let output = `<h2>Page ${page}:</h2>`;
      output += "<ul>";
      currentPageData.forEach((entry) => {
        output += `<li>ID: ${entry.id}, Name: ${entry.name}, Email: ${entry.email}</li>`;
      });
      output += "</ul>";
      document.getElementById("dataContainer").innerHTML = output;
      document.getElementById("dataContainer").style.display = "block";
    })
    .catch((error) => console.error("Error fetching data:", error));
}

for (let i = 1; i <= 10; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", function () {
    currentPage = i;
    fetchData(currentPage);
  });
}

document.getElementById("firstPage").addEventListener("click", function () {
  currentPage = 1;
  fetchData(currentPage);
});

document.getElementById("prevPage").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    fetchData(currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", function () {
  currentPage++;
  fetchData(currentPage);
});

fetchData(currentPage);
