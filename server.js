const express = require('express');
const mongo = require('./models/db');
const employeController = require('./controllers/employeeController');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars')
const bodyparser = require('body-parser');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express();


app.use(bodyparser.urlencoded({
    extended: true
}));


app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({
    extname: 'hbs', defaultLayout: 'mainLayout', handlebars: allowInsecurePrototypeAccess(handlebars), layoutsDir: __dirname + '/views/layouts/',
}));
app.set('view engine', 'hbs');


app.listen(3000, () => {
    console.log('Server Started on ' + 3000)
});


app.use('/employee', employeController);