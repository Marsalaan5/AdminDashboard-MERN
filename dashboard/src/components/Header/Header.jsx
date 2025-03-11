// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import logo from "../../assets/logo.avif";
// import user from "../../assets/user.jpg";
// import { MdMenuOpen } from "react-icons/md";
// import Search from "../Search/Search";
// // import { MdOutlineMenu } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";
// import { FaCartArrowDown } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoIosNotifications } from "react-icons/io";

// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";

// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

// function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isOpenNotification, setIsNotification] = useState(false);

//   const open = Boolean(anchorEl);
//   // const openMyAcc = Boolean(anchorEl)
//   const openNotifications = Boolean(isOpenNotification);

//   const handleOpenMyAccDr = (e) => {
//     setAnchorEl(e.currentTarget);
//   };
//   const handleCloseMyAccDr = () => {
//     setAnchorEl(null);
//   };

//   const handleOpenNotification = () => {
//     setIsNotification(true);
//   };
//   const handleCloseNotification = () => {
//     setIsNotification(false);
//   };

//   return (
//     <>
//       <header className="d-flex align-items-center">
//         <div className="container-fluid w-100">
//           <div className="row d-flex align-items-center w-100">
//             {/* logo wrapper */}
//             <div className="col-sm-2 part1">
//               <Link to="/" className="d-flex align-items-center logo">
//                 <img src={logo} />
//                 <span className="ml-2">Connect</span>
//               </Link>
//             </div>

//             <div className="col-sm-3 d-flex align-items-center part2 pl-4">
//               <Button className="rounded-circle mr-3">
//                 <MdMenuOpen />
//               </Button>
//               <Search />
//             </div>

//             <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4 gap-2">
//               <Button className="rounded-circle mr-3">
//                 <MdLightMode />
//               </Button>
//               <Button className="rounded-circle mr-3">
//                 <MdDarkMode />
//               </Button>

//               <Button
//                 className="rounded-circle mr-3"
//                 onClick={handleCloseMyAccDr}
//               >
//                 <FaCartArrowDown />
//               </Button>

//               <Button className="rounded-circle mr-3">
//                 <MdEmail />
//               </Button>

//               <div className="dropdown-wrapper-notification position-relative">
//                 <Button
//                   className="rounded-circle mr-3"
//                   onClick={handleOpenNotification}
//                 >
//                   <IoIosNotifications />
//                 </Button>
//                 <Menu
//                   anchorEl={isOpenNotification}
//                   className="dropdown_list"
//                   id="notifications"
//                   open={openNotifications}
//                   onClose={handleCloseNotification}
//                   onClick={handleCloseNotification}
//                 >
//                   <div className="head">
//                     <h6>Order (12)</h6>
//                   </div>

//                   <div className="scroll">
//                     <MenuItem onClick={handleCloseNotification}>
//                       <div className="d-flex">
//                         <div className="account-box-img">
//                           <span className="rounded-circle">
//                             <img src={user} alt="avatar" />
//                           </span>
//                         </div>
//                       </div>

//                       <div className="dropdownInfo">
//                         <h4>
//                           <span>
//                             <b>Rashid</b>added to his favorite list{" "}
//                             <b>Leather belt Steve Madden</b>
//                           </span>
//                         </h4>
//                         <p className="text-sec">few seconds ago</p>
//                       </div>
//                     </MenuItem>

//                     <Divider className="mb-0" />

//                     <MenuItem onClick={handleCloseNotification}>
//                       <div className="d-flex">
//                         <div className="account-box-img">
//                           <span className="rounded-circle">
//                             <img src={user} alt="avatar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="dropdownInfo">
//                         <h4>
//                           <span>
//                             <b>Rashid</b>added to his favorite list{" "}
//                             <b>Leather belt Steve Madden</b>
//                           </span>
//                         </h4>
//                         <p className="text-sec">few seconds ago</p>
//                       </div>
//                       Order (2)
//                     </MenuItem>

//                     <Divider className="mb-0" />

