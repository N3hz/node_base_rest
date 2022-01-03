const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    const { q = "" } = req.query;

    res.json({
        msg: 'get API - controlador',
        q
    });
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}

const usuarios404 = (req , res ) => {
    //Rutas no existentes
    let rutaCero = __dirname.split("\\");
    rutaCero.pop();
    res.sendFile(rutaCero.join("\\")  + "/public/404.html")
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
    usuarios404,
}


