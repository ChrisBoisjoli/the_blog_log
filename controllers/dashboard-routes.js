const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

//get Dashboard
// Create post
router.get('/create', withAuth, async (req, res) => {
  try {
      res.render('create', {
      loggedIn: req.session.loggedIn,
      });
  }
  catch (err) {
      res.status(500).json(err);
  }
  });
  // Get all posts by user
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll(
      {
      include: [
        {
          model: User,
          attributes: [
            'username',
          ],
        },
      ],
        where: {
          user_id: req.session.user_id,
        }
      });
    
    const user_posts = postData.map((user_post) => 
    user_post.get( { plain: true })
    );
    res.render('dashboard', {
      user_posts,
      loggedIn: req.session.loggedIn,
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
  
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
  // Create new post with user input.
router.post('/create', async (req, res) => {
  try {
      const userData = await Post.create(
      {
          title: req.body.title,
          content: req.body.content,
          user_id: req.session.user_id,
      });
      res.status(200).json(userData);
  }
  catch (err) {
      res.status(400).json(err);
  }
  });
  
  


module.exports = router;
