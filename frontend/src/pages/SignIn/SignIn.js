const dataObject = {

}

const emailElementInput = document.getElementById("email");
const passwordElementInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPasswordButton");
const loginElementSubmit = document.getElementById("login");

const handleChange = (event) => {
  dataObject[event.target.id] = event.target.value;
}


const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify(dataObject),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });

    if (response.status === 401) {
      throw new Error('Unauthorized');
    }

    window.location.href = '/src/pages/Home/Home.html';
  } catch (err) {
    console.error(err)
  }
  
    
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
