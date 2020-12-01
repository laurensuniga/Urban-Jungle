const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;
require('dotenv').config();

const methodOverride = require('method-override');

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const plantsRouter = require('./routes/plants');
const aboutRouter = require('./routes/about');


const app = express();


app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(function(req, res, next) {
    console.log(req.session);
    next();
});

app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/plants', plantsRouter);
app.use('/about', aboutRouter);

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});
