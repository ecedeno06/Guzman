

const form = document.getElementById('loginForm') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const mensaje = document.getElementById('mensaje') as HTMLParagraphElement;

console.log('Ya funciona');

//mensaje.textContent = 'Login correcto ✅';

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === '' || password === '') {
        mensaje.textContent = 'Todos los campos son obligatorios';
        return;
    }

    mensaje.textContent = 'Login correcto ✅';

});
