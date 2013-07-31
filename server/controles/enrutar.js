var url = require('url');
var carga = require("./cargarpaginas")

/*
    toma la ruta de la url
*/
function rutear(requiere,respuesta) {
    var rutarequerida;
    rutarequerida = url.parse(requiere.url).pathname;
    ruta(rutarequerida,respuesta)
}

/*
    deside que mostrar en esa ruta
*/
function ruta(laruta,respuesta) {
    if(carga.paginas[laruta]!=null){
        respuesta.writeHead(200,{'Content-Type':'text/html'});
        respuesta.write(carga.paginas[laruta] );
        respuesta.end();
    }else if(typeof(carga.paginas[laruta])=="function"){
        
    }else{
        respuesta.writeHead(404,{'Content-Type':'text/html'});
        respuesta.write(carga.paginas['noesta']);
     respuesta.end();
    }         
}

exports.rutear = rutear;