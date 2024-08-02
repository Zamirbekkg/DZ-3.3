
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const correctPassword = '12345'; 

    if (passwordInput.value === correctPassword) {
       
        window.location.href = 'protected.html';
    } else {
      
        errorMessage.classList.remove('hidden');
    }
});
