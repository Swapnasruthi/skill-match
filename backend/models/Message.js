const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  recipient: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: [true, "Message cannot be empty"],
    trim: true,
    maxlength: [500, "Message cannot be more than 500 characters"],
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create index for faster queries
MessageSchema.index({ sender: 1, recipient: 1 });

module.exports = mongoose.model("Message", MessageSchema);
