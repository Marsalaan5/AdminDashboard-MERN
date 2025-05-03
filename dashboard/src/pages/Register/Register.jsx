

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MyContext } from "../../context/Context";
import logo from "../../assets/logo.avif";
import loginbackground from "../../assets/loginbackground.webp";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [context]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/auth/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      className="registerWrapper"
      style={{
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="register-box"
        style={{
          width: 450,
          height: 600,
          backgroundColor: "rgba(255, 255, 255, 0.15)", // More transparent
          backdropFilter: "blur(15px)", // Stronger glass effect
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        <div className="text-center mb-3">
          <Link to="/" className="logoLogin">
            <img src={logo} alt="Logo" style={{ width: 100 }} />
          </Link>
        </div>

        <h2 className="text-center text-white">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* <div className="mb-3">
  <label htmlFor="role" className="form-label">
    <strong>Role</strong>
  </label>
  <select
    id="role"
    className="form-control rounded-0"
    value={role}
    onChange={(e) => setRole(e.target.value)}
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</div> */}


          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center text-light">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-white">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
