var url = require('url'),
path = require('path'),
carga = require("./cargarpaginas");

/*
    toma la ruta de la url
    y de paso lo otro para hacerlo 
    como se llamaaa 
    bueno por hilos
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

    var archivo = path.basename(laruta);

    /*  
        si  
         la ruta no tiene extensión
			el tipo predefinido es html
        Si no 
 			elegimos el tipo y dejamos extensión
					si el archivo esta
               */    

    if (path.extname(archivo) != "" ) {
            if(carga.paginas[archivo]!=null){
                respuesta.writeHead(200,{'Content-Type':'text/html'});
                respuesta.write(carga.paginas[archivo] );
                respuesta.end();
            }else if(carga.tiposimagenes[path.extname(archivo)]!=null){
                console.log(carga.tiposimagenes[path.extname(archivo)]);
            }else{
                respuesta.writeHead(404,{'Content-Type':'text/html'});
                respuesta.write(carga.paginas['noesta']);
                respuesta.end();
            }    
    }
    else{
             if(carga.paginas[archivo]!=null){
                respuesta.writeHead(200,{'Content-Type':'text/html'});
                respuesta.write(carga.paginas[archivo] );
                respuesta.end();
            }else{
          
                respuesta.writeHead(404,{'Content-Type':'text/html'});
                respuesta.write(carga.paginas['noesta']);
             respuesta.end();
            }   

    }
          
}

exports.rutear = rutear;