//                     <MenuItem onClick={handleCloseNotification}>
//                       <div className="d-flex">
//                         <div className="account-box-img">
//                           <span className="rounded-circle">
//                             <img src={user} alt="avatar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="dropdownInfo">
//                         <h4>
//                           <span>
//                             <b>Rashid</b>added to his favorite list{" "}
//                             <b>Leather belt Steve Madden</b>
//                           </span>
//                         </h4>
//                         <p className="text-sec">few seconds ago</p>
//                       </div>
//                       Order (3)
//                     </MenuItem>

//                     <Divider className="mb-0" />

//                     <MenuItem onClick={handleCloseNotification}>
//                       <div className="d-flex">
//                         <div className="account-box-img">
//                           <span className="rounded-circle">
//                             <img src={user} alt="avatar" />
//                           </span>
//                         </div>
//                       </div>
//                       <div className="dropdownInfo">
//                         <h4>
//                           <span>
//                             <b>Rashid</b>added to his favorite list{" "}
//                             <b>Leather belt Steve Madden</b>
//                           </span>
//                         </h4>
//                         <p className="text-sec">few seconds ago</p>
//                       </div>
//                       Order (4)
//                     </MenuItem>

//                     <Button className="btn btn-primary w-100">
//                       View all Notifications
//                     </Button>
//                   </div>
//                 </Menu>
//               </div>

//               <div className="account-box-wrapper">
//                 <Button
//                   className="account-box d-flex align-items-center"
//                   onClick={handleOpenMyAccDr}
//                 >
//                   <div className="account-box-img">
//                     <span className="rounded-circle">
//                       <img src={user} alt="avatar" />
//                     </span>
//                   </div>

//                   <div className="userInfo">
//                     <h4>Mohammad Rashid</h4>
//                     <p className="text-muted">@rashid5</p>
//                   </div>
//                 </Button>

//                 <Menu
//                   anchorEl={anchorEl}
//                   id="account-menu"
//                   open={open}
//                   onClose={handleCloseMyAccDr}
//                   onClick={handleCloseMyAccDr}
//                   slotProps={{
//                     paper: {
//                       elevation: 0,
//                       sx: {
//                         overflow: "visible",
//                         filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//                         mt: 1.5,
//                         "& .MuiAvatar-root": {
//                           width: 32,
//                           height: 32,
//                           ml: -0.5,
//                           mr: 1,
//                         },
//                         "&::before": {
//                           content: '""',
//                           display: "block",
//                           position: "absolute",
//                           top: 0,
//                           right: 14,
//                           width: 10,
//                           height: 10,
//                           bgcolor: "background.paper",
//                           transform: "translateY(-50%) rotate(45deg)",
//                           zIndex: 0,
//                         },
//                       },
//                     },
//                   }}
//                   transformOrigin={{ horizontal: "right", vertical: "top" }}
//                   anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//                 >
//                   <MenuItem onClick={handleCloseMyAccDr}>
//                     <Avatar /> Profile
//                   </MenuItem>
//                   <MenuItem onClick={handleCloseMyAccDr}>
//                     <Avatar /> My account
//                   </MenuItem>
//                   <Divider />

//                   <MenuItem onClick={handleCloseMyAccDr}>
//                     <ListItemIcon>
//                       <Settings fontSize="small" />
//                     </ListItemIcon>
//                     Settings
//                   </MenuItem>

//                   <MenuItem onClick={handleCloseMyAccDr}>
//                     <ListItemIcon>
//                       <Logout fontSize="small" />
//                     </ListItemIcon>
//                     Logout
//                   </MenuItem>
//                 </Menu>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }
// export default Header;




// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import logo from "../../assets/logo.avif";
// import user from "../../assets/user.jpg";
// import { MdMenuOpen } from "react-icons/md";
// import Search from "../Search/Search";
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { FaCartArrowDown } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoIosNotifications } from "react-icons/io";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";
// import { MyContext } from "../../context/Context.jsx"; 

