var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});



module.exports = function(app){
    

    app.get('/',function(req,res){
       res.render('login');
     });

     app.get('/signup',function(req,res){
        res.render('signup');
     });
     
};