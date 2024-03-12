import { useParams } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ImageCarousel from "../../components/DetailProductPage/ImageCarousel";
import InfoProduct from "../../components/DetailProductPage/InfoProduct";
import TabsInformation from "../../components/DetailProductPage/TabsInformation";
import Feature from '../../components/HomePage/Feature';

// Action
import { getProductByIdAction } from '../../store/actions/user/apiRequest.action';

const DetailProductPage = () => {
  const dispatch = useDispatch();
  const { productById } = useSelector(reduxData => reduxData.productReducer);
  const { pending, product, isError } = productById;
  const params = useParams();

  // Breadcrumb variable
  const listCrumbs = [
    { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: `${product?.name}`, url: '/' },
  ]

  useEffect(() => {
    dispatch(getProductByIdAction(params.id))
  }, [])

  return (
    <>
      {
        pending ?
          (
            <div className="max-w-screen-xl mx-auto px-4 text-center">
              <Spin />
            </div>
          )
          :
          (<>
            <Breadcrumb crumbs={listCrumbs} />
            <div className='max-w-screen-xl mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                <ImageCarousel dataImages={product?.images} />
                <InfoProduct product={product} />
              </div>
            </div>
            <TabsInformation product={product} />
          </>
          )
      }

      {/* List Product Featured */}
      <Feature />
    </>
  );
};

export default DetailProductPage;