$(document).ready(function () {
    // Enable Stellar.js for parallax effect
    $(window).stellar();
});

// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Function to count up to the specified value
    function countUp(element) {
      const target = +element.getAttribute("data-number");
      let current = 0;
      const increment = Math.ceil(target / 100); // You can adjust the increment for a smoother animation
      const duration = 1000; // Animation duration in milliseconds
  
      // Function to update the element's text content
      function update() {
        element.textContent = current;
      }
  
      // Function to perform the counting animation
      function animate() {
        const startTime = Date.now();
        const updateInterval = setInterval(function () {
          const elapsedTime = Date.now() - startTime;
          current += increment;
  
          if (current >= target) {
            current = target;
            update();
            clearInterval(updateInterval);
          } else {
            update();
          }
  
          if (elapsedTime >= duration) {
            clearInterval(updateInterval);
          }
        }, duration / 100);
      }
  
      // Using Intersection Observer to start the animation when the element is in view
      const observer = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animate();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // You can adjust the threshold as needed
      );
  
      observer.observe(element);
    }
  
    // Get all elements with the "number" class
    const numberElements = document.querySelectorAll(".number");
  
    // Call countUp for each element
    numberElements.forEach(function (element) {
      countUp(element);
    });
  });
  