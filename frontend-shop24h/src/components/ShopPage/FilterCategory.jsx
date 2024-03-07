// Import Components
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  FormControlLabel,
  FormGroup,
  Checkbox
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { getAllCategoryAction } from '../../store/actions/user/apiRequest.action';
import { handleCheckCategories } from '../../store/actions/user/filter.action';

const FilterCategory = () => {
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(true);

  const { listCategory } = useSelector(reduxData => reduxData.categoryReducer);
  const { pending, categoryList, isError } = listCategory;

  const { filterCategories } = useSelector(reduxData => reduxData.categoryReducer);
  const { categoryListChecked } = filterCategories;

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, [])

  // Check State Checkbox
  const handleCheck = (id) => {
    dispatch(handleCheckCategories(categoryListChecked, id));
  }

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <ListItemButton onClick={handleOpenCategory}>
        <ListItemText primary="All Categories" />
        {openCategory ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCategory} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          {/* Check Categories (Check box) */}
          <FormGroup sx={{ px: 1 }}>
            {
              pending ?
                (<Spin />)
                :
                (<>
                  {
                    categoryList && categoryList.length > 0 &&
                    categoryList.map(category => (
                      <div key={category._id} className='flex items-center justify-between'>
                        <FormControlLabel
                          control={<Checkbox color='success' />}
                          label={category.name}
                          checked={categoryListChecked.includes(category._id)}
                          onChange={() => handleCheck(category._id)}
                        />
                        <p className='text-[14px] text-gray-500'>
                          ({category.countProduct})
                        </p>
                      </div>
                    ))
                  }
                </>)
            }
          </FormGroup>

        </List>
      </Collapse>
    </List>
  );
};

export default FilterCategory;