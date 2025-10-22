import Productcartcomponent from "../Components/Productcartcomponent";

export default function Productpage({ products, likesproducts, setLikesproducts, cartproducts, setCartproducts }) {
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
            <div className="flex flex-wrap">
                {products.map((item, index) => (
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