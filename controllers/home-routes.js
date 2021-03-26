const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


//shows post username
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {model: User,
          attributes:  ['username'] ,
        }
      ]
    });
    // console.log(postData);
    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one post

router.get('/posts/:id', withAuth, async (req, res) => {
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

// login 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;
