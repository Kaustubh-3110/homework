import Herocomponent from "../Components/Herocomponent";
import Category from "../Components/Category";
import Newarrivals from "../Components/Newarrivals";
import Productcartcomponent from "../Components/Productcartcomponent";
export default function Homepage({ products, likesproducts, setLikesproducts, cartproducts, setCartproducts }) {
    const handlelike = (id) => {
        if (likesproducts.includes(id)) {
            const result = likesproducts.filter(numbar => numbar !== id);
            setLikesproducts(result);
            return;
        }
        setLikesproducts([...likesproducts, id]);
    }
    const handlecart = (id) => {
        if (cartproducts.includes(id)) {
            const result = cartproducts.filter(numbar => numbar !== id);
            setCartproducts(result);
            return;
        }
        setCartproducts([...cartproducts, id]);
    }
    return (
        <>
            <Herocomponent />
            <Category />
            <Newarrivals />
            <div className="flex flex-wrap">
                {products.map((item, index) => {
                    return (
                        <Productcartcomponent
                            key={index}
                            img={item.image}
                            id={item.id}
                            liked={likesproducts.includes(item.id)}
                            carted={cartproducts.includes(item.id)}
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
        </>
    )
}