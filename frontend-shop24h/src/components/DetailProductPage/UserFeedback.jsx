import { Rate } from 'antd';

const UserFeedback = ({ comment }) => {

  return (
    <>
      <div className='py-4'>
        {/* Top */}
        <div className='flex justify-between items-center mb-3'>

          {/* User Info */}
          <div className='flex items-center gap-3'>
            <h4 className='font-medium text-gray-900'>
              {comment.user.name}
            </h4>
            <Rate value={comment.rating} disabled />
          </div>

          {/* Date */}
          <p className='text-gray-400'>
            {comment.createdAt.slice(0, 10)}
          </p>
        </div>

        {/* Bottom */}
        <div className='flex items-center justify-between'>
          <p className='text-gray-500'>
            {comment.message}
          </p>
        </div>

      </div>

      <hr />
    </>
  );
};

export default UserFeedback;