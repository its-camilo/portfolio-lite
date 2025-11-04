// Variable global para almacenar las traducciones
let translations = {};

// Función para cargar las traducciones desde el archivo JSON
async function loadTranslations() {
    try {
        const response = await fetch('src/data/translations.json');
        translations = await response.json();
    } catch (error) {
        console.error('Error cargando traducciones:', error);
        // Fallback con traducciones básicas si falla la carga
        translations = {
            en: { pageTitle: "Projects Portfolio" },
            es: { pageTitle: "Portafolio de Proyectos" }
        };
    }
}

// Función para inicializar la aplicación
async function initializeApp() {
    await loadTranslations();
    setLanguage('en');
}

function setLanguage(language) {
    // Asegurarse de que las traducciones estén cargadas
    if (!translations || !translations[language]) {
        console.warn(`Traducciones no disponibles para el idioma: ${language}`);
        return;
    }

    const texts = translations[language];

    // Función helper para actualizar elementos de forma segura
    function updateElement(id, text) {
        const element = document.getElementById(id);
        if (element && text !== undefined) {
            element.textContent = text;
        }
    }

    // Actualiza todos los elementos de texto en la página con el idioma seleccionado
    updateElement("page-title", texts.pageTitle);
    updateElement("language", texts.language);
    updateElement("about-me", texts.aboutMe);
    updateElement("name", texts.name);
    updateElement("student", texts.student);
    updateElement("university", texts.university);
    updateElement("degree", texts.degree);
    updateElement("personal-description", texts.personalDescription);
    updateElement("technologies-title", texts.technologies);
    updateElement("projects-title", texts.projects);
    updateElement("space-shooter-pro", texts.spaceshooterpro);
    updateElement("space-shooter-pro-desc", texts.spaceshooterproDesc);
    updateElement("the-great-fleece", texts.thegreatfleece);
    updateElement("the-great-fleece-desc", texts.thegreatfleeceDesc);
    updateElement("promedios-unal", texts.promediosunal);
    updateElement("promedios-unal-desc", texts.promediosunalDesc);
    updateElement("mars-marine", texts.marsmarine);
    updateElement("mars-marine-desc", texts.marsmarineDesc);
    updateElement("dungeon-escape", texts.dungeonescape);
    updateElement("dungeon-escape-desc", texts.dungeonescapeDesc);
    updateElement("clock", texts.clock);
    updateElement("clock-desc", texts.clockDesc);
    updateElement("moodpress", texts.moodpress);
    updateElement("moodpress-desc", texts.moodpressDesc);
    updateElement("schedulegenerator", texts.schedulegenerator);
    updateElement("schedulegenerator-desc", texts.schedulegeneratorDesc);
    updateElement("ecommerce", texts.ecommerce);
    updateElement("ecommerce-desc", texts.ecommerceDesc);

    // Actualiza todos los elementos con la clase "repo"
    const repoElements = document.getElementsByClassName("repo");
    if (texts.repo) {
        for (let i = 0; i < repoElements.length; i++) {
            repoElements[i].textContent = texts.repo;
        }
    }
}

// Función para filtrar proyectos por categoría
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects-list li');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
    document.getElementById('category').textContent = category.charAt(0).toUpperCase() + category.slice(1);
}

// Configuración de los menús desplegables cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene referencias a los elementos del menú desplegable
    const dropdownButtons = document.querySelectorAll('.dropdown .language, .dropdown .category');
    const dropdownContents = document.querySelectorAll('.dropdown .dropdown-content, .dropdown .dropdown-content-category');
    const dropdownItems = document.querySelectorAll('.dropdown .dropdown-content a, .dropdown .dropdown-content-category a');

    // Agrega listeners para mostrar/ocultar menús desplegables
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    // Maneja la selección de elementos del menú
    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const dropdownContent = this.closest('.dropdown-content, .dropdown-content-category');
            dropdownContent.classList.remove('show');
            setLanguage(item.getAttribute('data-lang'));
        });
    });

    // Cierra los menús desplegables al hacer clic fuera de ellos
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown .language, .dropdown .category')) {
            dropdownContents.forEach(content => {
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                }
            });
        }
    });
});

// Configuración del carrusel de imágenes cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function () {
    const clockCarousel = document.getElementById('clock-carousel');
    if (clockCarousel) {
        // Arreglo con las URLs de las imágenes para el carrusel
        const carouselImages = [
            clockCarousel.src,
            "src/images/previews/Reloj/1.PNG",
            "src/images/previews/Reloj/2.PNG",
            "src/images/previews/Reloj/3.PNG",
            "src/images/previews/Reloj/4.PNG",
        ];

        let carouselIndex = 0;
        let carouselInterval;
        let isHovering = false;

        // Cambia la imagen actual del carrusel
        function changeImage() {
            carouselIndex = (carouselIndex + 1) % carouselImages.length;
            clockCarousel.src = carouselImages[carouselIndex];
        }

        // Inicia el carrusel al pasar el mouse sobre la imagen
        clockCarousel.addEventListener('mouseenter', function () {
            isHovering = true;
            if (!carouselInterval) {
                carouselInterval = setInterval(changeImage, 1500);
            }
        });

        // Detiene el carrusel cuando el mouse sale de la imagen
        clockCarousel.addEventListener('mouseleave', function () {
            isHovering = false;
            clearInterval(carouselInterval);
            carouselInterval = null;
        });
    }

    // Carrusel para MoodPress
    const moodpressCarousel = document.getElementById('moodpress-carousel');
    if (moodpressCarousel) {
        // Arreglo con las URLs de las imágenes para el carrusel de MoodPress
        const moodpressImages = [
            moodpressCarousel.src,
            "src/images/previews/MoodPress/1.png",
            "src/images/previews/MoodPress/2.png",
            "src/images/previews/MoodPress/3.png",
        ];

        let moodpressIndex = 0;
        let moodpressInterval;

        // Cambia la imagen actual del carrusel de MoodPress
        function changeMoodpressImage() {
            moodpressIndex = (moodpressIndex + 1) % moodpressImages.length;
            moodpressCarousel.src = moodpressImages[moodpressIndex];
        }

        // Inicia el carrusel al pasar el mouse sobre la imagen
        moodpressCarousel.addEventListener('mouseenter', function () {
            if (!moodpressInterval) {
                moodpressInterval = setInterval(changeMoodpressImage, 1500);
            }
        });

        // Detiene el carrusel cuando el mouse sale de la imagen
        moodpressCarousel.addEventListener('mouseleave', function () {
            clearInterval(moodpressInterval);
            moodpressInterval = null;
        });
    }

    // Carrusel para Schedule Generator
    const scheduleCarousel = document.getElementById('schedule-generator-carousel');
    if (scheduleCarousel) {
        const scheduleImages = [
            scheduleCarousel.src,
            "src/images/previews/Schedule Generator/1.png",
            "src/images/previews/Schedule Generator/2.png",
        ];

        let scheduleIndex = 0;
        let scheduleInterval;

        function changeScheduleImage() {
            scheduleIndex = (scheduleIndex + 1) % scheduleImages.length;
            scheduleCarousel.src = scheduleImages[scheduleIndex];
        }

        scheduleCarousel.addEventListener('mouseenter', function () {
            if (!scheduleInterval) {
                scheduleInterval = setInterval(changeScheduleImage, 1500);
            }
        });

        scheduleCarousel.addEventListener('mouseleave', function () {
            clearInterval(scheduleInterval);
            scheduleInterval = null;
        });
    }
});
