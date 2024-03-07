import deliveryTruckIcon from '../../assets/images/featured/delivery-truck-icon.svg';
import headphoneIcon from '../../assets/images/featured/headphones-icon.svg';
import packageIcon from '../../assets/images/featured/package-icon.svg';
import shoppingBagIcon from '../../assets/images/featured/shopping-bag-icon.svg';

const Services = () => {
  return (
    <div className='max-w-screen-xl mx-auto shadow-2xl border rounded-lg bg-white lg:translate-y-1/2'>
      <div className='grid lg:grid-cols-4'>

        {/* Component 1 */}
        <div className='p-10 border-b lg:border-r'>
          <img src={deliveryTruckIcon} alt='delivery-truck' className='mb-4' />
          <h4 className='text-gray-900 text-[18px] font-semibold leading-[27px] mb-2'>Free Shipping</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>Free shipping with discount</p>
        </div>
        {/* Component 2 */}
        <div className='p-10 border-b lg:border-r'>
          <img src={headphoneIcon} alt='delivery-truck' className='mb-4 w-10 h-10 object-cover' />
          <h4 className='text-gray-900 text-[18px] font-semibold leading-[27px] mb-2'>Great Support 24/7</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>Instant access to Contact</p>
        </div>
        {/* Component 3 */}
        <div className='p-10 border-b lg:border-r'>
          <img src={packageIcon} alt='delivery-truck' className='mb-4 w-10 h-10 object-cover' />
          <h4 className='text-gray-900 text-[18px] font-semibold leading-[27px] mb-2'>100% Sucure Payment</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>We ensure your money is save</p>
        </div>
        {/* Component 4 */}
        <div className='p-10'>
          <img src={shoppingBagIcon} alt='delivery-truck' className='mb-4 w-10 h-10 object-cover' />
          <h4 className='text-gray-900 text-[18px] font-semibold leading-[27px] mb-2'>Money-Back Guarantee</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>30 days money-back guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Services;