import React, { useEffect, useState } from "react";
import Herocomponent from "../Components/Herocomponent";
import Category from "../Components/Category";
import Newarrivals from "../Components/Newarrivals";
import Productcartcomponent from "../Components/Productcartcomponent";
import axios from "axios";

export default function Homepage({ likesproducts, setlikesproducts, cartproducts, setCartproducts }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Django backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/") 
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Handle like
  const handlelike = (id) => {
    if (likesproducts.includes(id)) {
      const result = likesproducts.filter((number) => number !== id);
      setlikesproducts(result);
      return;
    }
    setlikesproducts([...likesproducts, id]);
  };

  // Handle cart
  const handlecart = (id) => {
    if (cartproducts.includes(id)) {
      const result = cartproducts.filter((number) => number !== id);
      setCartproducts(result);
      return;
    }
    setCartproducts([...cartproducts, id]);
  };

  if (loading) {
    return <p className="text-center mt-10 text-lg text-gray-500">Loading products...</p>;
  }

  return (
    <>
      <Herocomponent />
      <Category />
      <Newarrivals />

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((item, index) => (
          <Productcartcomponent
            key={index}
            img={item.image}
            id={item.id}
            alreadyliked={likesproducts.includes(item.id)}
            alreadyadded={cartproducts.includes(item.id)}
            name={item.title}
            price={item.price}
            category={item.category || "General"}
            title={item.title}
            rating={item.rating || 4}
            handlelike={handlelike}
            handlecart={handlecart}
          />
        ))}
      </div>
    </>
  );
}
