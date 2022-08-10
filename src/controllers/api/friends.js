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
