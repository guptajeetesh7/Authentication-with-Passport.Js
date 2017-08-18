var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});



module.exports = function(app){
    

    app.get('/',function(req,res){
       res.render('login');
        //res.json({type:"GET"});
    });
};