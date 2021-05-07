"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleValidationErrors = exports.handleGlobalErrors = exports.handleErrors = void 0;

var _expressValidator = require("express-validator");

/**
 * Handle the error that happens during the processing
 * of data and send the response to the user
 * 
 * @param {error} err 
 * @param {Response} res 
 */
var handleErrors = function handleErrors(err, res) {
  console.log(err); //Send reponse to the user

  res.status(err.statusCode || 500).json({
    status: "error",
    statusCode: err.statusCode || 500,
    message: err.message,
    error: err.stack
  });
};
/**
 * Handle all the global errors
 * 
 * @param {error} err 
 * @param {request} req 
 * @param {response} res 
 * @param {next callback function} next 
 */


exports.handleErrors = handleErrors;

var handleGlobalErrors = function handleGlobalErrors(err, req, res, next) {
  //If the error is an array it came through express-validator
  if (Array.isArray(err)) {
    return res.status(err.length === 1 ? err[0].statusCode : 400).json(err);
  } else {
    return res.status(err.statusCode || 500).json(err);
  }

  next();
};
/**
 * Handle All the errors thrown while validating
 * the user inputs
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next callbak function} next 
 */


exports.handleGlobalErrors = handleGlobalErrors;

var handleValidationErrors = function handleValidationErrors(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    next(errors.array().map(function (err) {
      return {
        status: "error",
        statusCode: 400,
        message: err.msg,
        error: err
      };
    }));
  }

  next();
};

exports.handleValidationErrors = handleValidationErrors;