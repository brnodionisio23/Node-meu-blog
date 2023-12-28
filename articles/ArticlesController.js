const express = require('express');
const Category = require('../categories/Category');
const router = express.Router();

router.get("/admin/article/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/article/new', { categories: categories });
    })
})

module.exports = router;