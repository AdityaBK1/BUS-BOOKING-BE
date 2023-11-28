

const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect(
    "mongodb+srv://aditya:sai2000@cluster0.sxoibky.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
};

module.exports = connect;


