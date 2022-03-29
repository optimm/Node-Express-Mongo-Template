const mongoose = require("mongoose");

// in newer versions of mongoose the extra lines in this are depriciated
//    useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false,
// useUnifiedTopology: true,
// these are true by default now in mongoose
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
