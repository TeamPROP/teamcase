// Get all dropdown buttons
const dropdowns = document.querySelectorAll(".dropdown");

// Loop through each dropdown button
dropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".dropbtn");
  const content = dropdown.querySelector(".dropdown-content");

  // Add click event listener to each button
  button.addEventListener("click", function () {
    // Toggle display of the dropdown content
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Close dropdown if clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    dropdowns.forEach((dropdown) => {
      const content = dropdown.querySelector(".dropdown-content");
      if (content.style.display === "block") {
        content.style.display = "none";
      }
    });
  }
};

// Javascript for category page

const url = "https://vutyazyqgdnzvjqyebuo.supabase.co/rest/v1/TSL?select=category";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1dHlhenlxZ2RuenZqcXllYnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMjUwNzIsImV4cCI6MjA0MTcwMTA3Mn0.pAvWKCspPRTv9gk0lUIgk_vkYL_pPLV-wofqAW8NmUU";
const options = {
  headers: {
    apikey: key,
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  const uniqueCategories = new Set(); // To track unique categories

  cats.forEach((cat) => {
    if (!uniqueCategories.has(cat.category)) {
      uniqueCategories.add(cat.category); // Add to set
      showCategory(cat); // Display only if not already in set
    }
  });
}

function showCategory(cat) {
  // Grab Template
  const template = document.querySelector("template").content;
  // Clone
  const clone = template.cloneNode(true);
  // Change content
  clone.querySelector("a").textContent = cat.category;
  // Append
  document.querySelector(".dropdown-content a").appendChild(clone);
}
