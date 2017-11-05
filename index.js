const express = require('express')
const bodyParser = require('body-parser')
const database = require('./db')
const path = require('path')
const route = require('./routes')
const port = 8888

let app = express()
let db = database.connect('mongodb://localhost/test')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');

route.use(app);

app.listen(port, 'localhost', function(err){
    console.log('Successful');
});