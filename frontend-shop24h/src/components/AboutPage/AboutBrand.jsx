import step from '../../assets/images/brand/steps.svg';
import mango from '../../assets/images/brand/mango.svg';
import foodNetWork from '../../assets/images/brand/food-network.svg';
import food from '../../assets/images/brand/food.svg';
import bookOff from '../../assets/images/brand/bookoff.svg';
import gSeries from '../../assets/images/brand/g-series.svg';

const AboutBrand = () => {

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-4">
      <div className='flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-0'>
        <img src={step} alt='brand-logo' />
        <img src={mango} alt='brand-logo' />
        <img src={foodNetWork} alt='brand-logo' />
        <img src={food} alt='brand-logo' />
        <img src={bookOff} alt='brand-logo' />
        <img src={gSeries} alt='brand-logo' />
      </div>
    </div>
  );
};

export default AboutBrand;