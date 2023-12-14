const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

router.get('/admin/category', (req, res) => {
    Category.findAll().then(category => {
        res.render('admin/category/category', { category: category });
    })
})

router.get('/admin/category/new', (req, res) => {
    res.render('admin/category/new');
})

router.post("/admin/category/saveCategory", (req, res) => {
    let title = req.body.inpCategory;
    !title ? res.redirect('/admin/category/new') : Category.create({
        title: title,
        slug: slugify(title)
    }).then(() => {
        res.redirect('/admin/category');
    })
})

router.post('/admin/category/deleteCategory', (req, res) => {
    let id = req.body.id;
    Category.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/admin/category');
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router;