const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


//shows post username
router.get('/',  async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {model: User,
          attributes:  ['name', 'username'] ,
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

// login 
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;
