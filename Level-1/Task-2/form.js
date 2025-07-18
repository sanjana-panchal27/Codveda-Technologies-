const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('number');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const strengthMsg = document.getElementById('strength-message');

function showError(input, message = 'This field is required') {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error');
  error.textContent = message;
  input.classList.add('invalid');
  input.classList.remove('valid');
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector('.error');
  error.textContent = '';
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

function validatePassword(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(password);
}

function checkPasswordStrength(password) {
  let strength = '';
  if (password.length < 6) {
    strength = 'Weak';
    strengthMsg.textContent = strength;
    strengthMsg.className = 'strength-message weak';
  } else if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password) &&
    password.length >= 8
  ) {
    strength = 'Strong';
    strengthMsg.textContent = strength;
    strengthMsg.className = 'strength-message strong';
  } else {
    strength = 'Medium';
    strengthMsg.textContent = strength;
    strengthMsg.className = 'strength-message medium';
  }
}

function validateInput() {
  let isValid = true;

  if (nameInput.value.trim() === '' || !isNaN(nameInput.value)) {
    showError(nameInput, 'Please enter a valid name');
    isValid = false;
  } else {
    showSuccess(nameInput);
  }

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, 'Invalid email address');
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
    showError(
      passwordInput,
      'Password must be 6+ chars, include number & symbol'
    );
    isValid = false;
  } else {
    showSuccess(passwordInput);
  }

  if (
    confirmPasswordInput.value !== passwordInput.value ||
    confirmPasswordInput.value === ''
  ) {
    showError(confirmPasswordInput, 'Passwords do not match');
    isValid = false;
  } else {
    showSuccess(confirmPasswordInput);
  }

  return isValid;
}

// Input event handlers
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() !== '' && isNaN(nameInput.value)) {
    showSuccess(nameInput);
  } else {
    showError(nameInput, 'Please enter a valid name');
  }
});

emailInput.addEventListener('input', () => {
  if (validateEmail(emailInput.value)) {
    showSuccess(emailInput);
  } else {
    showError(emailInput, 'Invalid email address');
  }
});

phoneInput.addEventListener('input', () => {
  if (validatePhone(phoneInput.value)) {
    showSuccess(phoneInput);
  } else {
    showError(phoneInput, 'Phone must be 10 digits');
  }
});

passwordInput.addEventListener('input', () => {
  checkPasswordStrength(passwordInput.value);
  if (validatePassword(passwordInput.value)) {
    showSuccess(passwordInput);
  } else {
    showError(
      passwordInput,
      'Password must be 6+ chars, include number & symbol'
    );
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (
    confirmPasswordInput.value === passwordInput.value &&
    confirmPasswordInput.value !== ''
  ) {
    showSuccess(confirmPasswordInput);
  } else {
    showError(confirmPasswordInput, 'Passwords do not match');
  }
});

passwordInput.addEventListener('input', () => {
  checkPasswordStrength(passwordInput.value);
});

// ✅ Submit handler (only one)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const valid = validateInput();

  if (valid) {
    Swal.fire({
      icon: 'success',
      title: 'Form submitted successfully!',
      showConfirmButton: false,
      timer: 2000,
    });

    form.reset();
    strengthMsg.textContent = '';
    [
      nameInput,
      emailInput,
      phoneInput,
      passwordInput,
      confirmPasswordInput,
    ].forEach((input) => input.classList.remove('valid', 'invalid'));
  }
});
