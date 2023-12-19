'use strict';

module.exports = {
  up: (models, mongoose) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.employees
        .insertMany([
            {
              _id:"657d94d260f11755d840946b",
              name:"Blessy K Babu",
              email:"blessykbabu@gmail.com",
              phone:"7902301544",
              district:"pathanamthitta",
              role:"HR",
              jdate:"22-3-2000"
            
          },
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    
  },

  down: (models, mongoose) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return models.users
          .deleteMany({
            _id:{
              $in:[
                 "657d94d260f11755d840946b"
              ],
            },
          })
        .then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    
  }
};
