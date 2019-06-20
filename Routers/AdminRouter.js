const AdminController = require('../Controllers/AdminController');
const express = require('express');
const router = express.Router();



router.all('/admin', (req,res,next) => {
    req.app.locals.layout = 'admin';
    next();
})


// Require Index

router.route('/admin')
    .get(AdminController.index);


router.route('/admin/category')
    .get(AdminController.getCategory);

router.route('/admin/category/create')
    .get(AdminController.getPostCategory)
    .post(AdminController.summitPostCategory);

router.route('/admin/category/delete/:id')
    .delete(AdminController.deleteCategory);






module.exports = router;