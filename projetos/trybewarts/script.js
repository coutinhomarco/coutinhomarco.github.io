window.onload = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const loginButton = document.getElementById('login');
  function checkLogin(evento) {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      return window.alert('Olá, Tryber!');
    }
    evento.preventDefault();
    return window.alert('Email ou senha inválidos.');
  }
  loginButton.addEventListener('click', checkLogin);
};
function checaBox() {
  const checar = document.querySelector('#agreement').checked;
  if (checar === true) {
    document.querySelector('#submit-btn').disabled = '';
  } else {
    document.querySelector('#submit-btn').disabled = 'true';
  }
}
document.querySelector('#agreement').addEventListener('click', checaBox);
