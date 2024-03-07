import CardCategory from '../CardCategory/CardCategory';
import { getAllCategoryAction } from '../../store/actions/user/apiRequest.action';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const OurCategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { listCategory } = useSelector(reduxData => reduxData.categoryReducer);
  const { pending, categoryList, isError } = listCategory;

  useEffect(() => {
    dispatch(getAllCategoryAction())
  }, [])

  return (
    <div className="bg-[#EDF2EE] px-4">

      {/* Title */}
      <h2 className="text-gray-900 text-[40px] font-semibold leading-[48px] text-center pt-[211px] mb-[50px]">Introducing Our Categories</h2>

      {/* List Categories */}
      {
        pending ?
          (
            <div className='max-w-screen-xl mx-auto pb-[50px] text-center'>
              <Spin />
            </div>
          )
          :
          (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-screen-xl mx-auto pb-[50px]">
              {
                categoryList && categoryList.length > 0 &&
                categoryList.map(category => (
                  <CardCategory
                    key={category._id}
                    category={category}
                  />
                ))
              }

            </div>
          )
      }
      <div className='text-center pb-[50px]'>
        <button
          className='text-white font-semibold leading-5 bg-[#00B207] py-4 px-10 rounded-[43px]'
          onClick={() => navigate('/shop')}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default OurCategories;