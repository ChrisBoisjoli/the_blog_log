const { User } = require('../models');
const userData =
[
    {
      "username": "BobRoxx",
      "email": "BobLogBlog@hotmail.com",
      "password": "password12345"
    },
    {
      "username": "tellEmSteveDave",
      "email": "SteveDave@gmail.com",
      "password": "password12345"
    },
    {
      "username": "CrashOverride",
      "email": "CrashOverride@aol.com",
      "password": "password12345"
    },
    {
      "username": "TedTheodoreLogan",
      "email": "theodorelogan@msn.com",
      "password": "password12345"
    },
    {
      "username": "BillSPrestonEsq",
      "email": "bill.s.preston.esq@yahoo.com",
      "password": "password12345"
    }
  ];

  const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  module.exports = seedUsers;