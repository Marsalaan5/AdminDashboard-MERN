

// import { useState,useEffect,useContext } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.avif";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "../../context/Context";
// import loginbackground from '../../assets/loginbackground.webp'


// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     if (!name || !email || !password) {
//       alert("Please fill all fields");
//       return;
//     }

//     axios
//       .post("http://localhost:5000/auth/register", { name, email, password })
//       .then((result) => {
//         console.log(result);
//         navigate("/login");
//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Something went wrong. Please try again.");
//       });
//   };

//     const context = useContext(MyContext);

//     useEffect(() => {
//       context.setIsHideSidebarAndHeader(true); 
//     }, [context]);

//   return (

//     <div className="registerWrapper"
//     style={{
//       backgroundImage: `url(${loginbackground})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       // height:"100%",
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       overflow:'hidden',
//     }}
//   >

//     <div className="d-flex justify-content-center align-items-center bg-red"
//     >
// <div
//   className="bg-white p-4 rounded shadow-lg"
//   style={{
//     width: 450,
//     height: 650,
//     backgroundColor: "rgba(255, 255, 255, 0.2)", // White with transparency
//     backdropFilter: "blur(10px)", // Glassmorphism effect
//     borderRadius: "10px",
//     border: "1px solid rgba(255, 255, 255, 0.3)", // Subtle border
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow
//   }}
// >

//       <Link to="/" className="logoLogin">
//             <img src={logo} alt="Logo" />
       
//           </Link>
        

//         <h2 className="text-center mb-4  text-primary">Sign Up</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Name input */}
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               autoComplete="off"
//               className="form-control rounded-0"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               />
//           </div>

//           {/* Email input */}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               autoComplete="off"
//               className="form-control rounded-0"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password input */}
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="form-control rounded-0"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               />
//           </div>

//           {/* Submit button */}
//           <button type="submit" className="btn btn-primary w-100 rounded-0">
//             Sign Up
//           </button>
//         </form>

//         {/* Link to login page */}
//         <p className="mt-3 text-center">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-decoration-none text-success"
//             >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//             </div>
//   );
// }

// export default Register;




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
          <Link to="/">
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
