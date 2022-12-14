const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const { Console } = require('console');
const route = require('./routes');
const app = express();

const port = 3000;


// stactic files
app.use(express.static(path.join(__dirname, 'public')))

// templates engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

route(app);
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

// Action --> Dispatcher --> Function handler
app.get('/', (req, res) => {
    res.render('home');
})

// req: require, res: response
// app.get('/news', (req, res) => {
//     res.render('news');
// })
app.get('/search', (req, res) => {
    res.render('search');
})

app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
})


// 127.0.0.1
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})