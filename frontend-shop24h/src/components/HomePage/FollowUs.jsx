import instagram1 from '../../assets/images/instagram/instagram-1.jfif';
import instagram2 from '../../assets/images/instagram/instagram-2.jfif';
import instagram3 from '../../assets/images/instagram/instagram-3.jfif';
import instagram4 from '../../assets/images/instagram/instagram-4.jfif';
import instagram5 from '../../assets/images/instagram/instagram-5.jfif';
import instagram6 from '../../assets/images/instagram/instagram-6.jfif';

const FollowUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-[100px]">
      <h2 className='text-gray-900 text-[32px] font-semibold leading-[39px] mb-8 text-center'>Follow us on Instagram</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6'>
        <img src={instagram1} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
        <img src={instagram2} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
        <img src={instagram3} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
        <img src={instagram4} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
        <img src={instagram5} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
        <img src={instagram6} alt='follow-us-instagram' className='w-full h-[200px] object-cover rounded-[10px]' />
      </div>
    </div>
  );
};

export default FollowUs;