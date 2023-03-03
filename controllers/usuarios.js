// Requerimientos
const bcryptjs = require('bcryptjs');
const { response, request } = require('express');
const Usuario = require( '../models/usuario' );


// Procedimiento

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

const usuariosPost = async (req, res) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ) {
        return res.status(400).json({
            msg: 'El correo ya fue registrado anteriormente'
        });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en DB
    await usuario.save();

    res.json( {
        msg: 'post API - controllers',
        usuario
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

