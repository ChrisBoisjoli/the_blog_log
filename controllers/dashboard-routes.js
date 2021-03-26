const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

//get Dashboard
router.get('/dashboard/', withAuth, async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Post,
            attributes: [
              'id',
              'title',
              'post_body',
              
            ],
          },
        ],
      });
  
      const post = dbPostData.get({ plain: true });
      res.render('posts', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router;
