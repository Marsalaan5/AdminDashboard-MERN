// // components/AuthenticatedLayout.jsx
// import Header from "../components/Header/Header";
// import Sidebar from "../components/Sidebar/Sidebar";
// import { useState } from "react";
// import PropTypes from "prop-types";

// function AuthLayout({ children }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <Header toggleSidebar={toggleSidebar} />
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             width: isSidebarOpen ? "250px" : "0",
//             transition: "width 0.3s",
//             overflow: "hidden",
//             height: "100vh",
//             position: "fixed",
//             top: "65px",
//             left: "0",
//           }}
//         >
//           <Sidebar isOpen={isSidebarOpen} />
//         </div>
//         <div style={{ marginLeft: isSidebarOpen ? "250px" : "0", transition: "margin-left 0.3s", width: "100%" }}>
//           {children}
//         </div>
//       </div>
//     </>
//   );
// }

// AuthLayout.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
  

// export default AuthLayout;
