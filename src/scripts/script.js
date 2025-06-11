document.addEventListener("DOMContentLoaded", () => {
    // Whatsapp Number
    const whatsappNumber = "+55 (42) 99864-0821";
    // Formated Number
    const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
    // Message
    const message = "Olá! Gostaria de saber mais sobre criação de conteúdo web.";
    // Whatsapp API number
    const whatsappApi = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(message)}`;
    // Instagram
    const instagramUsername = "jeanjusten"
    // Instagram Link
    const instagramLink = `https://www.instagram.com/${instagramUsername}/`;
    

    // WhatsApp Link API Replace Default Message
    [
        "contact-whatsapp-hero",
        "contact-whatsapp-svg",
        "contact-whatsapp-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = whatsappApi;
            // Prevents empty clicks on Whatsapp Links
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(whatsappApi, "_blank");
            });
        }
    });

    // Instagram Replace
    [
        "contact-instagram-svg",
        "contact-instagram-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = instagramLink;
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(instagramLink, "_blank");
            });
        }
    });
});