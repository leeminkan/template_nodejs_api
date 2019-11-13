const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

const RequestHandler = require("../utils/RequestHandle");
const requestHandler = new RequestHandler();
module.exports = {
  create: async function(req, res, next) {
    try {
      const obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        passwordConfirmation: req.body.passwordConfirmation,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth
      };
      validator = userModel.validateWithJoi(obj, "createUser");
      if (validator) {
        return requestHandler.sendErrorJoi(res, validator, 422);
      }
      //Check if email existed
      const count = await userModel.countDocuments({email: obj.email});
      if(count > 0) return requestHandler.sendErrorCustom(
        res,
        "error.EMAIL_EXISTED",
        422
      );
      //Creat user, profile, matchedRequirement
      const user = await userModel.create(obj);
      user.hashPassword();
      await user.save();
      const data = {
        user: user,
        message: "Create user successful!"
      };
      return requestHandler.sendSuccess(res, data);
    } catch (err) {
      return next(err);
    }
  },
  login: async function(req, res, next) {
    try {
      const obj = {
        email: req.body.email,
        password: req.body.password,
      };
      validator = userModel.validateWithJoi(obj, "loginUserByEmail");
      if (validator) {
        return requestHandler.sendErrorJoi(res, validator, 422);
      }
      //TODO: Search about exec in mongoose
      await userModel.findOne({ email: obj.email }).select('+password').exec(function(err, user) {
        if (err) return next(err);
        if (!user) return requestHandler.sendErrorCustom(
            res,
            "error.USER_NOT_FOUND",
            404
          );
          if (!user.comparePassword(req.body.password)){
          return requestHandler.sendErrorCustom(
            res,
            "error.PASSWORD_INCORRECT",
            401
          );
        }
        const token = jwt.sign({ _id: user._id }, process.env.secretKey, {
          expiresIn: "1h"
        });
        data = {
          token: token,
          message: "Login successful!"
        };
        return requestHandler.sendSuccess(res, data);
      });
    } catch (err) {
      return next(err);
    }
  },
  checkAuthenticate: function(req, res, next) {
    try {
      data = {
        user: req.body.user,
        message: "Authenticated!"
      };
      return requestHandler.sendSuccess(res, data);
    } catch (err) {
      return next(err);
    }
  },
};
