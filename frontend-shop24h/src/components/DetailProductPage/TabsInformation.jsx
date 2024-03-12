import { Tabs } from 'antd';
import { Pagination } from '@mui/material';
import '../../styles/tabs.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserFeedback from './UserFeedback';
import CreateComment from './CreateComment';

// Action
import { getCommentsByProductAction } from '../../store/actions/user/apiRequest.action';

const TabsInformation = ({ product }) => {
  const dispatch = useDispatch();
  const { listCommentProduct } = useSelector(reduxData => reduxData.commentReducer);
  const { pending, listComment, isError } = listCommentProduct;

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 3;

  console.log('check list comment: ', listComment);

  if (product) {
    useEffect(() => {
      dispatch(getCommentsByProductAction(product?._id, page, limit))
    }, [page])
  }

  const items = [
    {
      key: '1',
      label: (<p className='font-[Poppins] text-[1rem] font-medium'>Description</p>),
      children: (
        <div dangerouslySetInnerHTML={{ __html: product?.richDescription }}></div>
      ),
    },
    {
      key: '2',
      label: (<p className='font-[Poppins] text-[1rem] font-medium'>Additional Information</p>),
      children: (
        <div className='flex gap-6 items-center'>
          <div className='font-[Poppins] text-[14px] text-gray-900'>
            <p className='mb-3'>Brand:</p>
            <p className='mb-3'>Category:</p>
            <p className='mb-3'>Stock Status:</p>
          </div>

          <div className='font-[Poppins] text-[14px] text-gray-600'>
            <p className='mb-3'>{product?.brand}</p>
            <p className='mb-3'>{product?.category.name}</p>
            {
              product?.countInStock > 0 ?
                (<p className='mb-3'>Available ({product?.countInStock})</p>)
                :
                (<p className='mb-3'>Not available</p>)
            }
          </div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <p className='font-[Poppins] text-[1rem] font-medium'>
          Customer Feedback
        </p>
      ),
      children: (
        <>
          {/* <CreateComment product={product} page={page} limit={limit} /> */}
          {
            listComment?.data && listComment?.data.length > 0 &&
            listComment?.data.map(comment => (
              <UserFeedback
                key={comment._id}
                comment={comment}
                product={product}
                page={page}
                limit={limit}
              />
            ))
          }
          <div className='flex justify-center my-4'>
            <Pagination
              count={Math.ceil(listComment && listComment.count / limit)}
              page={page}
              onChange={(e, newValue) => setPage(newValue)}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <div className='desc-tabs'>
      <Tabs defaultActiveKey='1' items={items} centered />
    </div>
  );
};

export default TabsInformation;