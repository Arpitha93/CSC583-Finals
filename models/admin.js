var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// Admin Schema
var AdminSchema = mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	password: {
		type: String
	}
});

var Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.createUser = function(newUser, callback){
	console.log("I am here at new user")
	var query = {name: 'admin'};
	Admin.count(query, function(err,count) 
	{
		console.log(count)
		// we do not want add more admins 
		if(count == 0)
		{
			bcrypt.genSalt(10, function(err, salt) {
		    	bcrypt.hash(newUser.password, salt, function(err, hash) {
		        	newUser.password = hash;
		        	newUser.save(callback);
	    		});
			});
		}
		//Todo throw error
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {name: username};
	Admin.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	Admin.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}