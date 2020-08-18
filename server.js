var express = require("express");
var moment = require("moment");


var app = express();

//serve static content web pages
app.use(express.static(__dirname + '/public'));

var log = function(message){
    var time = moment().format();
    console.log('[server] @ '+ time+' '+message);
}

var port = 3000;
app.listen(port);
log('Serving port ' +port);