const { response } = require('express');

const Newsletter = require('../models/newsletter.model');

/** =====================================================================
 *  CREATE NEWSLETTER
=========================================================================*/
const postNewsletter = async(req, res = response) => {

    try {

        let { email, ...data } = req.body;

        email.trim().toLowerCase();
        data.email = email;

        const newsletterDB = await Newsletter.findOne({ email });
        if (newsletterDB) {
            return res.status(400).json({
                ok: false,
                msg: 'This email has already been saved in our database'
            });
        }

        // SAVE DEPARTMENT
        const newsletter = new Newsletter(data);
        await newsletter.save();

        res.json({
            ok: true,
            newsletter
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
    postNewsletter
};