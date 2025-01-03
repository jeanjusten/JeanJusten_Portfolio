// Scroll animation
const observer = new IntersectionObserver((entries) => { // Handles the visibility of elements in screen
    entries.forEach((entry) => {
        if (entry.isIntersecting) { // If element is visible in the viewport
            entry.target.classList.add("show");
        } 
        // else { // Remove this section if i want the page to only load once after scrolling
          //  entry.target.classList.remove("show");
        //}
    })
})

const hiddenElements = document.querySelectorAll(".hidden-element");
hiddenElements.forEach((el) => observer.observe(el)); // Observe all elements