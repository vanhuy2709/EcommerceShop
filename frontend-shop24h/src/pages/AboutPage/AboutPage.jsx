import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { IoHomeOutline } from "react-icons/io5";

import AboutFirst from '../../components/AboutPage/AboutFirst';
import AboutSecond from '../../components/AboutPage/AboutSecond';
import AboutThird from '../../components/AboutPage/AboutThird';
import AboutFourth from '../../components/AboutPage/AboutFourth';
import Client from '../../components/HomePage/Client';
import AboutBrand from '../../components/AboutPage/AboutBrand';

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'About', url: '/about' },
]

const AboutPage = () => {
  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
      <Client />
      <AboutBrand />
    </>
  );
};

export default AboutPage;