// import { MdOutlineMenuOpen } from "react-icons/md";


// function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isOpenNotification, setIsNotification] = useState(false);

//   const open = Boolean(anchorEl);
//   const openNotifications = Boolean(isOpenNotification);

//   const context = useContext(MyContext)

//   const handleOpenMyAccDr = (e) => {
//     setAnchorEl(e.currentTarget);
//   };
//   const handleCloseMyAccDr = () => {
//     setAnchorEl(null);
//   };

//   const handleOpenNotification = (e) => {
//     setIsNotification(e.currentTarget);
//   };
//   const handleCloseNotification = () => {
//     setIsNotification(null);
//   };

//   return (
//     <header className="d-flex align-items-center">
//       <div className="container-fluid w-100">
//         <div className="row d-flex align-items-center w-100">
//           {/* logo wrapper */}
//           <div className="col-6 col-sm-2 part1">
//             <Link to="/" className="d-flex align-items-center logo">
//               <img src={logo} alt="Logo" />
//               <span className="ml-2">Connect</span>
//             </Link>
//           </div>

//           {/* Menu button and search */}
//           <div className="col-6 col-sm-3 d-flex align-items-center justify-content-between part2">
//             <Button className="rounded-circle mr-3 menu-btn" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)} aria-label="Toggle-Sidebar">
//               { context.isToggleSidebar ?  <MdOutlineMenuOpen /> : <MdMenuOpen /> }
             
//             </Button>
//             <Search />
//           </div>

//           {/* Notifications, Cart, and Account info */}
//           <div className="col-6 col-sm-7 d-flex align-items-center justify-content-end part3 pl-4 gap-2">
//             <Button className="rounded-circle mr-3">
//               <MdLightMode />
//             </Button>
//             <Button className="rounded-circle mr-3">
//               <MdDarkMode />
//             </Button>

//             <Button className="rounded-circle mr-3">
//               <FaCartArrowDown />
//             </Button>

//             <Button className="rounded-circle mr-3">
//               <MdEmail />
//             </Button>

//             {/* Notifications dropdown */}
//             <div className="dropdown-wrapper-notification position-relative">
//               <Button
//                 className="rounded-circle mr-3"
//                 onClick={handleOpenNotification}
//               >
//                 <IoIosNotifications />
//               </Button>
//               <Menu
//                 anchorEl={isOpenNotification}
//                 id="notifications"
//                 open={openNotifications}
//                 onClose={handleCloseNotification}
//                 onClick={handleCloseNotification}
//               >
//                 {/* Notification items */}
//                 <MenuItem onClick={handleCloseNotification}>
//                   <div className="d-flex">
//                     <div className="account-box-img">
//                       <span className="rounded-circle">
//                         <img src={user} alt="avatar" />
//                       </span>
//                     </div>
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

//             {/* User account dropdown */}
//             <div className="account-box-wrapper">
//               <Button
//                 className="account-box d-flex align-items-center"
//                 onClick={handleOpenMyAccDr}
//               >
//                 <div className="account-box-img">
//                   <span className="rounded-circle">
//                     <img src={user} alt="avatar" />
//                   </span>
//                 </div>
//                 <div className="userInfo">
//                   <h4>Mohammad Rashid</h4>
//                   <p className="text-muted">@rashid5</p>
//                 </div>
//               </Button>

