const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');

const app = express();
const port = 3000;


const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


const upload = multer({ dest: 'uploads/' });


app.post('/register', upload.single('exams'), (req, res) => {
  const { name, surname, patronymic, specialty, email, password } = req.body;
  const exams = req.file.filename;


  db.run(
    `INSERT INTO students(name, surname, patronymic, specialty, email, password, exams, status) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, surname, patronymic, specialty, email, password, exams, 'pending'],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).send('Registration successful');
      }
    }
  );
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
