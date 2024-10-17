document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.third-section');
    const slides = document.querySelectorAll('.third-section .slide');
    const manualButtons = document.querySelectorAll('.third-section .manual-btn');

    // Array con los degradados específicos para cada imagen
    const gradients = [
        "linear-gradient(45deg, rgba(35,0,36,1) 0%, rgba(9,121,97,1) 35%, rgba(255,0,211,1) 100%)", // Degradado para slide 1
        "radial-gradient(circle, rgba(174,238,218,1) 0%, rgba(43,64,44,1) 100%)", // Degradado para slide 2
        "linear-gradient(90deg, rgba(116,235,213,1) 0%, rgba(172,182,229,1) 100%)", // Degradado para slide 3
        "linear-gradient(100deg, rgba(0,79,73,1) 0%, rgba(253,29,29,1) 50%, rgba(0,0,0,1) 100%)", // Degradado para slide 4
        "linear-gradient(45deg, rgba(35,0,36,1) 0%, rgba(147,77,71,1) 35%, rgba(147,137,83,1) 100%)" // Degradado para slide 5
    ];

    let currentSlide = 0;

    // Función para mostrar un slide específico y cambiar el fondo
    function showSlide(index) {
        // Quitar la clase 'active' de todas las diapositivas y botones
        slides.forEach(slide => slide.classList.remove('active'));
        manualButtons.forEach(btn => btn.classList.remove('active'));

        // Añadir 'active' al slide y botón actuales
        slides[index].classList.add('active');
        manualButtons[index].classList.add('active');

        // Cambiar el fondo de la sección al degradado correspondiente
        slider.style.background = gradients[index];
    }

    // Navegación manual mediante los botones
    manualButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showSlide(index);
            currentSlide = index;
        });
    });

    // Navegación automática (opcional)
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Cambia de slide automáticamente cada 5 segundos (opcional)
    setInterval(autoSlide, 5000);

    // Inicializa la primera diapositiva y degradado
    showSlide(currentSlide);
});

//tipo carta 
const characterCards = document.querySelectorAll('.character-card');

characterCards.forEach(card => {
    const loreBox = card.querySelector('.lore-box');
    const characterImage = card.querySelector('.character-image');
    const hoverText = card.querySelector('.hover-text');
    
    // Obtener el texto del atributo 'data-hover-text'
    const hoverMessage = characterImage.getAttribute('data-hover-text');
    hoverText.textContent = hoverMessage;

    const loreText = characterImage.getAttribute('data-lore');

    characterImage.addEventListener('mouseenter', () => {
        loreBox.textContent = loreText;
    });

    characterImage.addEventListener('mouseleave', () => {
        loreBox.textContent = '';
    });
});

// Seleccionamos el contenedor donde irá el puño
const fistContainer = document.getElementById('fist-container');

// Creamos el SVG del puño dinámicamente con JS
const fistSVG = `
    <svg id="fist" width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4138 0L26.1819 32H20.5188C18.051 26.9407 15.8899 25.1279 12.8708 25.1279C9.85171 25.1279 7.69217 26.9407 5.2456 32H0.00012207L11.7698 0H14.4138ZM17.521 24.3479L12.9149 11.468L8.22067 24.3479C9.9398 23.7364 11.5481 23.4836 12.9149 23.4836C14.2604 23.4836 15.8246 23.7364 17.521 24.3479Z"
              fill="white"></path>
    </svg>
`;

// Insertamos el puño dentro del contenedor
fistContainer.innerHTML = fistSVG;

// Agregamos un evento hover para cambiar el color del puño
const riotGamesBlock = document.querySelector('.riot-games');
const fistElement = document.getElementById('fist');

riotGamesBlock.addEventListener('mouseenter', () => {
    fistElement.setAttribute('fill', 'red');
});

riotGamesBlock.addEventListener('mouseleave', () => {
    fistElement.setAttribute('fill', 'white');
});

