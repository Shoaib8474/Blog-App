const express = require('express');
const router = express.Router();
const guest = require('../controllers/guest/home')

router.get('/', guest.findAllArticles);
router.get('/article/:id', guest.findArticle);

module.exports = router;