const getAllFriends = (req, res) => {
  console.log("all friends");
  res.send("getAllAfriends");
  // const data = friends.find({});
  // res.json(data);
};
const getSingleFriend = (req, res) => {
  console.log("single friend");
};
const addFriend = (req, res) => {
  console.log("friend added");
};
const deleteFriend = (req, res) => {
  console.log("friend deleted");
};

module.exports = {
  getAllFriends,
  getSingleFriend,
  addFriend,
  deleteFriend,
};

// `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters
// `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`
// * `reactionId`
//   * Use Mongoose's ObjectId data type
//   * Default value is set to a new ObjectId

// * `reactionBody`
//   * String
//   * Required
//   * 280 character maximum

// * `username`
//   * String
//   * Required

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// **Schema Settings**:

// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.
