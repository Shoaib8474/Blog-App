const Article = require('../../models/article');

const guest = {

    findAllArticles: async (req, res) => {
        try{
            const articles = await Article.findAll({
                order: [['publishDate', 'DESC']]
              });
            res.render('guest/home', { articles });
        } catch(error) {
        }
    },

    findArticle: async (req, res) => {
        try {
            const article = await Article.findByPk(req.params.id);
            if (!article) {
              return res.status(404).send('Article not found');
            }
            res.render('guest/article', { article });
          } catch (error) {
            res.status(500).send(error.message);
          }
    },

    // findAllArticle: async () => {
    //     try{
    //     } catch(error) {
    //     }
    // }

}

module.exports = guest;