

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
              name:"Blessy K Babu",
              email:"blessy@gmail.com",
              phone:"7902301544",
              district:"pathanamthitta",
              role:"HR",
              jdate:"22-3-2015",
              password:"$2a$10$z./5Y9gMxNnqETFOG8VCW.8aEYnC9UzNcp4w1hqZ1J5FkEzsvbBga",  //Admin@123
              usertype:"6582ce130a0dd1bc7fe48dae"
          },
          {
            _id:"658d0d23c3c29f80bdbf3d67",
              name:"Geetha P",
              email:"geetha@gmail.com",
              phone:"7902301566",
              district:"pathanamthitta",
              role:"Engineer",
              jdate:"22-3-2020",
              password:"$2a$10$VTY60Z2stP3am4ZWeAjMp.MGiwwMAw2HVHJtq/3oHmGCKD6usvfZG",  //Emp@123
              usertype:"6582ce130a0dd1bc7fe48dad"
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
          _id: {$in:["6582bc69818113e62b231703"]} ,
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