//               <Menu
//               className="dropdown-info"
//                 anchorEl={anchorEl}
//                 id="account-menu"
//                 open={open}
//                 onClose={handleCloseMyAccDr}
//                 onClick={handleCloseMyAccDr}
//               >
//                 <MenuItem onClick={handleCloseMyAccDr}>
//                   <Avatar /> Profile
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseMyAccDr}>
//                   <Avatar /> My account
//                 </MenuItem>
//                 <Divider />
//                 <MenuItem onClick={handleCloseMyAccDr}>
//                   <ListItemIcon>
//                     <Settings fontSize="small" />
//                   </ListItemIcon>
//                   Settings
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseMyAccDr}>
//                   <ListItemIcon>
//                     <Logout fontSize="small" />
//                   </ListItemIcon>
//                   Logout
//                 </MenuItem>
//               </Menu>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.avif";
import user from "../../assets/user.jpg";
import { MdMenuOpen } from "react-icons/md";
import Search from "../Search/Search";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { MyContext } from "../../context/Context.jsx"; 
import { MdOutlineMenu } from "react-icons/md";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotification, setIsNotification] = useState(false);

  const open = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotification);

  const context = useContext(MyContext)

    useEffect(() => {
  
    if (context.isToggleSidebar) {
      console.log("Sidebar is open!");
    } else {
      console.log("Sidebar is closed!");
    }
  }, [context.isToggleSidebar]);

  

  const handleOpenMyAccDr = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };

  const handleOpenNotification = (e) => {
    setIsNotification(e.currentTarget);
  };
  const handleCloseNotification = () => {
    setIsNotification(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          {/* Logo wrapper */}
          <div className="col-6 col-sm-2 part1">
            <Link to="/" className="d-flex align-items-center logo">
              <img src={logo} alt="Logo" />
              <span className="ml-2">Connect</span>
            </Link>
          </div>

          {/* Menu button and search */}
          <div className="col-6 col-sm-3 d-flex align-items-center justify-content-between part2">
            <Button
              className="rounded-circle mr-3 menu-btn"
              onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}
              aria-label="Toggle Sidebar"
            >
              {context.isToggleSidebar ? <MdOutlineMenu /> : <MdMenuOpen /> }
            </Button>
            <Search />
          </div>

          {/* Notifications, Cart, and Account info */}
          <div className="col-6 col-sm-7 d-flex align-items-center justify-content-end part3 pl-4 gap-2">
            <Button className="rounded-circle mr-3" aria-label="Light Mode">
              <MdLightMode />
            </Button>
            <Button className="rounded-circle mr-3" aria-label="Dark Mode">
              <MdDarkMode />
            </Button>

            <Button className="rounded-circle mr-3" aria-label="Cart">
              <FaCartArrowDown />
            </Button>

            <Button className="rounded-circle mr-3" aria-label="Email">
              <MdEmail />
            </Button>

            {/* Notifications dropdown */}
            <div className="dropdown-wrapper-notification position-relative">
              <Button
                className="rounded-circle mr-3"
                onClick={handleOpenNotification}
                aria-label="Notifications"
              >
                <IoIosNotifications />
              </Button>
              <Menu
                anchorEl={isOpenNotification}
                id="notifications"
                open={openNotifications}
                onClose={handleCloseNotification}
                onClick={handleCloseNotification}
              >
                {/* Notification items */}
                <MenuItem onClick={handleCloseNotification}>
                  <div className="d-flex">
                    <div className="account-box-img">
                      <span className="rounded-circle">
                        <img src={user} alt="avatar" />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Rashid</b> added to his favorite list{" "}
                        <b>Leather belt Steve Madden</b>
                      </h4>
                      <p className="text-sec">few seconds ago</p>
                    </div>
                  </div>
                </MenuItem>
                <Button className="btn btn-primary w-100">
                  View all Notifications
                </Button>
              </Menu>
            </div>

            {/* User account dropdown */}
            <div className="account-box-wrapper">
              <Button
                className="account-box d-flex align-items-center"
                onClick={handleOpenMyAccDr}
                aria-label="User Account"
              >
                <div className="account-box-img">
                  <span className="rounded-circle">
                    <img src={user} alt="avatar" />
                  </span>
                </div>
                <div className="userInfo">
                  <h4>Mohammad Rashid</h4>
                  <p className="text-muted">@rashid5</p>
                </div>
              </Button>

              <Menu
                className="dropdown-info"
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleCloseMyAccDr}
                onClick={handleCloseMyAccDr}
              >
                <MenuItem onClick={handleCloseMyAccDr}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDr}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseMyAccDr}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleCloseMyAccDr}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
