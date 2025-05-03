import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { MyContext } from "../../context/Context";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { MdPerson } from "react-icons/md";

function Sidebar() {
  const [activeTab, setActiveTab] = useState(null);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const context = useContext(MyContext);

  const handleSubmenuToggle = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu((prev) => (prev !== index ? index : null)); 
  };

  const menuItems = [
    {
      id: 0,
      label: "Dashboard",
      icon: <MdDashboard />,
      route: "/dashboard",
      submenu: [
        { label: "Analytics", route: "/analytics" },
        { label: "Sales", route: "/sale/view" },
      ],
    },
    {
      id: 1,
      label: "Products",
      icon: <FaProductHunt />,
      submenu: [
        { label: "Product List", route: "/productlist" },
        { label: "Product View", route: "/products_view" },
        { label: "Product Upload", route: "/products_upload" },
      ],
    },
    {
      id: 2,
      label: "Stocks",
      icon: <AiOutlineStock />,
      submenu: [
        { label: "Add Stock", route: "/addstocks" },
        { label: "Product List", route: "/product_list" },
      ],
    },
    {
      id: 3,
      label: "Sells",
      icon: <MdOutlineSell />,
      submenu: [
        { label: "New Sell", route: "/newsell" },
        { label: "Sell List", route: "/sell_list" },
        { label: "Sell Return List", route: "/sell_return" },
      ],
    },
    {
      id: 4,
      label: "Buy",
      icon: <BsCashCoin />,
      submenu: [
        { label: "New Buy", route: "/newbuy" },
        { label: "Buy List", route: "/buy_list" },
        { label: "Buy Refund List", route: "/buy_refund" },
      ],
    },
    { id: 5, label: "Supplier", icon: <MdPerson />, route: "/suppliers" },
    { id: 6, label: "Customer", icon: <MdPerson />, route: "/customers" },
    { id: 7, label: "Category", icon: <MdCategory />, route: "/category" },
    { id: 8, label: "Orders", icon: <FaShoppingCart />, route: "/orders" },
    { id: 9, label: "Messages", icon: <IoMdMail />, route: "/messages" },
    { id: 10, label: "Blogs", icon: <IoMdMail />, route: "/blogs" },
    {
      id: 11,
      label: "Notifications",
      icon: <IoNotifications />,
      route: "/notifications",
    },
    {
      id: 12,
      label: "Expense",
      icon: <IoSettingsSharp />,
      submenu: [
        { label: "New Expense", route: "/newexpense" },
        { label: "Expense List", route: "/expense_list" },
        { label: "Expense Category List", route: "/expense_category_list" },
      ],
    },
    { id: 13, label: "Staff", icon: <IoSettingsSharp />, route: "/staff" },
    {
      id: 14,
      label: "Settings",
      icon: <IoSettingsSharp />,
      // route: "/settings",
      submenu: [
        // { label: "Manage Role", route: "/manage_role" },
        { label: "Manage User", route: "/user_management" },
      ],
    },
  ];

  return (
    <>
      <div className="sidebar">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="libar">
              <Button
                className={`btn w-100 ${
                  activeTab === item.id && isToggleSubmenu === item.id
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSubmenuToggle(item.id)}
              >
                <span className="icon">{item.icon}</span>
                <Link to={item.route} className="menu-link">
                  {item.label}
                </Link>
                <span className="arrow">
                  <FaAngleRight />
                </span>
              </Button>

              {item.submenu &&
                activeTab === item.id &&
                isToggleSubmenu === item.id && (
                  <div
                    className={`submenuWrapper ${
                      isToggleSubmenu === item.id ? "colapse" : "colapsed"
                    }`}
                  >
                    <ul className="submenu">
                      {item.submenu.map((submenuItem, index) => (
                        <li key={index}>
                          <Link to={submenuItem.route} className="submenu-link">
                            {submenuItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
        </ul>

        <br />

        {context?.user && (
          <div className="logoutWrapper">
            <div className="logoutBox">
              <Button
                className="btn"
                variant="contained"
                onClick={context.logout}
              >
                <FiLogOut />
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
