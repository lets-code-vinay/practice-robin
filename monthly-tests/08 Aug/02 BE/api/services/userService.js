import User from "../models/userModel";
import encryptionService from "../services/encryptionService";
import jwt from "../services/authorizationService";

const services = {};

//==========================================Signup Service==========================================
services.signup = (data) =>
  new Promise(async (res, rej) => {
    try {
      //Get Password and hash it
      const { password, ...remData } = data;

      //Get hash
      const hash = await encryptionService.encrypt(password);

      const user = await new User({
        password: hash,
        ...remData,
        isLoggedIn: true,
      }).save();

      //Generate Token
      const token = await jwt.generate(user);

      res({
        user,
        token,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Login Service==========================================

services.login = (data) =>
  new Promise(async (res, rej) => {
    try {
      //Get id
      const { email } = data;

      const user = await User.findOneAndUpdate(
        {
          email,
        },
        { isLoggedIn: true },
        {
          new: true,
        }
      );

      //Generate Token
      const token = await jwt.generate(user);

      res({
        user,
        token,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get User Service==========================================
services.getUser = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const user = await User.findById(_id);

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update User Detail Service==========================================
services.updateUser = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      const { email, password, ...remData } = data;

      //Get hash
      const hash = await encryptionService.encrypt(password);

      //Updating the hash to database
      const user = await User.findByIdAndUpdate(
        _id,
        {
          password: hash,
          ...remData,
        },
        {
          new: true,
        }
      );

      res(user);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
