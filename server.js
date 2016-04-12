/**
 * Created by yangyang on 4/12/16.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname));

//app.get('/', function(req, res){
//    res.send('hello world');
//});

app.listen(3000);