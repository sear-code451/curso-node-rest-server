
const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {

    const { nombre = 'not name', apikey = 'Sin apikey', page = '1', limit } = req.query;

    res.json( {
        msg: 'get API - controllers',
        page,
        nombre,
        apikey,
        limit
    });
};

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json( {
        msg: 'put API - Controllers',
        id
    });
};

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json( {
        msg: 'post API - controllers',
        edad,
        nombre
    });
};

const usuariosDelete = (req, res) => {
    res.json( {
        msg: 'delete API - controllers'
    });
};

const usuariosPath = (req, res) => {
    res.json( {
        msg: 'patch API'
    });
};



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath
}

