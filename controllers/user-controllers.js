const { User } = require("../models");

const userController = {
    async getAllUser(req, res) {
        try {
        const user = await User.find({}).select("-_v").
        populate("thoughts").populate("friends");
        res.status(200).json(user);
        } catch(err)  {
          res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.id}).
            select("-_v").populate("thoughts").populate("friends");
            if (!user) {
                res.status(404).json("user not found");
                return;
            }
            res.status(200).json(user);
        }  catch(err)  {
            res.status(500).json(err);
        }
    },
        async createUser( req, res) {
          try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
          } catch (err) {
            res.status(500).json(err);
          }
        },
        async updateUser( req, res) {
            try {
              const updatedUser = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body, },
                { new: true }
              );
              if (!updatedUser) {
                res.status(404).json({ message: " User not found." });
                return;
              }
              res.status(200).json(updatedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          async deleteUser(req, res ) {
            try {
              const deletedUser = await User.findOneAndRemove({
                     _id: req.params.id 
              });
              if (!deletedUser) {
                return res.status(404).json({ message: 'user not found.' });
              }
              res.status(200).json(deletedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          async  addFriend(req, res) {
            try {
              const updatedUser = await User.findOneAndUpdate(
                { 
                    _id: params.id 
                },
                { $push: { friends: req.params.friendId } },
                { new: true }
              );
              if (!updatedUser) {
                res.status(404).json({ message: " User not found." });
                return;
              }
              await User.findByIdAndUpdate(
                { _id: req.params.friendId },
                { $push: { friends: req.params.friendId } },
                { new: true }
              );
              res.status(200).json(updatedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          },
          async  removeFriend(req, res) {
            try {
              const updatedUser = await User.findOneAndUpdate(
                { 
                    _id: params.id 
                },
                { $pull: { friends: req.params.friendId } },
                { new: true }
              );
              if (!updatedUser) {
                res.status(404).json({ message: " User not found." });
                return;
              }
              await User.findByIdAndUpdate(
                { _id: req.params.friendId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
              );
              res.status(200).json(updatedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          }
          
};

module.exports = userController;
