const express = require('express');
const router = express.Router();

router.get("/admin/article/new", (req, res) => {
    res.render('admin/article/new');
})

module.exports = router;