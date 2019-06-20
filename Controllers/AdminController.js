const Category = require('../Models/CategoryModel').Category;


module.exports = {
    index: (req, res) => {
        res.render('admin/index.ejs');
    },
    getCategory : (re,res) => {
        Category.find()
            .then(category => {
                res.render('admin/category/index.ejs', {
                    categories: category
                });
            })
    },
    getPostCategory : (req,res) => {
         res.render('admin/category/create.ejs');
    },
    summitPostCategory : (req,res) => {
        const category = new Category({
            title : req.body.title
        });
        category.save()
            .then(category => {
                res.redirect('/admin/category');
            }).catch(err => {
                console.log(err);
            })
    },
    deleteCategory : (req,res) => {
        const id = req.params.id;
        Category.findByIdAndDelete(id)
            .then(category => {
                res.redirect('/admin/category');
            }).catch(err => {
                console.log(err);
            })
    }
}