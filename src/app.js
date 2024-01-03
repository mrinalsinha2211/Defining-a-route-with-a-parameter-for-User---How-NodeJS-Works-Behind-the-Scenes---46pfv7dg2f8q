const express = require('express');
const app = express();

app.get("/user/:userId", (req, res) => {
  //Write a code here for endpoint /user/:userId and also print parameter in json form
      const userId =req.params.userId;
      res.status(200).json({userId});
});


module.exports = app;
