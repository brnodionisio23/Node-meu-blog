const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');

router.get('/admin/category/new', (req, res) => {
    res.render('admin/category/new');
})

router.post("/admin/category/saveCategory", (req, res) => {
    let title = req.body.inpCategory;
    title == undefined ? res.redirect('/admin/category/new') : Category.create({
        title: title,
        slug: slugify(title)
    }).then(() => {
        res.redirect('/');
    })
})

module.exports = router;