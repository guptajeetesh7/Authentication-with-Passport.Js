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

     app.get('/signup',function(req,res){
        res.render('signup');
     });

    app.post('/signup',function(req,res){
        var user = new User(req.body);
        user.save().then(function(result){
            console.log(result);
            req.login(req.body,function(err){
              if(!err){
                console.log(req.user);
                res.redirect('auth/profile');
                
              }else{
                console.log("ME");
                res.redirect('/');
              }
            });
        });
    }); 


     app.get('/auth/profile',function(req,res){
      res.send("req.user");
     });
     
};