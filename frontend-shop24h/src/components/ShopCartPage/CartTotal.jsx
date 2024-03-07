import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  const navigate = useNavigate();
  const { subTotal } = useSelector(reduxData => reduxData.cartReducer);

  const handleNavigateCheckoutPage = () => {
    if (storageUser) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  }

  return (
    <div className='border rounded-lg p-6 flex flex-col'>
      <h4 className='text-gray-900 text-[20px] font-medium leading-[30px] mb-2'>Cart Total</h4>
      {/* Subtotal */}
      <div className='flex items-center justify-between py-3'>
        <p className="text-gray-700 text-[14px]">Subtotal:</p>
        <p className="text-gray-900 text-[14px] font-medium">${subTotal.toFixed(2)}</p>
      </div>

      {/* Shipping */}
      <div className='flex items-center justify-between py-3 border-t border-b'>
        <p className="text-gray-700 text-[14px]">Shipping:</p>
        <p className="text-gray-900 text-[14px] font-medium">Free</p>
      </div>

      {/* Total */}
      <div className='flex items-center justify-between py-3 mb-5'>
        <p className="text-gray-700 text-[14px]">Total:</p>
        <p className="text-gray-900 text-[16px] font-semibold">${subTotal.toFixed(2)}</p>
      </div>

      <button
        className='text-white bg-[#00B207] rounded-full font-semibold py-4 px-10'
        onClick={() => handleNavigateCheckoutPage()}
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;