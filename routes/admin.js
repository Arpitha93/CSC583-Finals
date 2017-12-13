var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//Our visitor & data data model
var Admin = require('../models/admin');
var Visitor = require('../models/visitor');

// Admin Login or Register view
router.get('/login', function(req, res){
	console.log("I am comming here at get admin login")
  res.render('login');
});

router.get('/register', function(req, res){
  console.log("I am comming here at get admin register")
  res.render('adminregister');
});

router.post('/register', function(req, res){
  console.log("I am comming here at post admin register")
  var username = req.body.username;
  var password = req.body.password;
 
  // Validation
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('username', 'Username can only be admin').equals('admin');
  var errors = req.validationErrors();

  if(errors){
    console.log(errors)
    res.render('adminregister',{
      errors:errors
    });
  } else {
    console.log("no errors found in validationErrors")
    var newUser = new Admin({
      name: username,
      password: password
    });

    Admin.createUser(newUser, function(err, user){
      if(err) throw err;
      console.log(user);
    });

    req.flash('success_msg', 'You are registered and can now login');

    res.redirect('login');
  }
});

passport.use(new LocalStrategy(
  function(name, password, done) {
    if(name != 'admin'){
      return done(null, false, {message: 'Unknown User only admin can login'});
    }

   Admin.getUserByUsername(name, function(err, admin){
   	if(err) throw err;
   	if(!admin){
   		return done(null, false, {message: 'Unknown User'});
   	}

   	Admin.comparePassword(password, admin.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, admin);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Admin.getUserById(id, function(err, user) {
    done(err, user);
  });
});



router.post('/login', 
  passport.authenticate('local', {successRedirect:'visitors', failureRedirect:'login',failureFlash: true}),
  function(req, res) {
    console.log("I have loggged in")
    res.redirect('index');
  });

router.get('/logout', function(req, res){
	console.log("I am comming here at get admin logout")
  req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/');
});


router.get('/visitors', ensureAuthenticated,function(req,res){
  //for admin to render the visitor information
  Visitor.getVisitor("", function(err,visitors){
      res.render('index',{
    visitors:visitors
    });
    });
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next();
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect('/admin/login');
  }
}


module.exports = router;