var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


module.exports = function(passport){
passport.use(new GoogleStrategy({
   clientID:     "131463355627-cbcf8bshf02ear75h6ia9kqnrurmq9k2.apps.googleusercontent.com",
   clientSecret: "RoaNVMb5e5q7Q_txROvqKQbt",
   callbackURL: "http://localhost:3000/auth/google/callback",
   passReqToCallback   : true
 },
 function(request, accessToken, refreshToken, profile, done) {
   done(null,profile);
 }
));

}