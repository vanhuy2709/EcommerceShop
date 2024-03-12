import { IoHomeOutline } from "react-icons/io5";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Button, Result, notification } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Breadcrumb Variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Result', url: 'checkout/result' },
]

const ResultPage = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/orders')
      .then(response => response.json())
      .then(result => setOrders(result))
      .catch(err => notification.error({ message: err }))
  }, [])

  const checkOrder = orders.findIndex(item => item._id === orderId);

  useEffect(() => {
    if (checkOrder < 0) {
      navigate('/');
    }
  }, [])

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />
      <Result
        status="success"
        title="Successfully Purchased!"
        subTitle="Your order have been taken 1-2 minutes, please wait."
        extra={[
          <Button
            type="primary"
            style={{ backgroundColor: '#1677ff' }}
            key="home"
            onClick={() => navigate('/')}
          >
            Go HomePage
          </Button>,
          <Button
            key="buy"
            onClick={() => navigate('/shop')}
          >
            Buy Again
          </Button>,
        ]}
      />
    </>
  );
};

export default ResultPage;