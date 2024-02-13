import Catsection from "../components/homePage/Catsection";
import Hero from "../components/homePage/Hero";
import Huftsection from "../components/homePage/Huftsection";
import Sara from "../components/homePage/Sara";
import Topbrands from "../components/homePage/Topbrands";
import Trendingcategories from "../components/homePage/Trendingcategories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Sara />
      <Topbrands />
      <Trendingcategories />
      <Catsection />
      <Huftsection />
    </div>
  );
};

export default Home;
