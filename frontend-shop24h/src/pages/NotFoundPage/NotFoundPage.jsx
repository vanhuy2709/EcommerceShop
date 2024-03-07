import notFoundImage from '../../assets/images/404-page.png';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { IoHomeOutline } from "react-icons/io5";

const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: '404 Error Page', url: '/*' },
]

const NotFoundPage = () => {
  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />

      <div className='max-w-screen-xl mx-auto my-20'>
        <div className='flex flex-col items-center'>
          <img src={notFoundImage} alt='not-found-image' />
          <h2 className='text-gray-900 text-[40px] font-semibold leading-[48px] mb-5'>Oops! page not found</h2>
          <p className='text-gray-500 leading-6 text-center mb-6'>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
          <a href='/' className='text-white bg-[#00B207] text-[14px] font-semibold leading-4 px-8 py-[14px] rounded-full'>Back to Home</a>
        </div>
      </div>

    </>
  );
};

export default NotFoundPage;