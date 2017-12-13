var mongoose = require('mongoose');

// Visitor Schema
var VisitorSchema = mongoose.Schema({
	name: {
		type: String,
		index:true
	},
	email: {
		type: String
	},
	telephone: {
		type: String
	},
	company: {
		type: String
	},
	officialvisit: {
		type: Boolean
	},
	escortrequired: {
		type: Boolean
	},
	escortname: {
		type: String
	}
});

var Visitor = module.exports = mongoose.model('Visitor', VisitorSchema);

module.exports.addVisitor = function(newVisitor, callback){
	newVisitor.save(callback);
}

module.exports.getVisitor = function(visitor, callback){
	Visitor.find(function(err,visitors){
		if(err){
			console.log(err);
		}
		else{
			console.log(visitors);
			callback("",visitors)
		}
	});
}