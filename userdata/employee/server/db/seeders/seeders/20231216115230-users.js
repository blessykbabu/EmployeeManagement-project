'use strict';

module.exports = {
  up: (models, mongoose) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.employees([
        {
          insertMany([
            {
              _id:"",
              name:"",
              email:"",
              phone:"",
              district:"",
              role:"",
              jdate:""
            }
          },
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    */
  },

  down: (models, mongoose) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
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
    */
  }
};
