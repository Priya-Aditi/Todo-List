// importing mongoose to create new Schema
const mongoose = require("mongoose");

// Creating Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

// Exporting this Schema
module.exports = mongoose.model("todo", TodoItemSchema);
