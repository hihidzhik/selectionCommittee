// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const multer = require('multer');

// const app = express();
// const port = 3000;


const dataObject = {

}

 const specialtyElementSelect = document.getElementById('specialty');
 const nameElementInput = document.getElementById("name");
 const surnameElementInput = document.getElementById("surname");
 const patronymicElementInput = document.getElementById("patronymic");
 const emailElementInput = document.getElementById("email");
 const passwordElementInput = document.getElementById("password");
 const examsElementInput = document.getElementById("exams");
 const registerElementSubmit = document.getElementById("register");
 const showPasswordButton = document.getElementById("showPasswordButton");

const handleSpecialtyChange = (event) => {
  dataObject[event.target.id] = specialtyElementSelect.options[specialtyElementSelect.selectedIndex].text;
}


const handleChange = (event) => {
  dataObject[event.target.id] = event.target.value;
}

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log(dataObject);

  await fetch('http://localhost:3000/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

nameElementInput.addEventListener("input", handleChange);
surnameElementInput.addEventListener("input", handleChange);
patronymicElementInput.addEventListener("input", handleChange);
emailElementInput.addEventListener("input", handleChange);
specialtyElementSelect.addEventListener("change", handleSpecialtyChange);
passwordElementInput.addEventListener("input", handleChange);
examsElementInput.addEventListener("input", handleChange);
registerElementSubmit.addEventListener("submit", handleSubmit);


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


// const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the database.');
// });


// const upload = multer({ dest: 'uploads/' });


// app.post('/register', upload.single('exams'), (req, res) => {
//   const { name, surname, patronymic, specialty, email, password } = req.body;
//   const exams = req.file.filename;


//   db.run(
//     `INSERT INTO students(name, surname, patronymic, specialty, email, password, exams, status) 
//      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//     [name, surname, patronymic, specialty, email, password, exams, 'pending'],
//     (err) => {
//       if (err) {
//         console.error(err.message);
//         res.status(500).send('Internal server error');
//       } else {
//         res.status(200).send('Registration successful');
//       }
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });
