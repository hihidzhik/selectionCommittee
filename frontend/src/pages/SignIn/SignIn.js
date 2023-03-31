const dataObject = {

}

const emailElementInput = document.getElementById("email");
const passwordElementInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPasswordButton");
const loginElementSubmit = document.getElementById("login");

const handleChange = (event) => {
    dataObject[event.target.id] = event.target.value;
  }
  
const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataObject);
  }

emailElementInput.addEventListener("input", handleChange);
passwordElementInput.addEventListener("input", handleChange);
loginElementSubmit.addEventListener("submit", handleSubmit);

showPasswordButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    if (passwordElementInput.type === "password") {
      passwordElementInput.type = "text";
      showPasswordButton.textContent = "Скрыть пароль";
    } else {
      passwordElementInput.type = "password";
      showPasswordButton.textContent = "Показать пароль";
    }
  });
