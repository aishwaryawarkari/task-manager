const authValidator = require("./auth.validator");
const User = require("../../models/user");

exports.register = async (req, res, next) => {
  try {
    const body = await authValidator.register().validateAsync(req.body);
    await User.create(body);

    return res.status(201).json({ success: true, data: null });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  return res.send("login");
};
