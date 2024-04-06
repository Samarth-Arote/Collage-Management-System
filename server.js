const express = require('express');
const router = express.Router();
const db = require('./config/database');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const contactRouter = require('./router/contact');

const port = 4000;
let diplomaRouter=require('./router/diploma');
let pagerouter=require('./router/index2');
const { table } = require('console');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});
///////////student-form/////////////////
const students = []; 

app.get('/student-form', (req, res) => {
  res.render('student-form');
});

app.post('/student-details', (req, res) => {
  const { name, age, grade } = req.body;
  const student = { name, age, grade };

  db.query('INSERT INTO students SET ?', student, (err, results) => {
    if (err) throw err;
    console.log('Student details inserted successfully');

    res.redirect('/student-details');
  });
});

app.get('/student-details', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.render('student-details', { students: results });
  });
});
/////////////course-details//////////////
const courses = [
  { title: 'Information Technology', description: '76' },
  { title: 'Computer', description: '72' },
  { title: 'Mechanical', description: '80' }
];

app.get('/course-form', (req, res) => {
  res.render('course-form', { courses });
});

app.post('/course-details', (req, res) => {
  const { title, description } = req.body;
  const course = { title, description };
  res.render('course-details', { course });
});

//////////////DIPLOMA//////////////////
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'diploma.handlebars'));
});
let diplomas = [];


app.get('/diploma', (req, res) => {
  res.render('diploma', { diplomas });
});
app.post('/diploma/add', (req, res) => {
  const { course, fees, result, name, address } = req.body;
  const diploma = { course, fees, result, name, address };

  db.query('INSERT INTO diplomas SET ?', diploma, (err, results) => {
    if (err) throw err;
    console.log('Diploma details inserted successfully');

    diplomas.push(diploma);
  res.redirect('/diploma');
  });
});

app.get('/diploma', (req, res) => {
  db.query('SELECT * FROM diplomas', (err, results) => {
    if (err) throw err;
    res.render('diploma', { diplomas: results });
  });
});
//////////////////contact form///////////////////////

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'contact.handlebars'));
});
let contacts=[];

app.get('/contact', (req, res) => {
  res.render('contact', { contacts });
});

app.post('/contact/add', (req, res) => {
  const { name, email, message } = req.body;
  const contact = { name, email, message };
  contacts.push(contact);
  res.redirect('/contact');
});

app.get('/contact/all', (req, res) => {
  res.json(contacts);
});

app.get('/submit', (req, res) => {
  const contact = [
    { msg: 'youe response was submited!!' }
  ];
  res.render('contact', { contacts });
});

app.post('/contact', (req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  };

  db.query('INSERT INTO contacts SET ?', formData, (err, results) => {
    if (err) throw err;
    console.log('Form data inserted successfully');

    res.redirect('/contact');
  });
});

app.get('/contact', (req, res) => {
  connection.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.render('contact/all', { contacts: results });
  });
});

/////////////////post-graduate-form////////////////////
const postGraduates = [];

app.get('/post-graduate-form', (req, res) => {
  res.render('post-graduate-form', { postGraduates });
});

app.post('/post-graduate-details', (req, res) => {
  const { name, degree, university, year } = req.body;
  const postGraduate = { name, degree, university, year };

  db.query('INSERT INTO post_graduates SET ?', postGraduate, (err, results) => {
    if (err) throw err;
    console.log('Post-graduate details inserted successfully');

    postGraduates.push(postGraduate);
    res.redirect('/post-graduate-form');
  });
});

app.get('/post-graduate-details', (req, res) => {
  db.query('SELECT * FROM post_graduates', (err, results) => {
    if (err) throw err;
    res.render('post-graduate-details', { postGraduates: results });
  });
});
//////////////////Login page/////////////////////

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.redirect('/');
    } 
    else {
      res.render('login', { err:'Wrong Info. Try Again!' });
      console.log('Invalid Username And Password. Please Try Again!');      
    }
  });
});

///////////////////register-form////////////////////

app.get('/register', (req, res) => {
  res.render('register-form');
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const registerData = { username, email, password };

  db.query('INSERT INTO users SET ?', registerData, (err, results) => {
    if (err) throw err;
    console.log('Register form data inserted successfully');

    res.redirect('/login');
  });
});
///////////////////////////////////

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
