// Exportados
const { check } = require('express-validator');
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');
const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPath,
} = require('../controllers/usuarios');

// Enlaces
const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/',
[

    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check( 'password', 'El password es obligatorio y más de 6 letras').isLength( { min: 6 } ),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol permitido').isIn([ 'ADMIN_ROLE', 'USER_ROLE' ]),
    check('rol').custom( async (rol = '') => {
        const existeRol = await Role.findOne({rol});
        if( !existeRol ) {
            throw new Error( `El rol ${rol} no está registrado en la DB` );
        }
    } ),
    validarCampos

], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPath );


module.exports = router;