const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const postData = require('./posts.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, postData {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
