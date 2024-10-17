// Efecto del spray que sigue el cursor
const sprayCursor = document.querySelector('.spray-cursor');
document.addEventListener('mousemove', (e) => {
    sprayCursor.style.left = `${e.pageX - 10}px`;
    sprayCursor.style.top = `${e.pageY - 10}px`;
});

// Mostrar el formulario de inicio de sesión o de crear cuenta según el botón seleccionado
const loginButton = document.getElementById('loginButton');
const createButton = document.getElementById('createButton');
const loginForm = document.getElementById('loginForm');
const createForm = document.getElementById('createForm');

loginButton.addEventListener('click', () => {
    document.body.classList.remove('crear-cuenta');
    document.body.classList.add('iniciar-sesion');
    loginForm.classList.remove('hidden');
    createForm.classList.add('hidden');
});

createButton.addEventListener('click', () => {
    document.body.classList.remove('iniciar-sesion');
    document.body.classList.add('crear-cuenta');
    createForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

// Validación del formulario de inicio de sesión
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Es necesario que llenes toda la información');
        return;
    }

    alert('Inicio de sesión exitoso');
    window.location.href = 'file:///C:/Users/ESTUDIANTE/Desktop/arcan/html/inicio.html';  // Cambia la URL
});

// Validación del formulario de creación de cuenta
createForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    // Validación de campos
    if (!newUsername || !newPassword || !confirmPassword || !email) {
        alert('Es necesario que llenes toda la información');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (!email.endsWith('@gmail.com')) {
        alert('El correo debe terminar en @gmail.com');
        return;
    }

    alert('Cuenta creada exitosamente');
    window.location.href = 'file:///C:/Users/ESTUDIANTE/Desktop/arcan/html/inicio.html';  // Cambia la URL
});