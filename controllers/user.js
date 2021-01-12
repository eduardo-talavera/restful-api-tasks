const User = require("../models/User");

exports.userById = async (req, res, next, id) => {

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }

  req.profile = user;
  next();

};

exports.read = (req, res) => {
  req.profile.password = undefined;
  return res.json(req.profile);
};