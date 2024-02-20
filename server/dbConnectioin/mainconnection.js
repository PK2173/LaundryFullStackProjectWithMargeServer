const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODBCONNECTION || 'mongodb+srv://praveen21:gP7CwHPy1hOJOn4g@cluster0.ejfyypk.mongodb.net/'
  )
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });