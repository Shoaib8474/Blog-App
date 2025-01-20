const express = require('express');
const router = express.Router();
const adminDashboard = require('../controllers/admin/dashboardController');
const  { authenticateToken } = require('../middlewares/authMiddleware')

router.use(authenticateToken)  // token authentication middleware

router.get('/dashboard', adminDashboard.findAllArticles );
router.get('/article/add', adminDashboard.addArticle );
router.post('/article/add', adminDashboard.setArticle);
router.get('/article/edit/:id', adminDashboard.editArticle);
router.post('/article/edit/:id', adminDashboard.editedArticle);

router.post('/article/delete/:id', adminDashboard.deleteArticle);

module.exports = router;