

const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('users' in models) {
        const users = models.users;
        
        const inserted = await users.insertMany([
          
            
          {
            _id:"6582bc69818113e62b231703",
              name:"pavithra",
              email:"pavithra@gmail.com",
              phone:"7902301544",
              district:"pathanamthitta",
              role:"HR",
              jdate:"22-3-2015",
              usertype:"6582ce130a0dd1bc7fe48dae",
              password:"$2y$10$0k7NObOJgt8j3OoP5rYk6OIer.z/1LWK4CGLhUKk8xsqGK1F2ic/G"  //Admin@123
          },
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('users model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'users' model
      if ('users' in models) {
        const users = models.users;
        const deleted = await users.deleteMany({
          _id:  "6582bc69818113e62b231703",
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('users model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};

