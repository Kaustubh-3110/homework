import { useEffect, useState } from "react";
import Productcartcomponent from "../Components/Productcartcomponent";
import axios from "axios";

export default function Shoppage({ products, likesproducts, setLikesproducts, cartproducts, setCartproducts }) {
    const [loading, setloading] = useState(true);
    const [product,setProduct] = useState([]);
    const [category, setCategory] = useState('all');
    const [filtered, setFiltered] = useState(products);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products/")
            .then((response) => {
                setProduct(response.data);
                setFiltered(response.data);
                setloading(false);
            })
            .catch((error)=>{
                console.error("Error fetching products:", error);
                setloading(false);
            })
        if (category === 'all') {
            setFiltered(products);
            return;
        }
        const result = products.filter(item => item.category === category);
        setFiltered(result);
    }, [category, products,loading, setCartproducts]);

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
            <div>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 my-2 border">
                    <option value="all">All Products</option>
                    <option value="mouse">Mouse</option>
                    <option value="keyboard">Keyboard</option>
                    <option value="monitor">Monitor</option>
                    <option value="laptop">Laptop</option>
                    <option value="headphones">Headphones</option>
                    <option value="pc">PC</option>
                    <option value="chair">Chair</option>
                    <option value="controller">Controller</option>
                </select>
                <div className="flex flex-wrap">
                    {filtered.map((item, index) => (
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
            </div>
        </>
    );
}