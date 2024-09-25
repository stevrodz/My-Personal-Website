const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
  submitButton.disabled = true;
  e.preventDefault();

  const targetUrl = window.location.origin + '/success.html';
    console.log(targetUrl);
    
    window.location.href = targetUrl;
})
