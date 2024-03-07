import vegetable from '../../assets/images/deals/vegetable.png';
import manVegetable from '../../assets/images/deals/man-vegetable.png';
import Clock from '../TimeDeal/Clock';
import { useNavigate } from 'react-router-dom';

const Deals = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#EDF2EE] flex flex-col xl:flex-row items-center justify-around pt-20">
      {/* image 1 */}
      <div>
        <img src={vegetable} alt='vegetable' className='w-[521px] h-[308px] object-cover' />
      </div>

      {/* Info */}
      <div className='text-center'>
        <p className='text-[#00B207] font-medium uppercase leading-4 tracking-[0.32px] mb-3'>BEST DEALS</p>
        <h2 className='text-gray-900 text-[28px] md:text-[40px] font-semibold leading-[48px] mb-6'>Our Special Products<br />Deal of the Month</h2>
        {/* Time */}
        <Clock countdownTimestampMs={1711731600000} />

        <button
          className='text-white font-semibold leading-5 bg-[#00B207] py-4 px-10 rounded-full'
          onClick={() => navigate('/shop')}
        >
          Shop now
        </button>
      </div>

      {/* image 2 */}
      <div>
        <img src={manVegetable} alt='man-vegetable' className='w-[704px] h-[495px] object-cover' />
      </div>
    </div>
  );
};

export default Deals;