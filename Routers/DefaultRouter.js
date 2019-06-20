const DefaultController = require('../Controllers/DefaultController');
const express = require('express');
const router = express.Router();

// Index

router.all('/*',(req,res,next) => {
    req.app.locals.layout = 'default';
    next();
})

router.route('/')
    .get(DefaultController.index);

router.route('/category')
    .get(DefaultController.getCategory);

router.route('/travel')
    .get(DefaultController.getTravel);





    
module.exports = router;