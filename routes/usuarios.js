// Exportados
const { Router } = require('express');
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

router.post('/', usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPath );


module.exports = router;