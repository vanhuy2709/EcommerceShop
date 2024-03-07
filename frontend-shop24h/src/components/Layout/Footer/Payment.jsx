import applePay from '../../../assets/images/payment/applepay-logo.svg';
import visa from '../../../assets/images/payment/visa-logo.svg';
import discover from '../../../assets/images/payment/discover-logo.svg';
import mastercard from '../../../assets/images/payment/mastercard-logo.svg';
import securePayment from '../../../assets/images/payment/secure-payment.png';

const Payment = () => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='border border-[#333333] w-11 rounded h-8 flex items-center justify-center'>
        <img src={applePay} alt='apple-pay' />
      </div>
      <div className='border border-[#333333] w-11 rounded h-8 flex items-center justify-center'>
        <img src={visa} alt='visa' />
      </div>
      <div className='border border-[#333333] w-11 rounded h-8 flex items-center justify-center'>
        <img src={discover} alt='discover' />
      </div>
      <div className='border border-[#333333] w-11 rounded h-8 flex items-center justify-center'>
        <img src={mastercard} alt='mastercard' />
      </div>
      <img src={securePayment} alt='secure-payment' />
    </div>
  );
};

export default Payment;