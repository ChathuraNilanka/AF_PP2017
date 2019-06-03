const Author = require('../model/author');

exports.getAll = (req, res) => {
  Author.find((err, Data) => {
      if(err){
          res.json(err);
          console.log("Error", err);
      };

      res.json(Data);
  });
};