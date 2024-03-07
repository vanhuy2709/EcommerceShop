import { IoHomeOutline } from "react-icons/io5";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ListCart from "../../components/ShopCartPage/ListCart";

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Shopping Cart', url: '/cart' },
]

const ShopCartPage = () => {
  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <ListCart />
    </>
  );
};

export default ShopCartPage;