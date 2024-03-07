import messageIcon from '../../assets/icons/message-icon.svg';
import starIcon from '../../assets/icons/star-icon.svg';

const BoxClient = ({ userAvatar, userName }) => {
  return (
    <div className='bg-white rounded-lg p-6 shadow-xl'>
      <img src={messageIcon} alt='message-icon' className='mb-4' />

      <p className='text-gray-700 text-[14px] leading-[21px] mb-4'>
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget
      </p>

      {/* User */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src={userAvatar} alt='user-avatar' className='w-14 h-14 object-cover rounded-full' />
          <div>
            <h4 className='text-gray-900 font-medium leading-6'>{userName}</h4>
            <p className='text-gray-400 text-[14px] leading-[21px]'>Customer</p>
          </div>
        </div>

        <div className='flex items-center'>
          <img src={starIcon} alt='star-icon' />
          <img src={starIcon} alt='star-icon' />
          <img src={starIcon} alt='star-icon' />
          <img src={starIcon} alt='star-icon' />
          <img src={starIcon} alt='star-icon' />
        </div>
      </div>
    </div>
  );
};

export default BoxClient;