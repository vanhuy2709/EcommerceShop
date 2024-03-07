// Import Components
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Slider
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeSlidePriceAction } from '../../store/actions/user/filter.action';
import { getProductMaxPriceAction } from '../../store/actions/user/apiRequest.action';

const FilterPrice = () => {

  const dispatch = useDispatch();
  const [openPrice, setOpenPrice] = useState(true);
  const { filterPrice } = useSelector(reduxData => reduxData.priceReducer);
  const { valuePrice, maxPrice } = filterPrice;

  // Set Open Price
  const handleOpenPrice = () => {
    setOpenPrice(!openPrice)
  }

  const handleChangeSliderPrice = (newValue) => {
    dispatch(handleChangeSlidePriceAction(newValue))
  }

  useEffect(() => {
    dispatch(getProductMaxPriceAction());
  }, [])

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <ListItemButton onClick={handleOpenPrice}>
        <ListItemText primary="Price" />
        {openPrice ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPrice} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          <Slider
            key={`slider-${valuePrice}`}
            defaultValue={valuePrice}
            onChangeCommitted={(e, newValue) => handleChangeSliderPrice(newValue)}
            min={0}
            max={maxPrice}
            valueLabelDisplay="auto"
            color='success'
            disableSwap
          />
          <p className='text-[14px] leading-[21px]'>
            <span className='text-gray-700'>Price: </span>
            <span className='font-medium'>{valuePrice[0]} - {valuePrice[1]}</span>
          </p>
        </List>

      </Collapse>
    </List>
  );
};

export default FilterPrice;