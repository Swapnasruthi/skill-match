const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Notification = require("../models/Notification");
const { protect } = require("../middleware/auth");

// @desc    Send connection request
// @route   POST /api/network/connect/:id
// @access  Private
router.post("/connect/:id", protect, async (req, res) => {
  try {
    // Check if user is trying to connect with themselves
    if (req.params.id === req.user.id) {
      return res.status(400).json({
        success: false,
        message: "You cannot connect with yourself",
      });
    }

    const targetUser = await User.findById(req.params.id);

    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if already connected
    if (targetUser.connections.includes(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: "Already connected with this user",
      });
    }

    // Check if connection request is already pending
    if (targetUser.pendingConnections.includes(req.user.id)) {
      return res.status(400).json({
        success: false,
        message: "Connection request already sent",
      });
    }

    // Add to pending connections
    targetUser.pendingConnections.push(req.user.id);
    await targetUser.save();

    // Create notification for connection request
    await Notification.create({
      recipient: req.params.id,
      sender: req.user.id,
      type: "connection_request",
      content: `${req.user.username} sent you a connection request`,
    });

    res.status(200).json({
      success: true,
      message: "Connection request sent",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Accept connection request
// @route   POST /api/network/accept/:id
// @access  Private
router.post("/accept/:id", protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);

    // Check if connection request exists
    if (!currentUser.pendingConnections.includes(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "No pending connection request from this user",
      });
    }

    const otherUser = await User.findById(req.params.id);

    if (!otherUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Remove from pending and add to connections (for both users)
    currentUser.pendingConnections = currentUser.pendingConnections.filter(
      (id) => id.toString() !== req.params.id
    );
    currentUser.connections.push(req.params.id);
    await currentUser.save();

    otherUser.connections.push(req.user.id);
    await otherUser.save();

    // Create notification for accepted connection
    await Notification.create({
      recipient: req.params.id,
      sender: req.user.id,
      type: "connection_accepted",
      content: `${req.user.username} accepted your connection request`,
    });

    res.status(200).json({
      success: true,
      message: "Connection request accepted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Reject connection request
// @route   POST /api/network/reject/:id
// @access  Private
router.post("/reject/:id", protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);

    // Check if connection request exists
    if (!currentUser.pendingConnections.includes(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "No pending connection request from this user",
      });
    }

    // Remove from pending connections
    currentUser.pendingConnections = currentUser.pendingConnections.filter(
      (id) => id.toString() !== req.params.id
    );
    await currentUser.save();

    res.status(200).json({
      success: true,
      message: "Connection request rejected",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Remove connection
// @route   DELETE /api/network/disconnect/:id
// @access  Private
router.delete("/disconnect/:id", protect, async (req, res) => {
  try {
    const currentUser = await User.findById(req.user.id);
    const otherUser = await User.findById(req.params.id);

    if (!otherUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if connected
    if (!currentUser.connections.includes(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Not connected with this user",
      });
    }

    // Remove from connections (for both users)
    currentUser.connections = currentUser.connections.filter(
      (id) => id.toString() !== req.params.id
    );
    await currentUser.save();

    otherUser.connections = otherUser.connections.filter(
      (id) => id.toString() !== req.user.id
    );
    await otherUser.save();

    res.status(200).json({
      success: true,
      message: "Connection removed",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get pending connection requests
// @route   GET /api/network/pending
// @access  Private
router.get("/pending", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate(
      "pendingConnections",
      "username profilePicture bio"
    );

    res.status(200).json({
      success: true,
      count: user.pendingConnections.length,
      data: user.pendingConnections,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get connection suggestions
// @route   GET /api/network/suggestions
// @access  Private
router.get("/suggestions", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    // Get users who are not already connected or have pending requests
    const excludedIds = [
      req.user.id,
      ...user.connections,
      ...user.pendingConnections,
    ];

    // Find users with similar skills (future enhancement)
    const suggestions = await User.find({
      _id: { $nin: excludedIds },
    })
      .select("username profilePicture bio skills")
      .limit(10);

    res.status(200).json({
      success: true,
      count: suggestions.length,
      data: suggestions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
