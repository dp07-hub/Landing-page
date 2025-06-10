// Scroll to features section
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#features").scrollIntoView({
    behavior: "smooth"
  });
});

// Handle contact form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you for contacting us, ${name}!`);
  this.reset();
});
