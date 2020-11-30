const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/plants',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

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
