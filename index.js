var express = require('express'),
    jade = require('jade'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');
    
var app = express();


app.use(cookieParser());
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    var today = new Date();
    res.render('index', {date : (today.toDateString()),
                        tZone : today.getTimezoneOffset()});
})

app.listen(3000);