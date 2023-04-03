const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('formSubmitted')) {
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.style.display = 'block';
  }
}
