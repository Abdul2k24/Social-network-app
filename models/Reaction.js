const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dataFormat');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);
module.exports = reactionSchema;