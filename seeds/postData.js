const { Post } = require('../models');
const postData =
[
    {
      "title": "BobRoxx",
      "post_body": "Bob is the coolest no denying",
      "user_id": "2",
    },
    {
        "title": "Steve is great",
        "post_body": "Steve is way better",
        "user_id": "5",
    },
    {
        "title": "Hack the Planet",
        "post_body": "You have been haxxd",
        "user_id": "3",
    },
    {
        "title": "Be excellent",
        "post_body": "Be excellent and party on dudes",
        "user_id": "4",
    },
    {
        "title": "Circle K",
        "post_body": "Strange things are afoot at the circle K",
        "user_id": "5",
    }
  ];

  const seedPosts = () => Post.bulkCreate(postData);

  module.exports = seedPosts;