// Import Components
import DiscountOrder from './DiscountOrder';
import CardProduct from '../CardProduct/CardProduct';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import FilterRating from './FilterRating';
import SortPrice from './SortPrice';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { Paper, InputBase, Pagination, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

// Action
import { getAllProduct } from '../../store/actions/user/apiRequest.action';
import { getAllProductFilterAction } from '../../store/actions/user/apiRequest.action';

const Shop = () => {
  const dispatch = useDispatch();
  const { listProduct } = useSelector(reduxData => reduxData.productReducer);
  const { filterCategories } = useSelector(reduxData => reduxData.categoryReducer);
  const { filterPrice } = useSelector(reduxData => reduxData.priceReducer);
  const { checkedRating } = useSelector(reduxData => reduxData.ratingReducer);
  const { price } = useSelector(reduxData => reduxData.priceReducer);

  const { pending, productList, isError } = listProduct;
  const { valuePrice } = filterPrice;
  const { categoryListChecked } = filterCategories;
  const { sortValue } = price;

  // Pagination
  const [page, setPage] = useState(1);
  const limit = 9;

  // Search
  const [valueSearch, setValueSearch] = useState('');

  // Handle Filter
  const handleFilterProduct = () => {

    const param = new URLSearchParams({
      categories: categoryListChecked,
      minPrice: valuePrice[0],
      maxPrice: valuePrice[1],
      rating: checkedRating,
      search: valueSearch,
      sortPrice: sortValue,
      page,
      limit
    })
    const paramUrl = param.toString().replace("%2C", ",");

    dispatch(getAllProductFilterAction(paramUrl))
  }

  useEffect(() => {
    dispatch(getAllProduct(page, limit));
  }, [page])

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-20">
      <div className='flex gap-6 flex-col lg:flex-row'>
        {/* Filter */}
        <div className='flex-1'>

          {/* Filter (Search, Category, Price, Rating) */}
          <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Products"
              value={valueSearch}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFilterProduct()
                }
              }}
              onChange={(e) => setValueSearch(e.target.value)}
            />
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              onClick={() => handleFilterProduct()}
            >
              <Search />
            </IconButton>
          </Paper>
          <hr />
          <FilterCategory />
          <hr />
          <FilterPrice />
          <hr />
          <SortPrice />
          <hr />
          <FilterRating />

          {/* Submit Filter */}
          <div className='text-center'>
            <Button
              size='large'
              type='primary'
              style={{ color: 'white', width: '100%', borderColor: '#00B207', background: '#00B207' }}
              onClick={() => handleFilterProduct()}
            >
              Filter
            </Button>
          </div>
          <DiscountOrder />
        </div>

        {/* Product & Pagination */}
        <div className='flex-[3]'>
          <div className='text-right text-gray-500 my-3'>
            <span className='text-gray-900 font-semibold'>
              {productList && productList.count}
            </span> Results Found
          </div>

          {/* List Product */}
          {
            pending ?
              (<div className='text-center'>
                <Spin />
              </div>)
              :
              (<>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-6 mb-10'>
                  {
                    productList && productList.data.length > 0 &&
                    productList.data.map(product => (
                      <CardProduct key={product._id} product={product} />
                    ))
                  }
                </div>
              </>
              )
          }

          {/* Pagination */}
          <div className='flex justify-center'>
            <Pagination
              count={Math.ceil(productList && productList.count / limit)}
              page={page}
              onChange={(e, newPage) => setPage(newPage)}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;