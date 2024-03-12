import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { listMenu } from '../../../data/menu';

import locationIcon from '../../../assets/icons/location-icon.svg';
import logoWebsite from '../../../assets/images/logo-website.svg';
import searchIcon from '../../../assets/icons/search-icon.svg'
import phoneIcon from '../../../assets/icons/phone-icon.svg';
import BadgeCart from "../../Cart/BadgeCart";
import { Button, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Appbar
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  // Appbar
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const navigate = useNavigate();
  const { subTotal } = useSelector(reduxData => reduxData.cartReducer);
  const [isOpen, setIsOpen] = useState(false);

  // Popover
  const [open, setOpen] = useState(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  // Navigate Home Page
  const handleNavigateHomePage = () => {
    navigate('/');
  }

  // Logout
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  }

  return (
    <>
      {/* Top Navbar */}
      <div className='max-w-screen-xl mx-auto py-3 px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src={locationIcon} alt='location-icon' />
            <p className='text-gray-600 text-xs'>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
          </div>

          <div>

            {
              storageUser ?
                (<Popover
                  trigger="click"
                  content={
                    <div className="flex flex-col">
                      <NavLink to='/account' className='pb-2'>My Account</NavLink>
                      {
                        storageUser.user.isAdmin ?
                          (<NavLink to='/admin' className='py-2'>Admin Dashboard</NavLink>)
                          :
                          (<></>)
                      }
                      <Button danger onClick={handleLogout}>Logout</Button>
                    </div>
                  }
                  placement="bottomRight"
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                  <UserOutlined />
                </Popover>)
                :
                (<>
                  <NavLink to='/login' className='text-gray-600 text-xs'>Sign In</NavLink>
                  <span className='text-gray-600 text-xs'> / </span>
                  <NavLink to='/signup' className='text-gray-600 text-xs'>Sign Up</NavLink>
                </>)
            }

          </div>


        </div>
      </div>

      <hr />

      {/* Middle Navbar */}
      <nav className='max-w-screen-xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center mt-4'>
        <div className='flex gap-2 mb-4 cursor-pointer' onClick={() => handleNavigateHomePage()}>
          <img src={logoWebsite} alt='logo-website' />
          <h2 className='text-gray-900 text-[32px] font-medium leading-[38px]'>Ecobazar</h2>
        </div>
        {/* <div className='flex mb-4'>
          <div className='flex items-center gap-2 border border-r-0 rounded-l pl-4 pr-[18px]'>
            <img src={searchIcon} alt='search-icon' />
            <input type='text' placeholder='Search' className='text-gray-500 text-[15px] leading-[21px] outline-none' />
          </div>
          <button className='text-white text-[14px] font-semibold leading-4 bg-[#00B207] py-[14px] px-6 rounded-r'>Search</button>
        </div> */}
        <div className='flex items-center mb-4 gap-3'>
          <BadgeCart />
          <div>
            <p className='text-gray-700 text-[11px]'>Shopping cart:</p>
            <p className='text-gray-900 text-[14px] font-medium leading-[14px]'>
              ${subTotal.toFixed(2) || 0}
            </p>
          </div>
        </div>
      </nav>

      {/* Menu Navbar */}
      <nav className='bg-[#333333] px-4 md:py-4'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center relative md:px-4'>
          <button
            className='flex items-center justify-center px-2 py-2 md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>

          <ul className='hidden md:flex items-center gap-8 bg-[#333333] z-10'>
            {listMenu.map(menu => (
              <li key={menu.id}>
                <NavLink to={menu.path} className='text-gray-400 hover:text-white text-[14px] font-medium leading-[21px]'>{menu.name}</NavLink>
              </li>
            ))}
          </ul>

          {isOpen ?
            (<ul className='absolute top-9 w-full rounded py-2 px-2 md:relative md:flex md:items-center md:top-0 md:gap-8 bg-[#333333] md:w-max'>
              {listMenu.map(menu => (
                <li key={menu.id} className="my-2">
                  <NavLink
                    to={menu.path}
                    className='text-gray-400 hover:text-white text-[14px] font-medium leading-[21px]'
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>) : (<></>)}


          <div className='flex items-center gap-2'>
            <img src={phoneIcon} alt='phone-icon' />
            <p className='text-white text-[14px] font-medium leading-[21px]'>(219) 555-0114</p>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;