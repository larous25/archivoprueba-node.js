var fs = require('fs');    


    var paginas = {}
    paginas[''] = index();
    paginas['index'] = index();
    paginas['noesta'] = noesta();

    var tipos = {}
    tipos['.html'] = 'text/html';
    tipos['.css'] = 'text/css';
    tipos['.js'] = 'text/javascript';

    var tiposimagenes = {}
    tiposimagenes['.png'] = 'image/pgn';
    tiposimagenes['.jpeg'] = 'images/jpeg';
    tiposimagenes['.jpg'] = 'images/jpeg';
    tiposimagenes['.ico'] = 'images/ico';

function index() {
   return fs.readFileSync("./vistas/index.html");
}

function noesta() { 
    return fs.readFileSync("./vistas/noesta.html");
}

exports.paginas = paginas;
exports.tipos = tipos;
exports.tiposimagenes = tiposimagenes;