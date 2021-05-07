import Post from "../models/postModel";
import User from "../models/userModel";

const services = {};

//==========================================Create Service==========================================
services.create = (req) =>
  new Promise(async (res, rej) => {
    try {
      //   const data = req.body;
      const id = req._id;
      const obj = {
        author: req.body.author,
        description: req.body.description,
        title: req.body.title,
        user: id,
      };
      const post = await new Post({ ...obj }).save();

      const user = await User.findById(id);
      user.post.push(post);
      await user.save();
      res({
        post,
      });
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get Post Service==========================================
services.getPost = (_id) =>
  new Promise(async (res, rej) => {
    try {
      const post = await User.findById(_id);

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Update Post Service==========================================
services.updatePost = (req) =>
  new Promise(async (res, rej) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const post = await Post.findByIdAndUpdate(id, data, {
        new: true,
      });

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Delete Post Service==========================================
services.delete = (req) =>
  new Promise(async (res, rej) => {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);

      res("deleted Successfully");
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

//==========================================Get ALL Post Service==========================================
services.getAll = (_id, data) =>
  new Promise(async (res, rej) => {
    try {
      const post = await Post.find();

      res(post);
    } catch (e) {
      console.log(e);
      rej(e);
    }
  });

export default services;
