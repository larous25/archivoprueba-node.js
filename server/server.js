'use strict';

const http = require('http');
let RouterEs6 = require('./controles/enrutar');

// instancia el router y se la añade
// una ruta
let router = new RouterEs6();
router.añadir('get', '/', () => { 
	console.log('funciona');
});
	
// crea un servidor
// ejecuta el router
http.createServer ((req, res) => {
	router.enrutar(req, res);
}).listen(process.env.PORT || 5000);

