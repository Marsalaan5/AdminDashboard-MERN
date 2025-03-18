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
