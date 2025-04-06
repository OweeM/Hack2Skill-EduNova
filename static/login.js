// Tab switching functionality
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const switchToRegister = document.getElementById('switch-to-register');
const switchToLogin = document.getElementById('switch-to-login');

function showLogin() {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}

function showRegister() {
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}

loginTab.addEventListener('click', showLogin);
registerTab.addEventListener('click', showRegister);
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
});
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

// Form submission
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;
    
//     // Here you would typically send this data to your backend
//     console.log('Login attempt with:', { email, password });
    
//     // For demo purposes, we'll redirect after login
//     window.location.href = 'platform.html';
// });

// registerForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.getElementById('register-name').value;
//     const email = document.getElementById('register-email').value;
//     const phone = document.getElementById('register-phone').value;
//     const dob = document.getElementById('register-dob').value;
//     const gender = document.getElementById('register-gender').value;
//     const password = document.getElementById('register-password').value;
//     const confirmPassword = document.getElementById('register-confirm-password').value;
    
//     if (password !== confirmPassword) {
//         alert('Passwords do not match!');
//         return;
//     }
    
//     // Here you would typically send this data to your backend
//     console.log('Registration data:', { name, email, phone, dob, gender, password });
    
//     // For demo purposes, we'll redirect after registration
//     window.location.href = 'platform.html';
// });

// Language selector functionality
document.getElementById('language').addEventListener('change', function() {
    // In a real app, you would implement language switching here
    console.log('Language changed to:', this.value);
});