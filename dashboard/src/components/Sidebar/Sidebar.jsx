

import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from '@mui/material';
import { useState } from 'react';
import { FiLogOut } from "react-icons/fi";

function Sidebar() {

    const [activeTab,setActiveTab] = useState(0)
    const [isToggleSubmenu,setIsToggleSubmenu] = useState(false)

const isOpenSubMenu = (index) =>{
    setActiveTab(index)
    setIsToggleSubmenu(!isToggleSubmenu)

}

  return(
     <>
    <div className="sidebar">
        <ul>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===0  && isToggleSubmenu === true ?  'active' : ''}`}  onClick={()=>isOpenSubMenu(0)} >
                
                    <span className="icon"><MdDashboard /></span>
                    Dashboard
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                
                <Button className={`btn w-100 ${activeTab===1  && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubMenu(1)}>
                
                    <span className="icon"><FaProductHunt /></span>
                    Products
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>

                <ul className='submenu'>
                    <li><Link to="/">Product List</Link></li>
                    <li><Link to="/">Product View</Link></li>
                    <li><Link to="/">Product Upload</Link></li>

                </ul>
                </div>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===2 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(2)} >
                
                    <span className="icon"><FaShoppingCart /></span>
                   Orders
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
                    <span className="icon"><IoMdMail /></span>
                    Messages
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
                    <span className="icon"><IoMdMail /></span>
                    Blogs
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===4 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(4)} >
                
                    <span className="icon"><IoNotifications /></span>
                    Notifications
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===5 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(5)}>
                
                    <span className="icon"><IoSettingsSharp /></span>
                    Setting
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===6 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(6)} >
                
                    <span className="icon"><MdDashboard /></span>
                    Dashboard
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===7 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(7)}  >
                
                    <span className="icon"><FaProductHunt /></span>
                    Products
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===8 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(8)}  >
                
                    <span className="icon"><FaShoppingCart /></span>
                   Orders
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===9 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(9)}  >
                
                    <span className="icon"><IoMdMail /></span>
                    Messages
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===3 ? 'active' : ''}`}  onClick={()=>isOpenSubMenu(3)} >
                
                    <span className="icon"><IoMdMail /></span>
                    Blogs
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===10 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(10)}  >
                
                    <span className="icon"><IoNotifications /></span>
                    Notifications
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
            <li className='libar'>
                <Link to="/">
                <Button className={`btn w-100 ${activeTab===11 ? 'active' : ''}`} onClick={()=>isOpenSubMenu(11)}  >
                
                    <span className="icon"><IoSettingsSharp /></span>
                    Setting
                    <span className="arrow"><FaAngleRight /></span>
                </Button>
                </Link>
            </li>
           
        </ul>

        <br />
        <div className="logoutWrapper">

<div className="logoutBox">
    <Button className="btn" variant='contained'><FiLogOut />
         Logout
    </Button>
</div>
        </div>

    </div>
  </>
  )
}

export default Sidebar