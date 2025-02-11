document.getElementById("contact-btn").addEventListener("click", function() {
    window.location.href = "mailto:fernandogarzadesign2021@gmail.com";
  });

  var carousel = new bootstrap.Carousel(document.getElementById('certifications-slideshow'));

 // Initialize the carousel
 var carousel = new bootstrap.Carousel(document.getElementById('certifications-slideshow'), {
  interval: 2000, // Change the interval to 5 seconds
  pause: "hover" // Pause the slideshow on hover
});

// Add event listeners to the carousel controls
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(function(control) {
  control.addEventListener('click', function() {
    carousel.cycle();
  });
});

const toggleSwitch = document.getElementById('darkModeToggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Set initial theme based on system preference
if (prefersDarkScheme.matches) {
  document.body.classList.add('bg-gray-900', 'text-white');
  document.body.classList.remove('bg-white', 'text-black');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('bg-gray-900', 'text-white');
    document.body.classList.remove('bg-white', 'text-black');
  } else {
    document.body.classList.add('bg-white', 'text-black');
    document.body.classList.remove('bg-gray-900', 'text-white');
  }
});