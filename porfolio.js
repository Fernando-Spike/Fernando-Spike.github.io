document.getElementById("contact-btn").addEventListener("click", function() {
    window.location.href = "mailto:fernandogarzadesign2021@gmail.com";
  });

  var carousel = new bootstrap.Carousel(document.getElementById('certifications-slideshow'));

 // Initialize the carousel
 var carousel = new bootstrap.Carousel(document.getElementById('certifications-slideshow'), {
  interval: 5000, // Change the interval to 5 seconds
  pause: "hover" // Pause the slideshow on hover
});

// Add event listeners to the carousel controls
document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(function(control) {
  control.addEventListener('click', function() {
    carousel.cycle();
  });
});
