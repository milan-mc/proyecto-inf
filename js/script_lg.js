const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Verificación básica del usuario y la contraseña
  if (username === 'usuario' && password === 'contraseña') {
    loginMessage.innerHTML = '¡Inicio de sesión exitoso!';
    loginMessage.style.color = 'green';
  } else {
    loginMessage.innerHTML = 'Credenciales inválidas. Inténtalo de nuevo.';
    loginMessage.style.color = 'red';
  }
});