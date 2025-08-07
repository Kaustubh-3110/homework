import Productcartcomponent from "../Components/Productcartcomponent"
export default function Productpage({ products }) {
    const handlelike = () => {};
    const handlecart = () => {};

    return (
        <>
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
        </>
    )
}