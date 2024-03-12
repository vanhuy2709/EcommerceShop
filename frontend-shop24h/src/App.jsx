import { Outlet } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop
        smooth
        top={500}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right: '30px',
          bottom: '30px'
        }}
      />
    </>
  )
}

export default App
