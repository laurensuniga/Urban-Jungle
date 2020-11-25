const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index')
});

router.get('/new', function(req, res, next) {
    res.render('/new')
});

router.get('/edit', function(req, res,next) {
    res.render('/edit')
});


module.exports = router;
