import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { IoHomeOutline } from "react-icons/io5";

import Navigation from '../../components/MyAccountPage/Navigation';
import { Outlet } from 'react-router-dom';

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Account', url: '/account' },
  { name: 'Dashboard' },
]

const MyAccountPage = () => {

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <div className='max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row mt-8 mb-20 gap-6'>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default MyAccountPage;