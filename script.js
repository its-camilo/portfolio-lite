function setLanguage(language) {
    const texts = {
        en: {
            pageTitle: "Projects Portfolio",
            language: "EN",
            aboutMe: "About me",
            name: "Camilo Alejandro Lagos Malaver",
            student: "Student | Junior Game Developer",
            university: "National University of Colombia",
            degree: "Computer & Systems Engineering",
            personalDescription:"My name is Camilo. I have experience programming video game mechanics and systems, as well as developing full-stack web applications. I am proficient in using various design patterns, such as the singleton pattern and object-oriented programming.",
            technologies: "Technologies",
            projects: "Projects",
            repo:"Repo",
            spaceshooterpro: "Space Shooter Pro",
            spaceshooterproDesc: "In this exciting game, eliminate your alien rivals while moving through space and avoiding dangers. Made with Unity and C#.",
            thegreatfleece: "The Great Fleece",
            thegreatfleeceDesc: "Darren, can you go unnoticed and reach the vault? A stealth game where you must avoid security cameras and guards. Made with Unity and C#.",
            promediosunal: "Promedios Universidad Nacional",
            promediosunalDesc: "A website designed to help students calculate their grades, built with only JavaScript, CSS, and HTML.",
            marsmarine: "Mars Marine",
            marsmarineDesc: "The red planet is unforgiving, and the alien threat never stops. How long can you survive?. Made with Unreal Engine.",
            dungeonescape: "Dungeon Escape",
            dungeonescapeDesc: "Can you defeat the monsters, collect the diamonds, and escape before it's too late? The dungeon awaits!. Made with Unity and C#.",
        },
        es: {
            pageTitle: "Portafolio de Proyectos",
            language: "ES",
            aboutMe: "Sobre mí",
            name: "Camilo Alejandro Lagos Malaver",
            student: "Estudiante | Junior Game Developer",
            university: "Universidad Nacional de Colombia",
            degree: "Ingeniería de Sistemas y Computación",
            personalDescription:"Mi nombre es Camilo. Tengo experiencia en la programación de mecánicas y sistemas de videojuegos, así como en el desarrollo de aplicaciones web full-stack. Soy competente en el uso de varios patrones de diseño, como el patrón singleton y la programación orientada a objetos.",
            technologies: "Tecnologías",
            projects: "Proyectos",
            repo:"Repositorio",
            spaceshooterpro: "Space Shooter Pro",
            spaceshooterproDesc: "En este emocionante juego, elimina a tus rivales alienígenas mientras te mueves por el espacio y evitas peligros. Hecho con Unity y C#.",
            thegreatfleece: "The Great Fleece",
            thegreatfleeceDesc: "Darren, ¿puedes pasar desapercibido y llegar a la bóveda? Un juego de sigilo en el que debes evitar las cámaras de seguridad y los guardias. Hecho con Unity y C#.",
            promediosunal: "Promedios Universidad Nacional",
            promediosunalDesc: "Un sitio web diseñado para ayudar a los estudiantes a calcular sus calificaciones, construido solo con JavaScript, CSS y HTML.",
            marsmarine: "Mars Marine",
            marsmarineDesc: "El planeta rojo no perdona, y la amenaza alienígena nunca se detiene. ¿Cuánto tiempo puedes sobrevivir?. Hecho con Unreal Engine.",
            dungeonescape: "Dungeon Escape",
            dungeonescapeDesc: "¿Puedes derrotar a los monstruos, recoger los diamantes y escapar antes de que sea demasiado tarde? ¡La mazmorras te esperan!. Hecho con Unity y C#.",
        }
    };

    // Actualiza los textos en la página
    document.getElementById("page-title").textContent = texts[language].pageTitle;
    document.getElementById("language").textContent = texts[language].language;
    document.getElementById("about-me").textContent = texts[language].aboutMe;
    document.getElementById("name").textContent = texts[language].name;
    document.getElementById("student").textContent = texts[language].student;
    document.getElementById("university").textContent = texts[language].university;
    document.getElementById("degree").textContent = texts[language].degree;
    document.getElementById("personal-description").textContent = texts[language].personalDescription;
    document.getElementById("technologies-title").textContent = texts[language].technologies;
    document.getElementById("projects-title").textContent = texts[language].projects;
    document.getElementById("space-shooter-pro").textContent = texts[language].spaceshooterpro;
    document.getElementById("space-shooter-pro-desc").textContent = texts[language].spaceshooterproDesc;
    document.getElementById("the-great-fleece").textContent = texts[language].thegreatfleece;
    document.getElementById("the-great-fleece-desc").textContent = texts[language].thegreatfleeceDesc;
    document.getElementById("promedios-unal").textContent = texts[language].promediosunal;
    document.getElementById("promedios-unal-desc").textContent = texts[language].promediosunalDesc;
    document.getElementById("mars-marine").textContent = texts[language].marsmarine;
    document.getElementById("mars-marine-desc").textContent = texts[language].marsmarineDesc;
    document.getElementById("dungeon-escape").textContent = texts[language].dungeonescape;
    document.getElementById("dungeon-escape-desc").textContent = texts[language].dungeonescapeDesc;

    const repoElements = document.getElementsByClassName("repo");
    for (let i = 0; i < repoElements.length; i++) {
        repoElements[i].textContent = texts[language].repo;
    }
}

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

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('.dropdown .language, .dropdown .category');
    const dropdownContents = document.querySelectorAll('.dropdown .dropdown-content, .dropdown .dropdown-content-category');
    const dropdownItems = document.querySelectorAll('.dropdown .dropdown-content a, .dropdown .dropdown-content-category a');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const dropdownContent = this.closest('.dropdown-content, .dropdown-content-category');
            dropdownContent.classList.remove('show');
            setLanguage(item.getAttribute('data-lang')); // Assuming you have data-lang attributes for language options
        });
    });

    // Close the dropdown if clicked outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown .language, .dropdown .category')) {
            dropdownContents.forEach(content => {
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                }
            });
        }
    });
});
