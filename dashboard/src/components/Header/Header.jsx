
import { useContext, useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Settings, Logout } from "@mui/icons-material";
import { MdMenuOpen, MdOutlineMenu, MdLightMode, MdDarkMode } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MyContext } from "../../context/Context.jsx";
import Search from "../Search/Search";
import logo from "../../assets/logo.avif";
import userPlaceholder from "../../assets/userr.jpg";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
 
  const navigate = useNavigate();

  const {
    isLogin,
    setIsLogin,
    user,
    setUser,
    isToggleSidebar,
    setIsToggleSidebar,
    themeMode,
    setThemeMode,
  } = useContext(MyContext);

  // Load login state & user data
  useEffect(() => {
    const loginState = localStorage.getItem("isLogin") === "true";
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    setIsLogin(loginState);
    setUser(storedUser);
  }, [setIsLogin, setUser]);

  const handleOpenMenu = useCallback((event, setter) => setter(event.currentTarget), []);
  const handleCloseMenu = useCallback((setter) => setter(null), []);

  const handleLogout = useCallback(() => {
    ["isLogin", "token", "user"].forEach((key) => localStorage.removeItem(key));
    setIsLogin(false);
    setUser(null);
    handleCloseMenu(setAnchorEl);
    navigate("/login");
  }, [navigate, setIsLogin, setUser]);

  const handleThemeToggle = () => {
    setThemeMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };
  

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          {/* Logo */}
          <div className="col-6 col-sm-2">
            <Link to="/" className="d-flex align-items-center logo">
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
            <Button
              className="rounded-circle"
              onClick={handleThemeToggle}
              aria-label="Toggle Theme"
            >
              {themeMode==="dark" ? <MdDarkMode /> : <MdLightMode />}
            </Button>

            <Button className="rounded-circle" aria-label="Cart">
              <FaCartArrowDown />
            </Button>

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

            {/* Profile / Sign In */}
            {isLogin ? (
              <div className="account-box-wrapper">
                <Button
                  className="account-box d-flex align-items-center"
                  onClick={(e) => handleOpenMenu(e, setAnchorEl)}
                  aria-label="User Account"
                >
                  <Avatar src={user?.avatar || userPlaceholder} />
                  <div className="userInfo">
                    <h4>{user?.name || user?.fullName ||  "User"}</h4>
                    <p className="text-muted">@{user?.username || user?.email || "username"}</p>
                  </div>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => handleCloseMenu(setAnchorEl)}
                >
                  <MenuItem onClick={() => handleCloseMenu(setAnchorEl)}>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseMenu(setAnchorEl)}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleCloseMenu(setAnchorEl)}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="contained" size="small">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
