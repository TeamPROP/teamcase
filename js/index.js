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
