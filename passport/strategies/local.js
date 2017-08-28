var mongoose = require('mongoose');
var User = require('../../Models/localSchema');
var LocalStrategy = require('passport-local').Strategy;




//ES6 Promise
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Passport',{ useMongoClient: true });

mongoose.connection.once('open',function(){
    console.log('Connection Has been made !!');
    
  }).on('error',function(error){
    console.log('Connection to Database has Error :' + error);
  });


module.exports = function(passport){

  
    
    passport.use(new LocalStrategy(
        function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (user.password!=password) {
                console.log("User password mismatch");
                return done(null, false); }
            return done(null, user);
        });
        }
    ));

}