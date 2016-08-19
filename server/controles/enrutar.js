'use strict';

const path = require('path');
const url  = require('url');

class RouterEs6{

    constructor(){
        this.metodos = ['GET', 'POST', 'PUT', 'DELETE'];
        this.routes = new Map();
    }

    añadir(metodo, routa, callback){
        metodo = this.comprobarMetodo(metodo);
        let tiene = this.routes.has(metodo);

        if(tiene){
            this.routes.get(metodo).set(routa, callback);
        }else{
            
            let rutas = new Map();
            rutas.set(routa, callback);
            this.routes.set(metodo, rutas);
        }
    }

    // comprueba que la ruta esta 
    // se encuentra guardad y 
    // ejecuta la funcion
    enrutar(req, res){
        let ruta = this.formalizar(req.url);
        let metodo = req.method;

        let tieneMetodo = this.routes.has(metodo);


        if(tieneMetodo){
        
            let tieneRuta = this.routes.get(metodo).has(ruta);
      
            if(tieneRuta){
                return this.routes.get(metodo).get(ruta)();                
            }
            console.log('eee');
        }
            return this.noFunctiona(res);
    }

    comprobarMetodo(metodo){
        for (var i = 0; i < this.metodos.length; i++) {
            if(new RegExp(this.metodos[i], 'i').test(metodo)){
                return this.metodos[i];
            }
        }

        return metodo;
    }

    formalizar(urlString){
        return url.parse(urlString).pathname;
    }

    noFunctiona(res){
        res.writeHead(404, {'Conten-Type':'text/html'});
        res.end('no found');
    }

}

module.exports = RouterEs6;