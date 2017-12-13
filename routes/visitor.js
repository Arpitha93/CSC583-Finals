var express = require('express');
var router = express.Router();

//Our visitor data model
var Visitor = require('../models/visitor');

// Register
router.get('/register', function(req, res){
	res.render('register');
});


// Register Visitor
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var telephone = req.body.telephone;
	var company = req.body.company;
	var officialvisit = req.body.officialvisit;
	var escortrequired = req.body.escortrequired;
	var escortname = req.body.escortname;

	//Set default
	if(! officialvisit){
		officialvisit = false
	}

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('telephone', 'Mobile Telephone Number is required').notEmpty();
	req.checkBody('telephone', 'Telephone Number is invalid').isMobilePhone("en-US");
	req.checkBody('company', 'Company is required').notEmpty();
	
	
	if(escortrequired){
		req.checkBody('escortname', 'Escort Name is required').notEmpty();
	}
	else{
		escortrequired = false
	}


	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newVisitor = new Visitor({
			name: name,
			email:email,
			telephone: telephone,
			company: company,
			officialvisit: officialvisit,
			escortrequired:escortrequired,
			escortname:escortname
		});

		Visitor.addVisitor(newVisitor, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'Visitor information added to database');

		res.redirect('/');
	}
});


router.get('/visitors', function(req,res){
	//for admin to render the visitor information
	Visitor.getVisitor("", function(err,visitors){
  		res.render('index',{
		visitors:visitors
		});
  	});
});

module.exports = router;