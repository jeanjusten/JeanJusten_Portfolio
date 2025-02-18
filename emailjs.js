//----------------------//
// CUSTOM ALERT BOX //
const alertBox = document.getElementById("customAlertBox");
const alertMessageContainer = document.getElementById("alertMessage");
const closeImg = document.querySelector(".close");
const modalImg = document.getElementById("brand-logo-popup");
const form = document.getElementById("contact-form");

//----------------------//
// Send E-mail via EmailJS //
window.onload = function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm("default_service", "fullstack_contact_form", this).then((response) => {
                console.log("Message was sent successfully!");

                modalImg.style.display = "block";
                alertMessageContainer.innerHTML ="Your message was sent. Thank you for contacting me.";
                alertBox.style.display = "block";
                form.reset();

            }, (error) => {
                console.log("Error trying to send message. Please Try Again", error);
                alertMessageContainer.innerHTML ="Error. Please try again.";
                alertBox.style.display = "block";
            });
    });

    closeImg.addEventListener('click', function () {
        alertBox.style.display = "none";
    });
}