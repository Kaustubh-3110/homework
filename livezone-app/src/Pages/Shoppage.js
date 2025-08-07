import { useEffect, useState } from "react";
import Productcartcomponent from "../Components/Productcartcomponent";
import { PRODUCT_DATA } from "../Tempdata";
export default function Shoppage() {
    const [category, setCategory] = useState('all');
    const [products, setProducts] = useState(PRODUCT_DATA);
    useEffect(() => {
        if (category === 'all') {
            setProducts(PRODUCT_DATA);
            return
        }
        const result = PRODUCT_DATA.filter(items => items.category === category);
        setProducts(result);

    }, [category])
        const handlelike = () => {};
        const handlecart = () => {};
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
                    {products.map((item, index) => {
                        return (
                            <Productcartcomponent
                                key={index}
                                img={item.image}
                                name={item.name}
                                price={item.price}
                                category={item.category}
                                title={item.name}
                                rating={item.rating}
                                handlelike={handlelike}
                                handlecart={handlecart}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}