const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const User = require("../models/User");
const Notification = require("../models/Notification");
const { protect } = require("../middleware/auth");

// @desc    Get conversations
// @route   GET /api/messages
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    // Find all users the current user has exchanged messages with
    const conversations = await Message.aggregate([
      {
        $match: {
          $or: [{ sender: req.user._id }, { recipient: req.user._id }],
        },
      },
      {
        $sort: { createdAt: -1 },
      },
      {
        $group: {
          _id: {
            $cond: [
              { $eq: ["$sender", req.user._id] },
              "$recipient",
              "$sender",
            ],
          },
          lastMessage: { $first: "$$ROOT" },
          unreadCount: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ["$recipient", req.user._id] },
                    { $eq: ["$read", false] },
                  ],
                },
                1,
                0,
              ],
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          lastMessage: 1,
          unreadCount: 1,
          "user.username": 1,
          "user.profilePicture": 1,
        },
      },
      {
        $sort: { "lastMessage.createdAt": -1 },
      },
    ]);

    res.status(200).json({
      success: true,
      count: conversations.length,
      data: conversations,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get messages with a specific user
// @route   GET /api/messages/:userId
// @access  Private
router.get("/:userId", protect, async (req, res) => {
  try {
    // Verify the user exists
    const otherUser = await User.findById(req.params.userId);

    if (!otherUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Get messages between the two users
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, recipient: req.params.userId },
        { sender: req.params.userId, recipient: req.user.id },
      ],
    }).sort({ createdAt: 1 });

    // Mark received messages as read
    await Message.updateMany(
      { sender: req.params.userId, recipient: req.user.id, read: false },
      { read: true }
    );

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Send a message
// @route   POST /api/messages/:userId
// @access  Private
router.post("/:userId", protect, async (req, res) => {
  try {
    const { content } = req.body;
    const recipient = req.params.userId;

    // Check if recipient exists
    const recipientUser = await User.findById(recipient);

    if (!recipientUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create message
    const message = await Message.create({
      sender: req.user.id,
      recipient,
      content,
    });

    // Create notification for new message
    await Notification.create({
      recipient,
      sender: req.user.id,
      type: "message",
      content: `New message from ${req.user.username}`,
    });

    res.status(201).json({
      success: true,
      data: message,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Delete a message
// @route   DELETE /api/messages/:messageId
// @access  Private
router.delete("/:messageId", protect, async (req, res) => {
  try {
    const message = await Message.findById(req.params.messageId);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    // Check if the user is the sender of the message
    if (message.sender.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this message",
      });
    }

    await message.remove();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Mark all messages as read
// @route   PUT /api/messages/:userId/read
// @access  Private
router.put("/:userId/read", protect, async (req, res) => {
  try {
    await Message.updateMany(
      { sender: req.params.userId, recipient: req.user.id, read: false },
      { read: true }
    );

    res.status(200).json({
      success: true,
      message: "Messages marked as read",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
