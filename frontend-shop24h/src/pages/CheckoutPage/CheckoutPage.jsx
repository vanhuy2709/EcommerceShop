import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { IoHomeOutline } from "react-icons/io5";
import BillInformation from '../../components/CheckoutPage/BillInformation';
import OrderSummary from '../../components/CheckoutPage/OrderSummary';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Shopping Cart', url: '/cart' },
  { name: 'Checkout', url: '/checkout' },
]

const CheckoutPage = () => {
  const navigate = useNavigate();
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  // If Login Failed -> Back to Checkout Page
  useEffect(() => {
    if (!storageUser) {
      navigate('/login');
    }
  }, [])

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <div className='max-w-screen-xl mx-auto px-4 mt-8 mb-20 flex flex-col lg:flex-row gap-6'>
        <BillInformation />
        <OrderSummary />
      </div>
    </>
  );
};

export default CheckoutPage;