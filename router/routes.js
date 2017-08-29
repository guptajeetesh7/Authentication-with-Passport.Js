var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Passport',{ useMongoClient: true });
mongoose.connection.once('open',function(){
    console.log('Connection Has been made !!');
  }).on('error',function(error){
    console.log('Connection to Database has Error :' + error);
  });

var User = require('../Models/localSchema');


module.exports = function(app , passport){
    
    app.use(bodyParser.json());

    app.get('/',function(req,res){
       res.render('login');
     });

     app.post('/',urlencodedParser, passport.authenticate('local', { failureRedirect: '/' ,
                                                                    successRedirect: '/home/profile' }),
        function(req,res){
              console.log(req.body);
              res.render('login');
      });



     app.get('/signup',function(req,res){
        res.render('signup');
     });

    app.post('/signup',function(req,res){
        var user = new User(req.body);

        User.findOne({username: req.body.username}).then(function(result){
          if(result==undefined || result==null){
            user.save().then(function(result){
              console.log(result);
              req.login(req.body,function(err){
                if(!err){
                  console.log(req.user);
                  res.send({redirect:'/home/profile',message: "Account Made!!"});
                                             
                }else{
                  console.log("ME");
                  res.send({redirect: '/signup',message:"Server Error"});
                  }
              });
          });
          }
          else{
            console.log("User already Present");
            res.send({redirect: '/signup',message:"Username Already Present"});
          }
        });
    }); 

    app.get('/auth/google',passport.authenticate('google',{
      scope: ['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email']
    }))


    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/home/profile');
    });


     app.get('/home/profile',function(req,res){
       if(!req.user){
         res.redirect('/signup');
       }else
      res.json(req.user);
     });
     
};