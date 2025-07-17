const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMsg = document.getElementById('success-message');

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error');
  error.textContent = message;
  input.style.borderColor = 'red';
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error');
  error.textContent = '';
  input.style.borderColor = '#28a745';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
}

function validatePassword(password) {
  // At least 6 characters, one number
  const re = /^(?=.*[0-9]).{6,}$/;
  return re.test(password);
}

function validateInput() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Invalid email format');
    isValid = false;
  } else {
    showSuccess(emailInput);
  }

  if (!validatePhone(phoneInput.value)) {
    showError(phoneInput, 'Phone must be 10 digits');
    isValid = false;
  } else {
    showSuccess(phoneInput);
  }

  if (!validatePassword(passwordInput.value)) {
    showError(passwordInput, 'Password must be 6+ characters with a number');
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  return isValid;
}

[nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
  input.addEventListener('blur', () => validateInput());
  input.addEventListener('input', () => validateInput());
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (validateInput()) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
    [nameInput, emailInput, phoneInput, passwordInput].forEach(input => {
      input.style.borderColor = '#ccc';
    });
  } else {
    successMsg.textContent = '';
  }
});
