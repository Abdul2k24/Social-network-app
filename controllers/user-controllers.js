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
        async createUser({ body }, res) {
          try {
            const newUser = await User.create(req.body);
            res.status(200).json(newUser);
          } catch (err) {
            res.status(500).json(err);
          }
        },
        async updateUser({ req, res }, res) {
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
              res.status(200).json(this.updatedUser);
            } catch (err) {
              res.status(500).json(err);
            }
          }
};

