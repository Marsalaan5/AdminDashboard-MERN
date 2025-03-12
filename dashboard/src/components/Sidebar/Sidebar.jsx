import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'; // Use react-router-dom Link for routing
import { useContext, useState } from 'react';
import { FiLogOut } from "react-icons/fi";
import { MyContext } from '../../context/Context';

function Sidebar() {
    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const handleSubmenuToggle = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu((prev) => prev !== index ? index : null);  // Toggle submenu based on index
    };

    // Define sidebar menu items with corresponding routes
    const menuItems = [
        { id: 0, label: "Dashboard", icon: <MdDashboard />, route: "/dashboard",submenu: [
            { label: "Analytics", route: "/analytics" },
            { label: "Sales", route: "/sale/view" },
        ] },
        { id: 1, label: "Products", icon: <FaProductHunt />, route: "/products", submenu: [
            { label: "Product List", route: "/products/list" },
            { label: "Product View", route: "/products/view" },
            { label: "Product Upload", route: "/products/upload" },
        ] },
        { id: 2, label: "Orders", icon: <FaShoppingCart />, route: "/orders" },
        { id: 3, label: "Messages", icon: <IoMdMail />, route: "/messages" },
        { id: 4, label: "Blogs", icon: <IoMdMail />, route: "/blogs" },
        { id: 5, label: "Notifications", icon: <IoNotifications />, route: "/notifications" },
        { id: 6, label: "Settings", icon: <IoSettingsSharp />, route: "/settings" },
    ];

    return (
        <>
            <div className="sidebar">
                <ul>
                    {menuItems.map((item) => (
                        <li key={item.id} className='libar'>
                            <Button
                                className={`btn w-100 ${activeTab === item.id && isToggleSubmenu === item.id ? 'active' : ''}`}
                                onClick={() => handleSubmenuToggle(item.id)}
                            >
                                <span className="icon">{item.icon}</span>
                                <Link to={item.route} className="menu-link">{item.label}</Link>
                                <span className="arrow"><FaAngleRight /></span>
                            </Button>
                            
                            {item.submenu && activeTab === item.id && isToggleSubmenu === item.id && (
                                <div className={`submenuWrapper ${isToggleSubmenu === item.id ? 'colapse' : 'colapsed'}`}>
                                    <ul className='submenu'>
                                        {item.submenu.map((submenuItem, index) => (
                                            <li key={index}>
                                                <Link to={submenuItem.route} className="submenu-link">{submenuItem.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <br />
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button className="btn" variant='contained'>
                            <FiLogOut />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;



// import Button from '@mui/material/Button';
// import { MdDashboard } from "react-icons/md";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaProductHunt } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { IoNotifications } from "react-icons/io5";
// import { IoSettingsSharp } from "react-icons/io5";
// import { Link } from '@mui/material';
// import { useContext, useState } from 'react';
// import { FiLogOut } from "react-icons/fi";
// import { MyContext } from '../../context/Context';

// function Sidebar() {

//     const [activeTab,setActiveTab] = useState(0)
//     const [isToggleSubmenu,setIsToggleSubmenu] = useState(false)
    
//     const context = useContext(MyContext)
// const isOpenSubMenu = (index) =>{
//     setActiveTab(index)
//     setIsToggleSubmenu(!isToggleSubmenu)

// }


//   return(
//      <>
//     <div className="sidebar">
//         <ul>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===0  && isToggleSubmenu === true ?  'active' : ''}`}  onClick={()=>isOpenSubMenu(0)} >
                
//                     <span className="icon"><MdDashboard /></span>
//                     Dashboard
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
                
//                 <Button className={`btn w-100 ${activeTab===1  && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(1)}>
                
//                     <span className="icon"><FaProductHunt /></span>
//                     Products
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>

//                 <ul className='submenu'>
//                     <li><Link to="/">Product List</Link></li>
//                     <li><Link to="/">Product View</Link></li>
//                     <li><Link to="/">Product Upload</Link></li>

//                 </ul>
//                 </div>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===2 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(2)} >
                
//                     <span className="icon"><FaShoppingCart /></span>
//                    Orders
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
//                     <span className="icon"><IoMdMail /></span>
//                     Messages
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
//                     <span className="icon"><IoMdMail /></span>
//                     Blogs
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(4)} >
                
//                     <span className="icon"><IoNotifications /></span>
//                     Notifications
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(5)}>
                
//                     <span className="icon"><IoSettingsSharp /></span>
//                     Setting
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===6 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(6)} >
                
//                     <span className="icon"><MdDashboard /></span>
//                     Dashboard
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===7 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(7)}  >
                
//                     <span className="icon"><FaProductHunt /></span>
//                     Products
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===8 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(8)}  >
                
//                     <span className="icon"><FaShoppingCart /></span>
//                    Orders
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===9 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(9)}  >
                
//                     <span className="icon"><IoMdMail /></span>
//                     Messages
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
//                     <span className="icon"><IoMdMail /></span>
//                     Blogs
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===10 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(10)}  >
                
//                     <span className="icon"><IoNotifications /></span>
//                     Notifications
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
//             <li className='libar'>
//                 <Link to="/">
//                 <Button className={`btn w-100 ${activeTab===11 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(11)}  >
                
//                     <span className="icon"><IoSettingsSharp /></span>
//                     Setting
//                     <span className="arrow"><FaAngleRight /></span>
//                 </Button>
//                 </Link>
//             </li>
           
//         </ul>

//         <br />
//         <div className="logoutWrapper">

// <div className="logoutBox">
//     <Button className="btn" variant='contained'><FiLogOut />
//          Logout
//     </Button>
// </div>
//         </div>

//     </div>
//   </>
//   )
// }

// export default Sidebar


// import Button from '@mui/material/Button';
// import { MdDashboard } from "react-icons/md";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaProductHunt } from "react-icons/fa6";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// import { IoNotifications } from "react-icons/io5";
// import { IoSettingsSharp } from "react-icons/io5";
// import { Link } from '@mui/material';
// import { useContext, useState } from 'react';
// import { FiLogOut } from "react-icons/fi";
// import { MyContext } from '../../context/Context';

// function Sidebar() {

//     const [activeTab, setActiveTab] = useState(null); // Track active tab
//     const [openSubmenu, setOpenSubmenu] = useState(null); // Track open submenu index

//     const isOpenSubMenu = (index) => {
//         if (openSubmenu === index) {
//             setOpenSubmenu(null); // If the same submenu is clicked, close it
//         } else {
//             setOpenSubmenu(index); // Otherwise, open the clicked submenu
//         }
//         setActiveTab(index); // Set the clicked tab as active
//     }

//     const context = useContext(MyContext)

//     return (
//         <>
//             <div className="sidebar">
//                 <ul>
//                     {/* Dashboard Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 0 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(0)}
//                             >
//                                 <span className="icon"><MdDashboard /></span>
//                                 Dashboard
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Products Tab with Submenu */}
//                     <li className='libar'>
//                         <Button
//                             className={`btn w-100 ${activeTab === 1 ? 'active' : ''}`}
//                             onClick={() => isOpenSubMenu(1)}
//                         >
//                             <span className="icon"><FaProductHunt /></span>
//                             Products
//                             <span className="arrow"><FaAngleRight /></span>
//                         </Button>
//                         <div className={`submenuWrapper ${openSubmenu === 1 ? 'colapse' : 'colapsed'}`}>
//                             <ul className='submenu'>
//                                 <li><Link to="/">Product List</Link></li>
//                                 <li><Link to="/">Product View</Link></li>
//                                 <li><Link to="/">Product Upload</Link></li>
//                             </ul>
//                         </div>
//                     </li>

//                     {/* Orders Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 2 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(2)}
//                             >
//                                 <span className="icon"><FaShoppingCart /></span>
//                                 Orders
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Messages Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 3 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(3)}
//                             >
//                                 <span className="icon"><IoMdMail /></span>
//                                 Messages
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Blogs Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 4 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(4)}
//                             >
//                                 <span className="icon"><IoMdMail /></span>
//                                 Blogs
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Notifications Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 5 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(5)}
//                             >
//                                 <span className="icon"><IoNotifications /></span>
//                                 Notifications
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Settings Tab */}
//                     <li className='libar'>
//                         <Link to="/">
//                             <Button
//                                 className={`btn w-100 ${activeTab === 6 ? 'active' : ''}`}
//                                 onClick={() => isOpenSubMenu(6)}
//                             >
//                                 <span className="icon"><IoSettingsSharp /></span>
//                                 Settings
//                                 <span className="arrow"><FaAngleRight /></span>
//                             </Button>
//                         </Link>
//                     </li>

//                     {/* Logout Section */}
//                     <br />
//                     <div className="logoutWrapper">
//                         <div className="logoutBox">
//                             <Button className="btn" variant='contained'>
//                                 <FiLogOut />
//                                 Logout
//                             </Button>
//                         </div>
//                     </div>

//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Sidebar
