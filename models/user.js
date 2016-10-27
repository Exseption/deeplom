var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema({
    id: {type: Number},
    username: { type: String, required: true, unique: true },
    password: { type: String },
    email: { type: String },
    firstName: { type: String },
    lastName: { type: String }
});

module.exports = mongoose.model('User', User);