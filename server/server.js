var http = require('http');
var enrutar = require('./controles/enrutar');


http.createServer(function (req, res) {

    enrutar.rutear(req,res);

}).listen(process.env.PORT || 8080);

console.log("inicio el server");