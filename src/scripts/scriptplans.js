document.addEventListener("DOMContentLoaded", () => {
    // Whatsapp Number
    const whatsappNumber = "+55 (42) 99864-0821";
    // Formated Number
    const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
    // Message Plans
    const messagePlans = "Olá! Gostaria de saber mais sobre os posts para Cartórios.";
        // Message Plans
    const messagePlanStandard = "Olá! Gostaria de saber mais sobre o Plano Padrão.";
        // Message Plans
    const messagePlanAdvanced = "Olá! Gostaria de saber mais sobre o Plano Avançado";
    // Message Plans
    const messagePlanElite = "Olá! Gostaria de saber mais sobre o Plano Elite.";
    // Message Plans
    const messagePlanFull = "Olá! Gostaria de saber mais sobre o Plano Corporativo.";

    function planMessageFunction(message) {
        return `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    // Whatsapp API number Plans
    const whatsappApiPlans = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(messagePlans)}`;

    // Instagram
    const instagramUsername = "jeanjusten"
    // Instagram Link
    const instagramLink = `https://www.instagram.com/${instagramUsername}/`;
    
    // WhatsApp Link API Replace Plans Message
    [
        "contact-whatsapp-plans",
        "contact-whatsapp-form",
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

    // Instagram Replace Message
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

    // Plans Cards Replace Message
    const planStandard = document.getElementById("plan-standard");
    const planAdvanced = document.getElementById("plan-advanced");
    const planElite = document.getElementById("plan-elite");
    const planFull = document.getElementById("plan-full");

    if (planStandard) {
        const messageVar = planMessageFunction(messagePlanStandard);
        planStandard.href = messageVar;
        // Prevents empty clicks on Plans Links
        planStandard.addEventListener("click", e => {
            e.preventDefault();
            window.open(messageVar, "_blank");
        });
    }

    if (planAdvanced) {
        const messageVar = planMessageFunction(messagePlanAdvanced);
        planAdvanced.href = messageVar; 
        // Prevents empty clicks on Plans Links
        planAdvanced.addEventListener("click", e => {
            e.preventDefault();
            window.open(messageVar, "_blank");
        });
    }

    if (planElite) {
        const messageVar = planMessageFunction(messagePlanElite);
        planElite.href = messageVar;
        // Prevents empty clicks on Plans Links
        planElite.addEventListener("click", e => {
            e.preventDefault();
            window.open(messageVar, "_blank");
        });
    }

    if (planFull) {
        const messageVar = planMessageFunction(messagePlanFull);
        planFull.href = messageVar;
        // Prevents empty clicks on Plans Links
        planFull.addEventListener("click", e => {
            e.preventDefault();
            window.open(messageVar, "_blank");
        });
    }
});