// Mobile Navigation Toggle
document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Submission Handling
document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const destination = document.getElementById("destination").value;

  // Simple validation
  if (name && email && destination) {
    alert(
      `Thank you, ${name}! Your trip request to ${destination} has been received. We'll contact you at ${email} soon.`
    );
    this.reset();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Date Picker (would need a library like flatpickr for better implementation)
document.getElementById("dates").addEventListener("focus", function () {
  this.type = "date";
});
