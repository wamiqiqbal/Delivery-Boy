document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageText = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    
    if (!name || !email || !messageText) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';

    } else {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
        
        
    }
});
