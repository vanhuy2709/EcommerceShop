import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BadgeCart = () => {
  const { listCart } = useSelector(reduxData => reduxData.cartReducer);

  const navigate = useNavigate();
  const handleNavigateCart = () => {
    navigate('/cart')
  }

  return (
    <div className='cursor-pointer' onClick={() => handleNavigateCart()}>
      <Badge badgeContent={listCart.length || 0} color="primary">
        <ShoppingBagIcon />
      </Badge>
    </div>
  );
};

export default BadgeCart;