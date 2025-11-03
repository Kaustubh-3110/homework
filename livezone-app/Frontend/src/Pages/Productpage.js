import { useState, useEffect } from "react";
import Productcartcomponent from "../Components/Productcartcomponent";
import axios from "axios";

export default function Productpage({ products, likesproducts, setLikesproducts, cartproducts, setCartproducts }) {
    
    const [loading, setloading] = useState(true);
    const [product,setProduct] = useState([]);
    
    useEffect(() =>{
        axios
            .get("http://127.0.0.1:8000/api/products/")
            .then((response)=>{
                setProduct(response.data);
                setloading(false);

            })
            .catch((error)=>{
                console.error("Error fetching products:", error);
                setloading(false);
            })
    }, []);
    const handlelike = (id) => {
        if (likesproducts.includes(id)) {
            setLikesproducts(likesproducts.filter(num => num !== id));
            return;
        }
        setLikesproducts([...likesproducts, id]);
    };

    const handlecart = (id) => {
        if (cartproducts.includes(id)) {
            setCartproducts(cartproducts.filter(num => num !== id));
            return;
        }
        setCartproducts([...cartproducts, id]);
    };

    return (
        <>
            <div className="flex flex-wrap ">
                {product.map((item, index) => (
                    <Productcartcomponent
                        key={index}
                        img={item.image}
                        id={item.id}
                        alreadyliked={likesproducts.includes(item.id)}
                        alreadycarted={cartproducts.includes(item.id)}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        title={item.name}
                        rating={item.rating}
                        handlelike={handlelike}
                        handlecart={handlecart}
                    />
                ))}
            </div>
        </>
    );
}