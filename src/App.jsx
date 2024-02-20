import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityHero from "./components/community/CommunityHero";
import PageCustomerLove from "./components/customerLove/PageCustomerLove";
import Footer from "./components/homePage/Footer";
import Navbar from "./components/homePage/Navbar";
import Navitems from "./components/homePage/Navitems";
import Home from "./pages/Home";
import DogProducts from "./pages/DogProducts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navitems />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<CommunityHero />} />
          <Route path="/customer-love" element={<PageCustomerLove />} />
          <Route path="/dog-products" element={<DogProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
