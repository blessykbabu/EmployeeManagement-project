

const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'employees' model
      if ('employees' in models) {
        const employees = models.employees;
        
        const inserted = await employees.insertMany([
          
            
          {
            _id:"6582bc69818113e62b231703",
              name:"pavithra",
              email:"pavithra@gmail.com",
              phone:"7902301544",
              district:"pathanamthitta",
              role:"HR",
              jdate:"22-3-2015"
          },
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('employee model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'employees' model
      if ('employees' in models) {
        const employees = models.employees;
        const deleted = await employees.deleteMany({
          _id:  "6582bc69818113e62b231703",
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('employees model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};

