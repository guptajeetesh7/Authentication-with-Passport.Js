var express = require('express');
var RouteController = require('./router/routes');


var app = express();


app.use(express.static('./public'));
app.set('view engine','ejs');



//Routes
RouteController(app);

app.listen(8000);
console.log("Server Running");