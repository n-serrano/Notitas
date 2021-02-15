const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const notasRouter = require('./routes/notasRouter');
 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));
//css
app.use(express.static(path.join(__dirname, '../public')));
//rutas
app.use('/', notasRouter);
//Motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//serviodr
app.listen(3000, function () {
    console.log(`Mandale que so' vo' 😎`)
    console.log('http://localhost:3000/')
}) 