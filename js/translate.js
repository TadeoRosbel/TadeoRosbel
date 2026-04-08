/* Carlos Alfredo Niño Martínez , 4D, 24898 */

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".language-menu a");
    
    const applyTranslation = (lang) => {
        const elements = document.querySelectorAll("[data-key]");
        
        elements.forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        localStorage.setItem("selectedLang", lang);
        // Cambia el atributo lang del HTML para accesibilidad
        document.documentElement.lang = lang;
    };

    langButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedLang = btn.getAttribute("data-lang");
            applyTranslation(selectedLang);
            
            // Cerrar el menú después de seleccionar (opcional para UX)
            btn.closest('.dropdown').classList.remove('active');
        });
    });

    const initialLang = localStorage.getItem("selectedLang") || "es";
    applyTranslation(initialLang);
});