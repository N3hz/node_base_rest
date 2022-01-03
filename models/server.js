const express = require('express'); //Paquete Express
const cors = require('cors'); //Paquete cors que protege las rutas, permite listas blancas y negras de peticiones


class Server {

    constructor() {
        this.app  = express()
        this.port = process.env.PORT_ENV
        this.usuariosPath = '/api/usuarios'

        this.middlewares()
        this.routes()
    }

    middlewares(){
        // CORS
        this.app.use( cors() );
        
        // Lectura y parseo del body
        this.app.use( express.json() );

        //Servir contenido Estatico
        this.app.use( express.static('public') ) 
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen( this.port , () =>{
            console.log(`Servidor a la escucha en localhost: ${ this.port }`);
        })
    }

}

module.exports = {
   Server 
}