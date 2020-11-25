const express = require('express');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const methodOverride = require('method-override');
require('./config/database');


const indexRouter = require('./routes/index');
const plantsRouter = require('./routes/plants');
const aboutRouter = require('./routes/about');


const app = express();


app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/plants', plantsRouter);
app.use('/about', aboutRouter);


app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});
