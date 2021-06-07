const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'));

//home,search,contact,v.v..

//routes init
route(app);

// app.post('/search', (req, res) => {
//   console.log(req.body);
//   res.send('');
// });
//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
