// Import Components
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoHomeOutline } from "react-icons/io5";
import Sale from "../../components/ShopPage/Sale";
import Shop from "../../components/ShopPage/Shop";

// Breadcrumb variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Shop', url: '/shop' },
]

const ShopPage = () => {
  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <Sale />
      <Shop />
    </>
  );
};

export default ShopPage;