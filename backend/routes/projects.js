const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const { protect } = require("../middleware/auth");

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, featured, status, search } = req.query;
    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by featured
    if (featured) {
      query.featured = featured === "true";
    }

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Search by title or description
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const projects = await Project.find(query)
      .populate("user", "username profilePicture")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get featured projects
// @route   GET /api/projects/featured
// @access  Public
router.get("/featured", async (req, res) => {
  try {
    const projects = await Project.find({ featured: true })
      .populate("user", "username profilePicture")
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("user", "username profilePicture bio")
      .populate("collaborators", "username profilePicture");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Create new project
// @route   POST /api/projects
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Make sure user is project owner
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to update this project",
      });
    }

    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Make sure user is project owner
    if (project.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to delete this project",
      });
    }

    await project.remove();

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

// @desc    Like/Unlike a project
// @route   PUT /api/projects/:id/like
// @access  Private
router.put("/:id/like", protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Check if the project has already been liked by this user
    const alreadyLiked = project.likes.includes(req.user.id);

    if (alreadyLiked) {
      // Unlike
      project.likes = project.likes.filter(
        (like) => like.toString() !== req.user.id
      );
    } else {
      // Like
      project.likes.push(req.user.id);
    }

    await project.save();

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// @desc    Get user's projects
// @route   GET /api/projects/user/:userId
// @access  Public
router.get("/user/:userId", async (req, res) => {
  try {
    const projects = await Project.find({ user: req.params.userId }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
