const { response } = require('express');

const Cotizacion = require('../models/cotizaciones.model');

/** =====================================================================
 *  CREATE COTIZACION
=========================================================================*/
const postCotizacion = async(req, res = response) => {

    try {

        let { email, ...data } = req.body;

        email.trim().toLowerCase();
        data.email = email;

        // SAVE DEPARTMENT
        const cotizacion = new Cotizacion(data);
        await cotizacion.save();

        res.json({
            ok: true,
            cotizacion
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Unexpected error, please try again!'
        });
    }

};

// EXPORTS
module.exports = {
    postCotizacion
};