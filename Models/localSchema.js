const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    username : String,
    password : String
});

var Users = mongoose.model('User',loginSchema);

module.exports = Users;
