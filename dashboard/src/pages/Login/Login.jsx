// import { useContext, useEffect } from "react";
// import logo from "../../assets/logo.avif";
// import { MyContext } from "../../context/Context";

// function Login() {

// const context = useContext(MyContext)

// useEffect(() => {
//   context.setIsHideSidebarAndHeader(true)

// },)


//   return (
//     <section className="loginWrapper">
//         <div className="loginBox">
//             <div className="logo text-center">
//                 <img src={logo} alt="" />
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Login


// import { useState,useEffect,useContext} from "react";
// import axios from "axios";
// import { useNavigate ,Link} from "react-router-dom";
// import { MyContext } from "../../context/Context";
// import logo from "../../assets/logo.avif";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);

//   const context = useContext(MyContext)

//   useEffect(() => {
//        context.setIsHideSidebarAndHeader(true)
    
//      },)

  
//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   if (token) {
//   //     navigate('/dashboard'); 
//   //   }
//   // }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage('');

//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token); 
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error?.response?.data?.message || 'Something went wrong, please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login'); 
//   };

//   return (

    
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-4 rounded shadow-lg w-25">
//  <div className="col-6 col-sm-2 part1">
//             <Link to="/" className="d-flex align-items-center logo">
//               <img src={logo} alt="Logo" />
//               <span className="ml-2">Connect</span>
//             </Link>
//           </div>
//         <h2 className="text-center text-primary">Login</h2>

       
//         {errorMessage && (
//           <div className="alert alert-danger text-center" role="alert">
//             {errorMessage}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Your Password"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100 rounded-0" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate('/forgot-password')}
//             className="btn btn-link w-100 text-primary mt-2"
//           >
//             Forgot Password?
//           </button>

//           {/* <h4 className="mt-3">Don't Have an account?</h4>
//           <button 
//             // type="button"
//             onClick={() => navigate('/register')}
//             className="btn btn-secondary w-100 rounded-0"
//           >
//             Sign Up
//           </button> */}
//         </form>

//            {/* Link to login page */}
//            <p className="mt-3 text-center">
//           Dont't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-decoration-none text-success"
//           >
//             SignUp
//           </Link>
//         </p>

       
      
//       </div>
//     </div>
//   );
// }

// export default Login;


// import { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { MyContext } from "../../context/Context";
// import logo from "../../assets/logo.avif";
// import loginbackground from '../../assets/loginbackground.webp'

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();
//   const context = useContext(MyContext);

//   useEffect(() => {
//     context.setIsHideSidebarAndHeader(true); // Hide Sidebar & Header when on Login page
//   }, [context]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage('');

//     try {
//       const response = await axios.post('http://localhost:5000/auth/login', { email, password });
//       localStorage.setItem('token', response.data.token); // Save token in localStorage
//       navigate('/'); // Redirect to home or dashboard after login
//     } catch (error) {
//       setErrorMessage(error?.response?.data?.message || 'Something went wrong, please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Effect to check if user is already logged in
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       navigate('/'); // Redirect to home if a token is present
//     }
//   }, [navigate]);

//   return (
//   <div
//     className="loginWrapper"
//     style={{
//       backgroundImage: `url(${loginbackground})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       // minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: 450,
//           height: 600,
//           backgroundColor: "rgba(255, 255, 255, 0.15)", // More transparent
//           backdropFilter: "blur(15px)", // Stronger glass effect
//           borderRadius: "15px",
//           border: "1px solid rgba(255, 255, 255, 0.3)",
//           boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
//           padding: "20px",
//     }}
//   >
        

//     <div className="d-flex justify-content-center align-items-center">
//       <div className="bg-white p-4 rounded shadow-lg" style={{width:450,height:550}}>
        
//           <Link to="/" className="logoLogin">
//             <img src={logo} alt="Logo" />
       
//           </Link>
        
//         <h2 className="text-center text-primary">Login</h2>

//         {errorMessage && (
//             <div className="alert alert-danger text-center" role="alert">
//             {errorMessage}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Your Password"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               />
//           </div>

//           <button type="submit" className="btn btn-primary w-100 rounded-0" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>

//           <button
//             type="button"
//             onClick={() => navigate('/forgot-password')}
//             className="btn btn-link w-100 text-primary mt-2"
//             >
//             Forgot Password?
//           </button>
//         </form>

//         {/* Link to registration page */}
//         <p className="mt-3 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-decoration-none text-success">
//             SignUp
//           </Link>
//         </p>
//       </div>
//     </div>
//               </div>
//   );
// }

// export default Login;



import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import logo from "../../assets/logo.avif";
import loginbackground from '../../assets/loginbackground.webp';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true); // Hide Sidebar & Header when on Login page
  }, [context]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/auth/login", { email, password });
      localStorage.setItem("token", response.data.token); // Save token in localStorage
      navigate("/"); // Redirect to home or dashboard after login
    } catch (error) {
      setErrorMessage(error?.response?.data?.message || "Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); // Redirect to home if a token is present
    }
  }, [navigate]);

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
          backgroundColor: "rgba(255, 255, 255, 0.15)", // Transparent glass effect
          backdropFilter: "blur(15px)", // Glassmorphism effect
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          color: "white",
        }}
      >
        <div style={{ width: "100%" }}>
          <div className="text-center">
            <Link to="/" className="logoLogin">
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

          {/* Link to registration page */}
          <p className="mt-3 text-center text-light">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none text-white">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
