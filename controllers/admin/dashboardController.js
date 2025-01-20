const Article = require("../../models/article");

const adminDashboard = {
    findAllArticles: async (req, res) => {
        try {
          const articles = await Article.findAll({
            order: [['publishDate', 'DESC']]
          });
          res.render('admin/dashboard', { articles, user: req.user });
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      addArticle: async (req, res) => {
       res.render('admin/add-article');
      },

      setArticle:  async (req, res) => {
        try {
          const { title, content, publishDate } = req.body;
          console.log(publishDate)
          await Article.create({
            title,
            content,
            publishDate: new Date(publishDate)
          });
          res.redirect('/admin/dashboard');
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      editArticle: async (req, res) => {
        try {
          const article = await Article.findByPk(req.params.id);
          if (!article) {
            return res.status(404).send('Article not found');
          }
          res.render('admin/edit-article', { article });
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      editedArticle: async (req, res) => {
        try {
          const { title, content, publishDate } = req.body;
          const article = await Article.findByPk(req.params.id);
          if (!article) {
            return res.status(404).send('Article not found');
          }
          await article.update({
            title,
            content,
            publishDate: new Date(publishDate)
          });
          res.redirect('/admin/dashboard');
        } catch (error) {
          res.status(500).send(error.message);
        }
      },

      deleteArticle: async (req, res) => {
        try {
          const article = await Article.findByPk(req.params.id);
          if (!article) {
            return res.status(404).send('Article not found');
          }
          await article.destroy();
          res.redirect('/admin/dashboard');
        } catch (error) {
          res.status(500).send(error.message);
        }
      }
      
}


module.exports = adminDashboard;