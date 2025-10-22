import './App.css';
import LoginPage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarcomponents from './Components/Navbarcomponents';
import Shoppage from './Pages/Shoppage';
import Footercomponent from './Components/Footercomponent';
import Contactpage from './Pages/Contactpage';
import Productpage from './Pages/Productpage';
import Orderspage from './Pages/Orderspage';
import Aboutpage from './Pages/About';
import { useState } from 'react';
import { PRODUCT_DATA } from './Tempdata';
import Whishlistpage from './Pages/Whishlistpage';
import Cartpage from './Pages/Cartpage';

function App() {
      const [searchtext, setSearchText] = useState("");
      const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
      const [likesproducts, setLikesproducts] = useState([]);
      const [cartproducts, setCartproducts] = useState([]);
  
      const Searchhandlar = () => {
          if (searchtext.length === 0) {
              setFilteredProducts(PRODUCT_DATA);
              return
          }
          if (searchtext.length >= 0) {
              const products = PRODUCT_DATA.filter(products => products.name.toLowerCase().includes(searchtext.toLowerCase()) || products.category.toLowerCase().includes(searchtext.toLowerCase()));
              setFilteredProducts(products)
          }
      }
  return (
    <>
    <BrowserRouter>
    <Navbarcomponents searchtext={searchtext} setSearchText={setSearchText} Searchhandlar={Searchhandlar} />
      <Routes>
        <Route path="/" element={<Homepage products={filteredProducts} likesproducts={likesproducts} setLikesproducts={setLikesproducts} cartproducts={cartproducts}
      setCartproducts={setCartproducts} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/shoppage" element={<Shoppage products={filteredProducts} alreadyliked={likesproducts} alreadycarted={cartproducts} likesproducts={likesproducts} setLikesproducts={setLikesproducts} cartproducts={cartproducts} setCartproducts={setCartproducts}  />} />
        <Route path="/orders" element={<Orderspage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path="/product" element={<Productpage products={filteredProducts} alreadycarted={cartproducts} alreadyliked={likesproducts} likesproducts={likesproducts} setLikesproducts={setLikesproducts} cartproducts={cartproducts} setCartproducts={setCartproducts} />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/wishlist" element={<Whishlistpage likesproducts={likesproducts} setLikesproducts={setLikesproducts} />} />
        <Route path="/cart" element={<Cartpage cartproducts={cartproducts} setCartproducts={setCartproducts} />} />
      </Routes>
      <Footercomponent/>
    </BrowserRouter>
    

    </>
  );
}

export default App;