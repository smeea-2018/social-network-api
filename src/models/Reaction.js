const mongoose = require("mongoose");

const Reaction = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    max: 200,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    type: Date,
    default: Date.now,
  },
});

model.exports = Reaction;
