import { Box, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// Action
import { handleChangeSortPriceAction } from '../../store/actions/user/filter.action';

const SortPrice = () => {
  const dispatch = useDispatch();
  const { price } = useSelector(reduxData => reduxData.priceReducer);
  const { sortValue } = price;

  return (
    <div className='flex items-center gap-4 py-5'>
      <p className='text-sm text-gray-500'>Sort by:</p>
      <Box sx={{ width: '100%' }}>
        <FormControl fullWidth>
          <InputLabel>Price</InputLabel>
          <Select
            value={sortValue}
            label="Price"
            onChange={(e) => dispatch(handleChangeSortPriceAction(e.target.value))}
          >
            <MenuItem value={'asc'}>Lowest to Highest</MenuItem>
            <MenuItem value={'desc'}>Highest to Lowest</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SortPrice;