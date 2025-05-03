// import { useContext,useState, useCallback } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Button,
//   Avatar,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import {
//   MdMenuOpen,
//   MdOutlineMenu,
//   MdLightMode,
//   MdDarkMode,
// } from "react-icons/md";
// import { FaCartArrowDown } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoIosNotifications } from "react-icons/io";
// import { MyContext } from "../../context/Context.jsx";
// import Search from "../Search/Search";
// import logo from "../../assets/logo.avif";
// import userPlaceholder from "../../assets/userr.jpg";

// function Header() {
 
//   const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

//   const navigate = useNavigate();

//   const { isToggleSidebar, setIsToggleSidebar, themeMode, setThemeMode,isLoggedIn, logout, user } =
//     useContext(MyContext);

    
//   const handleSignIn = () => navigate("/login");
//   const handleLogout = () => logout();

//   const handleOpenMenu = useCallback(
//     (event, setter) => setter(event.currentTarget),
//     []
//   );
//   const handleCloseMenu = useCallback((setter) => setter(null), []);

//   const handleThemeToggle = () => {
//     setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
//   };

//   return (
//     <header className="d-flex align-items-center">
//       <div className="container-fluid w-100">
//         <div className="row d-flex align-items-center w-100">
//           {/* Logo */}
//           <div className="col-6 col-sm-2">
//             <Link to="/" className="d-flex align-items-center logo">
//               <img src={logo} alt="Logo" />
//               <span className="ml-2">Connect</span>
//             </Link>
//           </div>

//           <div className="col-6 col-sm-3 d-flex align-items-center justify-content-between">
//             <Button
//               className="rounded-circle menu-btn"
//               onClick={() => setIsToggleSidebar(!isToggleSidebar)}
//               aria-label="Toggle Sidebar"
//             >
//               {isToggleSidebar ? <MdOutlineMenu /> : <MdMenuOpen />}
//             </Button>
//             <Search />
//           </div>

//           {/* Right-side Icons & Profile */}
//           <div className="col-6 col-sm-7 d-flex align-items-center justify-content-end gap-3">
//             <Button
//               className="rounded-circle"
//               onClick={handleThemeToggle}
//               aria-label="Toggle Theme"
//             >
//               {themeMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
//             </Button>

//             <Button className="rounded-circle" aria-label="Cart">
//               <FaCartArrowDown />
//             </Button>

//             <Button className="rounded-circle" aria-label="Email">
//               <MdEmail />
//             </Button>

//             {/* Notifications Dropdown */}
//             <div className="dropdown-wrapper-notification position-relative">
//               <Button
//                 className="rounded-circle"
//                 id="notification"
//                 onClick={(e) => handleOpenMenu(e, setNotificationAnchorEl)}
//                 aria-label="Notifications"
//               >
//                 <IoIosNotifications />
//               </Button>
//               <Menu
//                 anchorEl={notificationAnchorEl}
//                 open={Boolean(notificationAnchorEl)}
//                 onClose={() => handleCloseMenu(setNotificationAnchorEl)}
//               >
//                 <MenuItem
//                   onClick={() => handleCloseMenu(setNotificationAnchorEl)}
//                 >
//                   <div className="d-flex">
//                     <Avatar src={userPlaceholder} className="rounded-circle" />
//                     <div className="dropdownInfo">
//                       <h4>
//                         <b>Rashid</b> added to his favorite list{" "}
//                         <b>Leather belt Steve Madden</b>
//                       </h4>
//                       <p className="text-sec">few seconds ago</p>
//                     </div>
//                   </div>
//                 </MenuItem>
//                 <Button className="btn btn-primary w-100">
//                   View all Notifications
//                 </Button>
//               </Menu>
//             </div>

//             {isLoggedIn ? (
//            <div className="dropdown">
//            <button
//              className="btn btn-outline-secondary d-flex align-items-center gap-2 dropdown-toggle"
//              type="button"
//              id="dropdownUser"
//              data-bs-toggle="dropdown"
//              aria-expanded="false"
//            >
//              <img
//                src={userPlaceholder}
//                alt="User"
//                className="rounded-circle"
//                width="35"
//                height="35"
//              />
//              <span>
//                {user?.name
//                  .toLowerCase()
//                  .split(" ")
//                  .map(
//                    (word) => word.charAt(0).toUpperCase() + word.slice(1)
//                  )
//                  .join(" ") ||
//                  user?.email ||
//                  "User"}
//              </span>
//            </button>
//            <ul
//              className="dropdown-menu dropdown-menu-end"
//              aria-labelledby="dropdownUser"
//            >
//              <li>
//                <a className="dropdown-item" href="/profile">
//                  <i className="fas fa-user me-2"></i>Profile
//                </a>
//              </li>
//              <li>
//                <a className="dropdown-item" href="/settings">
//                  <i className="fas fa-cog me-2"></i>Settings
//                </a>
//              </li>
//              <li>
//                <hr className="dropdown-divider" />
//              </li>
//              <li>
//                <button
//                  className="dropdown-item text-danger"
//                  onClick={handleLogout}
//                >
//                  <i className="fas fa-sign-out-alt me-2"></i>Logout
//                </button>
//              </li>
//            </ul>
//          </div>
//        ) : (
//          <button className="btn btn-secondary" onClick={handleSignIn}>
//            SignIn
//          </button>
//        )}
//      </div>
//    </div>
//  </div>
//     </header>
//   );
// }

