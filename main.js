document.addEventListener("DOMContentLoaded", function () {
  // Get the form element by its ID
  const form = document.getElementById("myForm");

  // Add a submit event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const like = document.getElementById("like").checked;

    // Display the form field values in an alert
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nLike: ${like} `;
    alert(body);
  });

  // Get the scroll-to-top button element
  const scrollToTopButton = document.getElementById("scrollToTop");
  // Function to scroll to the top of the page smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling
    });
  }

  // Add a click event listener to the scroll-to-top button
  scrollToTopButton.addEventListener("click", scrollToTop);

  // Show the scroll-to-top button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });


  // Get all the list items with the class "nav-item"
  const navItems = document.querySelectorAll('.nav-item');

  // Add a click event listener to each list item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove the "active" class from all list items
      navItems.forEach(navItem => {
        navItem.classList.remove('active');
      });

      // Add the "active" class to the clicked list item
      item.classList.add('active');
    });
  });

  // Get references to the hamburger and nav elements
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  // Add a click event listener to the hamburger icon
  hamburger.addEventListener("click", () => {
    // Toggle the visibility of the nav element
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });

  window.addEventListener('resize', () => {
    console.log("rr", window.innerWidth)
    if (window.innerWidth > 768) {
      nav.style.display = "block"
    }
  })

});

