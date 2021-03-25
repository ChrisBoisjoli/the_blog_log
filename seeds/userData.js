const { User } = require('../models');
const userData =
[
    {
      "name": "Bob",
      "username": "BobRoxx",
      "email": "BobLogBlog@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Steve",
      "username": "tellEmSteveDave",
      "email": "SteveDave@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Crash",
      "username": "CrashOverride",
      "email": "CrashOverride@aol.com",
      "password": "password12345"
    },
    {
      "name": "Ted",
      "username": "TedTheodoreLogan",
      "email": "theodorelogan@msn.com",
      "password": "password12345"
    },
    {
      "name": "Bill",
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