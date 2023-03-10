
// Requires
const Role = require('../models/role');
const Usuario = require( '../models/usuario' );



// Proceedings
const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if( !existeRol ) {
        throw new Error( `El rol ${rol} no está registrado en la DB` );
    }
}

const emailExiste = async ( correo ) => {
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
};

const existeUsuarioPorId = async ( id ) => {
    const existeUsuario = await Usuario.findById( id );
    if( !existeUsuario ) {
        throw new Error(`El id no existe ${id} `);
    }
};

module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId
}


