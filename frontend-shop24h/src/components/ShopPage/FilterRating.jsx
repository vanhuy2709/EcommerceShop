// Import Components
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import { Rate } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { handleCheckRatingAction } from '../../store/actions/user/filter.action';

// List Rating
const listRating = [
  {
    value: 1,
    label: '1.0 & up'
  },
  {
    value: 2,
    label: '2.0 & up'
  },
  {
    value: 3,
    label: '3.0 & up'
  },
  {
    value: 4,
    label: '4.0 & up'
  },
  {
    value: 5,
    label: '5.0'
  },
]

const FilterRating = () => {
  // Open Box Rating
  const [openRating, setOpenRating] = useState(true);
  const handleOpenRating = () => {
    setOpenRating(!openRating);
  };

  // Redux
  const dispatch = useDispatch();
  const { checkedRating } = useSelector(reduxData => reduxData.ratingReducer);

  const handleCheckRating = (value) => {
    dispatch(handleCheckRatingAction(value));
  }

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <ListItemButton onClick={handleOpenRating}>
        <ListItemText primary="Rating" />
        {openRating ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openRating} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {/* Check Rating (Check box) */}
          <RadioGroup sx={{ px: 1 }}>

            {listRating.map(rating => (
              <div key={rating.value} className='flex items-center justify-between'>
                <FormControlLabel
                  checked={checkedRating === rating.value}
                  control={<Radio color='success' />}
                  label={<Rate disabled value={rating.value} />}
                  onChange={() => handleCheckRating(rating.value)}
                />
                <p className='text-[14px] text-gray-500'>
                  {rating.label}
                </p>
              </div>
            ))}

          </RadioGroup>

        </List>
      </Collapse>
    </List>
  );
};

export default FilterRating;