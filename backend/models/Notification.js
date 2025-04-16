const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  recipient: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    enum: [
      "connection_request",
      "message",
      "project_invite",
      "project_update",
      "connection_accepted",
      "system",
    ],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  relatedProject: {
    type: mongoose.Schema.ObjectId,
    ref: "Project",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create index for faster queries
NotificationSchema.index({ recipient: 1, read: 1 });

module.exports = mongoose.model("Notification", NotificationSchema);
