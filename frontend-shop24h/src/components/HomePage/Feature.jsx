import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../CardProduct/CardProduct";
import { getAllProductFeaturedAction } from '../../store/actions/user/apiRequest.action';
import { Spin } from "antd";

const Feature = () => {
  const dispatch = useDispatch();
  const { listProductFeatured } = useSelector(reduxData => reduxData.productReducer);
  const { pending, productFeaturedList, isError } = listProductFeatured;

  useEffect(() => {
    dispatch(getAllProductFeaturedAction());
  }, [])

  return (
    <div className="max-w-screen-xl mx-auto my-[100px]">
      <h2 className="text-[#002603] text-[40px] font-semibold leading-[48px] mb-[50px] text-center">Featured Products</h2>

      {/* Render List Product Featured */}
      {
        pending ?
          (
            <div className="text-center mb-[50px]">
              <Spin />
            </div>
          )
          :
          (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 px-4 mb-[50px]">
              {
                productFeaturedList && productFeaturedList.length > 0 &&
                productFeaturedList.map(productFeatured => (
                  <CardProduct key={productFeatured._id} product={productFeatured} />
                ))
              }
            </div>
          )
      }
    </div>
  );
};

export default Feature;