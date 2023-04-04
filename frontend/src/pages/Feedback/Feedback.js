// const urlParams = new URLSearchParams(window.location.search);
// if (urlParams.has('formSubmitted')) {
//   const successMessage = document.querySelector('.success-message');
//   if (successMessage) {
//     successMessage.style.display = 'block';
//   }
// }

const dataObject = {}

const emailElementInput = document.getElementById("email");
const nameElementInput = document.getElementById("name");
const messageElementInput = document.getElementById("message");
const feedbackElementSubmit = document.getElementById("submit");

const handleChange = (event) => {
    dataObject[event.target.id] = event.target.value;
}
  
const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataObject);
  
    await fetch('http://localhost:3000/auth/feedback', {
      method: 'POST',
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

emailElementInput.addEventListener("input", handleChange);
nameElementInput.addEventListener("input", handleChange);
messageElementInput.addEventListener("input", handleChange);
feedbackElementSubmit.addEventListener("click", handleSubmit);
