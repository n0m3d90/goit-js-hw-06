'use strict'


const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  if (email.value === '' || password.value === '') {
    alert('Toate câmpurile trebuie completate!');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  loginForm.reset();
});
