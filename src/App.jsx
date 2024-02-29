import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommunityHero from "./components/community/CommunityHero";
import PageCustomerLove from "./components/customerLove/PageCustomerLove";
import Footer from "./components/common/Footer.jsx";
import Navbar from "./components/homePage/Navbar";
import Navitems from "./components/homePage/Navitems";
import DogProducts from "./pages/DogProducts";
import Home from "./pages/Home";
import DogCategory from "./pages/DogCategory";
import ProductPage from "./pages/ProductPage"

import CartItems from "./pages/CartPage.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Navitems />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<CommunityHero />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/customer-love" element={<PageCustomerLove />} />
          <Route path="/dog-products" element={<DogProducts />} />
          <Route path="/dog-products/:productId" element={<ProductPage/>} />
          <Route path="/dog-products/:dynamic" element={<DogCategory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
