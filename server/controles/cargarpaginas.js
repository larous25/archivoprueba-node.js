var fs = require('fs');    


    var paginas = {}
    paginas['/'] = index();
    paginas['/index'] = index();
    paginas['noesta'] = noesta();


function index() {
   return fs.readFileSync("./vistas/index.html");
}

function noesta() { 
    return fs.readFileSync("./vistas/noesta.html");
}

exports.paginas = paginas;