// Add this script at the end of your <body> before </html>
const translations = {
    en: {}, // English is default, so no need to fill
    es: {}
};

// Load Spanish translations
fetch('es.json')
    .then(res => res.json())
    .then(data => { translations.es = data; });

function setLanguage(lang) {
    if (lang === 'en') {
        document.documentElement.lang = 'en';
        // Reset all text to original (English)
        location.reload();
        return;
    }
    if (!translations[lang] || !translations[lang].nav) return;
    document.documentElement.lang = lang;
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['about', 'retreat', 'testimonials', 'join', 'faq', 'contact'];
    navLinks.forEach((el, i) => { el.textContent = translations[lang].nav[navKeys[i]]; });
    // Main
    document.querySelector('.main-content h1').textContent = translations[lang].main.title;
    document.querySelector('.main-content h2').textContent = translations[lang].main.subtitle;
    document.querySelector('.main-content p').innerHTML = translations[lang].main.description;
    document.querySelector('.main-content .cta-button').textContent = translations[lang].main.register;
    // About
    document.querySelector('#about h2').textContent = translations[lang].about.title;
    const aboutPs = document.querySelectorAll('#about .text-column p');
    aboutPs[0].textContent = translations[lang].about.p1;
    aboutPs[1].textContent = translations[lang].about.p2;
    const features = document.querySelectorAll('#about .feature');
    features.forEach((f, i) => {
        f.querySelector('h3').textContent = translations[lang].about.features[i].title;
        f.querySelector('p').textContent = translations[lang].about.features[i].desc;
    });
    // Retreat
    document.querySelector('#retreat h2').textContent = translations[lang].retreat.title;
    document.querySelector('#retreat .section-subtitle').textContent = translations[lang].retreat.subtitle;
    const detailCards = document.querySelectorAll('#retreat .detail-card');
    detailCards[0].querySelector('h3').textContent = translations[lang].retreat.when;
    detailCards[0].querySelector('p').textContent = translations[lang].retreat.whenDesc;
    detailCards[1].querySelector('h3').textContent = translations[lang].retreat.where;
    detailCards[1].querySelector('p').innerHTML = translations[lang].retreat.whereDesc;
    detailCards[2].querySelector('h3').textContent = translations[lang].retreat.cost;
    detailCards[2].querySelector('p').textContent = translations[lang].retreat.costDesc;
    document.querySelector('#retreat .what-to-expect h3').textContent = translations[lang].retreat.expect;
    const expectList = document.querySelectorAll('#retreat .what-to-expect ul li');
    translations[lang].retreat.expectList.forEach((txt, i) => { expectList[i].textContent = txt; });
    document.querySelector('#retreat .cta-button').textContent = translations[lang].retreat.saveSpot;
    // Testimonials
    document.querySelector('#testimonials h2').textContent = translations[lang].testimonials.title;
    const testimonialPs = document.querySelectorAll('.testimonial p');
    translations[lang].testimonials.quotes.forEach((txt, i) => { testimonialPs[i].innerHTML = `<span class="quote-mark">“</span>${txt}<span class="quote-mark">”</span>`; });
    // Register
    document.querySelector('#register h2').textContent = translations[lang].register.title;
    document.querySelector('#register p').textContent = translations[lang].register.desc;
    const pricingRows = document.querySelectorAll('.pricing-table tr');
    pricingRows[0].children[0].textContent = translations[lang].register.deposit;
    pricingRows[0].children[2].textContent = translations[lang].register.depositDesc;
    pricingRows[1].children[0].textContent = translations[lang].register.full;
    pricingRows[1].children[2].textContent = translations[lang].register.fullDesc;
    document.querySelector('#register .cta-button').textContent = translations[lang].register.registerNow;
    // FAQ
    document.querySelector('#faq h2').textContent = translations[lang].faq.title;
    const faqItems = document.querySelectorAll('#faq .faq-item');
    translations[lang].faq.items.forEach((item, i) => {
        faqItems[i].querySelector('.faq-question').textContent = item.q;
        faqItems[i].querySelector('.faq-answer').textContent = item.a;
    });
    // Contact
    document.querySelector('#contact h2').textContent = translations[lang].contact.title;
    document.querySelector('#contact p').innerHTML = `${translations[lang].contact.desc} <a href="mailto:${translations[lang].contact.email}">${translations[lang].contact.email}</a>`;
    // Footer
    document.querySelector('footer p').innerHTML = translations[lang].footer.copyright;
}

// Add event listeners to flag buttons
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flag-en').addEventListener('click', function () { setLanguage('en'); });
    document.getElementById('flag-es').addEventListener('click', function () { setLanguage('es'); });
});
