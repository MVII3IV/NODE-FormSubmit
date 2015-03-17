var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.listen(3000);

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'jade');




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.get('/', function(req, res){
    res.render('index');
});

app.post('/form', function(req, res){
    
    var email = req.body.email;
    var password = req.body.password;
    
    
    var data =  {
            'myEmail' : email,
            'myPass'  : password
        }

    
    
    res.render('form', data);
    
});
