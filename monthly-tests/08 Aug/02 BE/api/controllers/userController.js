import User from "../models/userModel";
import service from "../services/userService";
import { handleErrors } from "../errorHandlers/ErrorHandlers";
import logout from "../services/logoutService";

const controller = {};

//User Signup
controller.signup = async (req, res) => {
  try {
    //Create new user
    const user = await service.signup(req.body);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//User Login
controller.login = async (req, res) => {
  try {
    const user = await service.login(req.body);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Get User details
controller.get = async (req, res) => {
  try {
    //Get User
    const user = await service.getUser(req._id);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//UPDATE User Details
controller.update = async (req, res) => {
  try {
    const user = await service.updateUser(req._id, req.body);

    res.status(201).json(user);
  } catch (e) {
    handleErrors(e, res);
  }
};

//Logout
controller.logout = async (req, res) => {
  try {
    const message = await logout(User, req);

    res.status(200).json(message);
  } catch (e) {
    handleErrors(e, res);
  }
};

export default controller;
