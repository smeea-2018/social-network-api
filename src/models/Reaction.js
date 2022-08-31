const moment = require("moment");
const mongoose = require("mongoose");
const Thought = require("./Thought");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
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
    default: Date.now,
    get: (time) => {
      return moment(time).format("MMM Do, YYYY [at] hh:mm a");
    },
  },
});

const Schema = new mongoose.Schema(reactionSchema, {
  toJSON: { getters: true },
});
// const Reaction = model("Reaction", schema);
module.exports = Schema;