// export default Header;



import { useContext, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { MdMenuOpen, MdOutlineMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MyContext } from "../../context/Context.jsx";
import Search from "../Search/Search";
import logo from "../../assets/logo.avif";
import userPlaceholder from "../../assets/userr.jpg";

function Header() {
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const navigate = useNavigate();

  const {
    isToggleSidebar,
    setIsToggleSidebar,
    themeMode,
    setThemeMode,
    isLoggedIn,
    logout,
    user,
  } = useContext(MyContext);

  const handleSignIn = () => navigate("/login");
  const handleLogout = () => logout();

  const handleOpenMenu = useCallback((event, setter) => setter(event.currentTarget), []);
  const handleCloseMenu = useCallback((setter) => setter(null), []);

  const handleThemeToggle = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          {/* Logo */}
          <div className="col-6 col-sm-2">
            <Link to="/dashboard" className="d-flex align-items-center logo">
              <img src={logo} alt="Logo" />
              <span className="ml-2">Connect</span>
            </Link>
          </div>

          {/* Sidebar Toggle & Search */}
          <div className="col-6 col-sm-3 d-flex align-items-center justify-content-between">
            <Button
              className="rounded-circle menu-btn"
              onClick={() => setIsToggleSidebar(!isToggleSidebar)}
              aria-label="Toggle Sidebar"
            >
              {isToggleSidebar ? <MdOutlineMenu /> : <MdMenuOpen />}
            </Button>
            <Search />
          </div>

          {/* Right-side Icons & Profile */}
          <div className="col-6 col-sm-7 d-flex align-items-center justify-content-end gap-3">
            {/* Theme Toggle */}
            <Button
              className="rounded-circle"
              onClick={handleThemeToggle}
              aria-label="Toggle Theme"
            >
              {themeMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
            </Button>

            {/* Cart Button */}
            <Button className="rounded-circle" aria-label="Cart">
              <FaCartArrowDown />
            </Button>

            {/* Email Button */}
            <Button className="rounded-circle" aria-label="Email">
              <MdEmail />
            </Button>

            {/* Notifications Dropdown */}
            <div className="dropdown-wrapper-notification position-relative">
              <Button
                className="rounded-circle"
                id="notification"
                onClick={(e) => handleOpenMenu(e, setNotificationAnchorEl)}
                aria-label="Notifications"
              >
                <IoIosNotifications />
              </Button>
              <Menu
                anchorEl={notificationAnchorEl}
                open={Boolean(notificationAnchorEl)}
                onClose={() => handleCloseMenu(setNotificationAnchorEl)}
              >
                <MenuItem onClick={() => handleCloseMenu(setNotificationAnchorEl)}>
                  <div className="d-flex">
                    <Avatar src={userPlaceholder} className="rounded-circle" />
                    <div className="dropdownInfo">
                      <h4>
                        <b>Rashid</b> added to his favorite list{" "}
                        <b>Leather belt Steve Madden</b>
                      </h4>
                      <p className="text-sec">few seconds ago</p>
                    </div>
                  </div>
                </MenuItem>
                <Button className="btn btn-primary w-100">View all Notifications</Button>
              </Menu>
            </div>

            {/* User Profile or SignIn */}
            {isLoggedIn ? (
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary d-flex align-items-center gap-2 dropdown-toggle"
                  type="button"
                  id="dropdownUser"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={userPlaceholder}
                    alt="User"
                    className="rounded-circle"
                    width="35"
                    height="35"
                  />
                  <span>
                    {user?.name
                      ?.split(" ")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ") || user?.email || "User"}
                        {user?.role ? ` (${user.role})` : ""}
                  </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownUser">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      <i className="fas fa-user me-2"></i>Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/settings">
                      <i className="fas fa-cog me-2"></i>Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="fas fa-sign-out-alt me-2"></i>Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button className="btn btn-secondary" onClick={handleSignIn}>
                SignIn
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
