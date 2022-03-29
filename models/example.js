const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name"],
  },
  position: {
    type: String,
    required: [true, "please provide a position"],
  },
});

module.exports = mongoose.model("Example", exampleSchema);
