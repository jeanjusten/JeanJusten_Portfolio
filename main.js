//#region Page Loader - Fade out when Fully Loaded
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    loader.classList.add("loader--hidden");

    document.body.removeChild(document.body.firstChild);
})

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hidden');
});
//#endregion

//#region Closes the dropdown menu after clicking.
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll(".nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // Delay for closing navbar dropdown menu
            setTimeout(function() {
                if (navbarCollapse.classList.contains("show")) {
                    new bootstrap.Collapse(navbarCollapse).toggle();
                }
            }, 1000); // 1 second
        });
    });
});
//#endregion

//#region JQuery //
$(document).ready(function(){
    // Phone number masking JQuery //
    $("#tel").mask("(00)00000-0000", {
        placeholder: "(00)00000-0000"
    })

    // See more Button JQuery //
    $(".btn-see-more").click(function(){
        if ($(".btn-see-more").text() == "See more") {
            $(".btn-see-more").text("See less");
        } else {
            $(".btn-see-more").text("See more");
        };
        $(".container-hidden").slideToggle();
    })
})
//#endregion