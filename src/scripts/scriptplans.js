document.addEventListener("DOMContentLoaded", () => {
    // Whatsapp Number
    const whatsappNumber = "+55 (42) 99864-0821";
    // Formated Number
    const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
    // Message Plans
    const messagePlans = "Olá! Gostaria de saber mais sobre os posts para Cartórios.";
    // Whatsapp API number Plans
    const whatsappApiPlans = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(messagePlans)}`;
    // Instagram
    const instagramUsername = "jeanjusten"
    // Instagram Link
    const instagramLink = `https://www.instagram.com/${instagramUsername}/`;
    
    // WhatsApp Link API Replace Plans Message
    [
        "contact-whatsapp-plans",
        "contact-whatsapp-plans-cta",
        "contact-whatsapp-plans-svg"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = whatsappApiPlans;
            // Prevents empty clicks on Whatsapp Links
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(whatsappApiPlans, "_blank");
            });
        }
    });

    // Instagram Replace
    [
        "contact-instagram-plans-svg",
        "contact-instagram-plans-footer"
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