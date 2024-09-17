// Simulating user authentication
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logout');
const loginFormContainer = document.getElementById('login-form');
const homeContainer = document.getElementById('home');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can add authentication logic here
    const username = document.getElementById('username').value;
    
    if (username) {
        alert(`Welcome, ${username}! You are now logged in.`);
        
        // Show logout and hide login form
        logoutBtn.style.display = 'inline';
        loginFormContainer.style.display = 'none';
        homeContainer.style.display = 'block';
    }
});

logoutBtn.addEventListener('click', function() {
    alert('You have logged out.');
    
    // Hide logout and show login form
    logoutBtn.style.display = 'none';
    loginFormContainer.style.display = 'block';
    homeContainer.style.display = 'none';
});
