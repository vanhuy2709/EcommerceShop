
const BoxMember = ({ userImage, userName, userJob }) => {

  return (
    <div className='bg-white border rounded-lg overflow-hidden'>
      <div className=''>
        <img src={userImage} alt='member-1' className='h-[280px] w-full object-top object-cover' />
      </div>

      <div className='px-5 py-4'>
        <h4 className='text-gray-900 text-[18px] font-medium leading-[27px] mb-1'>{userName}</h4>
        <p className='text-gray-500 text-[14px] leading-[21px]'>{userJob}</p>
      </div>
    </div>
  );
};

export default BoxMember;