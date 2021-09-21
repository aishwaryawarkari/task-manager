const Joi = require("joi");

exports.register = () => {
  return Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
};
