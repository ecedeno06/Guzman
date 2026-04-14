const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mensaje = document.getElementById('mensaje');
console.log('Ya funciona');
//mensaje.textContent = 'Login correcto ✅';
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    if (email === '' || password === '') {
        mensaje.textContent = 'Todos los campos son obligatorios';
        return;
    }
    mensaje.textContent = 'Login correcto ✅';
});
export {};
//# sourceMappingURL=app.js.map