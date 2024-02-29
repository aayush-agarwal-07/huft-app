
import ProductSection from '../components/ProductSection/ProductSection.jsx'
import ProductReviews from '../components/ProductSection/ProductReviews.jsx'
import ProductDescription from '../components/ProductSection/ProductDescription.jsx'
import ProductServices from '../components/ProductSection/ProductServices.jsx'

import { dogProducts as importedDogProducts } from '../components/ProductSection/index.js'
import {useState,useEffect} from 'react';
import {useParams,useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const url = location.pathname.split('/');
  const [dogProducts, setDogProducts] = useState([]);

  const {  productId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      let dummyData = importedDogProducts.filter(x=> x.id===parseInt(productId));
      setDogProducts(dummyData[0]);

    }, 2000); 
  }, []);

  if (!dogProducts || dogProducts.length === 0) {
    return <div>Loading...</div>; // You can replace this with a loading indicator or any other logic
  }

  return (
    <div >
            {/* <Navbar /> */}
                {/* <Navitems/> */}
                <div className="max-w-7xl mx-auto px-8 mt-6 pt-6">
                    <div className="text-lg text-gray-600">
                      <span className="hover:text-orange-500 cursor-pointer">{url[1].toUpperCase()}</span>/
                      <span className="hover:text-orange-500 cursor-pointer">{url[2].toUpperCase()}</span>/<span className="hover:text-orange-500 cursor-pointer">{dogProducts?.title}</span>  </div>
                </div>
                <ProductSection data={dogProducts}/>
                <ProductServices />
                <ProductReviews/>
                <ProductDescription data={dogProducts.description}/>

            {/* <Footer /> */}
    </div>
  )
}

export default ProductPage