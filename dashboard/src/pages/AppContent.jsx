// import { useContext } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { MyContext } from "./context/Context.jsx";
// import Header from "./components/Header/Header.jsx";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import Login from "./pages/Login/Login.jsx";
// import Register from "./pages/Register/Register.jsx";
// import Dashboard from "./pages/Dashboard/Dashboard.jsx";

// function AppContent() {
//   const { isToggleSidebar, isHideSidebarAndHeader, isLoggedIn } = useContext(MyContext);

//   return (
//     <>
//       {!isHideSidebarAndHeader && <Header />}
//       <div className="main d-flex">
//         {!isHideSidebarAndHeader && (
//           <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
//             <Sidebar />
//           </div>
//         )}
//         <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {isLoggedIn ? (
//               <>
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 {/* Add your real protected routes here */}
//               </>
//             ) : (
//               <>
//                 <Route path="/" element={<Navigate to="/login" />} />
//                 <Route path="*" element={<Navigate to="/login" />} />
//               </>
//             )}
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AppContent;
