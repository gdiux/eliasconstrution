/** =====================================================================
 *  NEWSLETTER ROUTER 
=========================================================================*/
const { Router } = require('express');
const { check } = require('express-validator');

// MIDDLEWARES
const { validarCampos } = require('../middlewares/validar-campos');

// CONTROLLERS
const { postNewsletter } = require('../controllers/newsletter.controller');

const router = Router();
/** =====================================================================
 *  POST NEWSLETTER
=========================================================================*/
router.post('/', [
        check('email', 'email is mandatory').isEmail(),
        validarCampos
    ],
    postNewsletter
);


// EXPORT
module.exports = router;