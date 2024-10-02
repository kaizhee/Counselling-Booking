// Switch to Register form
document.getElementById('showRegisterForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'block';
    document.querySelector('.row.justify-content-center').style.display = 'none';
});

// Switch to Login form
document.getElementById('showLoginForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.row.justify-content-center').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

