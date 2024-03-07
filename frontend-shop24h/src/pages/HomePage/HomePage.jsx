import HomeSlider from "../../components/HomePage/HomeSlider";
import Services from '../../components/HomePage/Services';
import OurCategories from "../../components/HomePage/OurCategories";
import Promotion from '../../components/HomePage/Promotion';
import Deals from "../../components/HomePage/Deals";
import Feature from "../../components/HomePage/Feature";
import Client from "../../components/HomePage/Client";
import FollowUs from "../../components/HomePage/FollowUs";

const HomePage = () => {
  return (
    <>
      <HomeSlider />
      <Services />
      {/* <OurCategories /> */}
      <Deals />
      <Feature />
      {/* <Promotion /> */}
      <Client />
      <FollowUs />
    </>
  );
};

export default HomePage;