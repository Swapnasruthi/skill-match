import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    location: "",
    bio: "",
    skills: [],
  });

  const [currentSkill, setCurrentSkill] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [step, setStep] = useState(1); // 1: Basic Info, 2: Profile Info

  // Sample list of skills for selection
  const suggestedSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Python",
    "Java",
    "C#",
    "PHP",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "TypeScript",
    "Angular",
    "Vue.js",
    "Ruby",
    "Go",
    "Rust",
    "Swift",
    "Kotlin",
    "Flutter",
    "React Native",
    "GraphQL",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Check password match
    if (name === "confirmPassword") {
      setPasswordMatch(formData.password === value);
    } else if (name === "password") {
      setPasswordMatch(
        value === formData.confirmPassword || formData.confirmPassword === ""
      );
    }
  };

  const handleSkillAdd = () => {
    if (currentSkill && !formData.skills.includes(currentSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill],
      });
      setCurrentSkill("");
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const handleSuggestedSkill = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill],
      });
    }
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to register the user
    // For now, we'll just navigate to the login page
    console.log("Form data submitted:", formData);
    navigate("/login");
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-base-100 p-4">
      {/* Left side image */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="../images/signup_motion.gif"
          className="w-[40rem] h-[40rem]"
          alt="signup animation"
        />
      </div>

      {/* Right side form */}
      <div className="w-full max-w-xl lg:w-1/2 px-4">
        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body p-8">
            <h2 className="card-title text-2xl font-bold text-center mb-6">
              {step === 1 ? "Create Your Account" : "Complete Your Profile"}
            </h2>

            {/* Step indicator */}
            <div className="w-full flex mb-6">
              <div
                className={`h-1 flex-1 ${
                  step >= 1 ? "bg-secondary" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-1 flex-1 ${
                  step >= 2 ? "bg-secondary" : "bg-gray-300"
                }`}
              ></div>
            </div>

            {/* Step 1: Basic account info */}
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                {/* Username */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </g>
                    </svg>
                    <input
                      type="text"
                      name="username"
                      required
                      pattern="[A-Za-z][A-Za-z0-9\-]*"
                      minLength="3"
                      maxLength="30"
                      placeholder="Enter username"
                      className="flex-1"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      3-30 characters, letters, numbers, or dash
                    </span>
                  </label>
                </div>

                {/* Full Name */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      className="flex-1"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Email */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="email@example.com"
                      className="flex-1"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Password */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      type="password"
                      name="password"
                      required
                      minLength="6"
                      placeholder="Enter password"
                      className="flex-1"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Minimum 6 characters
                    </span>
                  </label>
                </div>

                {/* Confirm Password */}
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <label
                    className={`input input-bordered flex items-center gap-2 ${
                      !passwordMatch ? "input-error" : ""
                    }`}
                  >
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      placeholder="Confirm password"
                      className="flex-1"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </label>
                  {!passwordMatch && (
                    <label className="label">
                      <span className="label-text-alt text-error">
                        Passwords do not match
                      </span>
                    </label>
                  )}
                </div>

                <div className="form-control mt-4">
                  <button
                    type="submit"
                    className="btn btn-secondary text-white"
                    disabled={!passwordMatch}
                  >
                    Continue
                  </button>
                </div>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-secondary font-medium hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            )}

            {/* Step 2: Profile info */}
            {step === 2 && (
              <form onSubmit={handleSignup}>
                {/* Location */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      className="h-4 w-4 opacity-70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, Country"
                      className="flex-1"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Bio */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    name="bio"
                    placeholder="Tell us about yourself"
                    value={formData.bio}
                    onChange={handleChange}
                  ></textarea>
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Brief introduction about yourself and your expertise
                    </span>
                  </label>
                </div>

                {/* Skills */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Skills</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1"
                      placeholder="Add a skill"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), handleSkillAdd())
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-secondary text-white"
                      onClick={handleSkillAdd}
                    >
                      Add
                    </button>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="badge badge-secondary badge-lg gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleSkillRemove(skill)}
                          className="ml-1"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Suggested skills */}
                  <div className="mt-4">
                    <label className="label">
                      <span className="label-text-alt">Suggested skills:</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {suggestedSkills
                        .filter((skill) => !formData.skills.includes(skill))
                        .slice(0, 10)
                        .map((skill, index) => (
                          <div
                            key={index}
                            className="badge badge-outline hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSuggestedSkill(skill)}
                          >
                            {skill}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="form-control mt-6 flex-row gap-2">
                  <button
                    type="button"
                    className="btn btn-outline flex-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-secondary text-white flex-1"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
