
// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { MyContext } from "../../context/Context.jsx";
// import logo from "../../assets/logo.avif";
// import loginbackground from '../../assets/loginbackground.webp';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();
//   const { setIsHideSidebarAndHeader, login } = useContext(MyContext);



//   useEffect(() => {
//     setIsHideSidebarAndHeader(true); 
//     return () => setIsHideSidebarAndHeader(false);
//   }, [setIsHideSidebarAndHeader]);
  

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const currentPath = window.location.pathname;
//     if (token && currentPath !== "/") {
//       navigate("/");
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post("http://localhost:5000/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("user", JSON.stringify(response.data.result));

//       login(response.data.token, response.data.result);

//       navigate("/");
//     } catch (error) {
//       setErrorMessage(
//         error?.response?.data?.message ||
//           "Something went wrong, please try again later."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   return (
//     <div
//       className="loginWrapper"
//       style={{
//         backgroundImage: `url(${loginbackground})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="d-flex justify-content-center align-items-center"
//         style={{
//           width: 450,
//           height: 550,
//           backgroundColor: "rgba(255, 255, 255, 0.15)",
//           backdropFilter: "blur(15px)",
//           borderRadius: "15px",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//           padding: "20px",
//           color: "white",
//         }}
//       >
//         <div style={{ width: "100%" }}>
//           <div className="text-center">
//             <Link to="/" className="logoLogin">
//               <img src={logo} alt="Logo" />
//             </Link>
//           </div>

//           <h2 className="text-center" style={{ marginTop: "10px" }}>Login</h2>

//           {errorMessage && (
//             <div className="alert alert-danger text-center" role="alert">
//               {errorMessage}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email">
//                 <strong>Email</strong>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 autoComplete="off"
//                 name="email"
//                 className="form-control rounded-0"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password">
//                 <strong>Password</strong>
//               </label>
//               <input
//                 type="password"
//                 autoComplete="off"
//                 placeholder="Enter Your Password"
//                 name="password"
//                 className="form-control rounded-0"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100 rounded-0" disabled={isLoading}>
//               {isLoading ? "Logging in..." : "Login"}
//             </button>

//             <button
//               type="button"
//               onClick={() => navigate("/forgot-password")}
//               className="btn btn-link w-100 text-light mt-2"
//             >
//               Forgot Password?
//             </button>
//           </form>

//           <p className="mt-3 text-center text-light">
//             Don&apos;t have an account?{" "}
//             <Link to="/register" className="text-decoration-none text-white">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../context/Context.jsx";
import logo from "../../assets/logo.avif";
import loginbackground from '../../assets/loginbackground.webp';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setIsHideSidebarAndHeader, login } = useContext(MyContext);

  useEffect(() => {
    setIsHideSidebarAndHeader(true);
    return () => setIsHideSidebarAndHeader(false);
  }, [setIsHideSidebarAndHeader]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const currentPath = window.location.pathname;
    if (token && currentPath !== "/dashboard") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.result));

      login(response.data.token, response.data.result);

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Something went wrong, please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="loginWrapper"
      style={{
        backgroundImage: `url(${loginbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: 450,
          height: 550,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(15px)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          color: "white",
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="text-center">
            <Link to="/" className="logoLogin" >
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <h2 className="text-center" style={{ marginTop: "10px" }}>Login</h2>

          {errorMessage && (
            <div className="alert alert-danger text-center" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Enter Your Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-0" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="btn btn-link w-100 text-light mt-2"
            >
              Forgot Password?
            </button>
          </form>

          <p className="mt-3 text-center text-light">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-decoration-none text-white">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
