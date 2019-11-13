const RequestHandler = require("../utils/RequestHandle");
const requestHandler = new RequestHandler();
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

module.exports = async function validateUser(req, res, next) {
    try {
      if (!req.headers['x-access-token'])
      {
        return requestHandler.sendErrorCustom(
          res,
          "error.REQUIRE_TOKEN",
          401
        );
      }
        jwt.verify(req.headers['x-access-token'], process.env.secretKey, function(err, decoded) {
            if (err) return requestHandler.sendErrorCustom(
              res,
              "error.AUTHENTICATE_FAIL",
              401
            );
            userModel.findById(decoded._id,(err, result) => {
              if (err) return next(err);
              if (!result) return requestHandler.sendErrorCustom(
                res,
                "error.USER_NOT_FOUND",
                401
              );

              // add user id to request
              req.body.user = result;
              return next();
            });
          });
    } catch (err) {
        return next(err);
    }
  }