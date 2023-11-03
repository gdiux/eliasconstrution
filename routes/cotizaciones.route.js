/** =====================================================================
 *  COTIZACIONES ROUTER 
=========================================================================*/
const { Router } = require('express');
const { check } = require('express-validator');

// MIDDLEWARES
const { validarCampos } = require('../middlewares/validar-campos');

// CONTROLLERS
const { postCotizacion } = require('../controllers/cotizaciones.controller');

const router = Router();
/** =====================================================================
 *  POST VOTO
=========================================================================*/
router.post('/', [
        check('email', 'email is mandatory').isEmail(),
        check('name', 'names are mandatory').not().isEmpty(),
        check('address', 'the address is mandatory').not().isEmpty(),
        check('phone', 'the phone is mandatory').not().isEmpty(),
        validarCampos
    ],
    postCotizacion
);


// EXPORT
module.exports = router;