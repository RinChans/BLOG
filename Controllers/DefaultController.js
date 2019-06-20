module.exports = {
    index : (req,res) => {
        res.render('default/index.ejs');
    },
    getCategory : (req,res) => {
        res.render('default/category.ejs');
    },
    getTravel : (req,res) => {
        res.render('default/travel.ejs');
    }
}