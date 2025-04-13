const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a project title"],
    trim: true,
    maxlength: [100, "Project title cannot be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [1000, "Description cannot be more than 1000 characters"],
  },
  category: {
    type: String,
    required: [true, "Please select a category"],
    enum: [
      "Web Development",
      "Mobile App Development",
      "Machine Learning",
      "Data Science",
      "Cyber Security",
      "Blockchain",
      "Cloud Computing",
      "Game Development",
      "IoT (Internet of Things)",
      "Artificial Intelligence",
      "Augmented Reality (AR)",
      "Virtual Reality (VR)",
      "DevOps Projects",
      "Database Management",
      "Networking Projects",
      "Automation Projects",
      "E-commerce Projects",
      "Chatbot Development",
      "Healthcare Projects",
      "Finance & Banking Projects",
    ],
  },
  skillsRequired: [
    {
      type: String,
    },
  ],
  projectImage: {
    type: String,
    default: "default-project.jpg",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  collaborators: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  status: {
    type: String,
    enum: ["In Progress", "Completed", "On Hold", "Looking for Collaborators"],
    default: "Looking for Collaborators",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create project slug from the title
ProjectSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Project", ProjectSchema);
