    <LoginPage />
    <Signuppage />


    export default function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 items-center ">
                <div className="flex flex-col items-center">
                    <h1 className=" text-[32px] text-[#1A2A80] font-bold">Login</h1>
                    <p className="my-3 text-[#1A2A80]  text-[22px]">Welcome back!</p>
                    <input className="border  border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your email or Username" />
                    <input className="border  border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your password" type="password" />
                    <button className=" font-bold bg-[#EA5B6F] text-white p-2 rounded w-[100%]">Login</button>
                    <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
                </div>

            </div>
        </div>
    );
}





export default function Herocomponent() {
    return (
        <>
            <div className="flex mx-10 justify-end h-[50vh] bg-gray-50">
                <div className="flex items-center flex-row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTDnCzosfOYBIukxLamGVjeMQ_JsZkLJXAg&s" alt="" />
                </div>
            </div>
        </>
    );
}

https://www.pngmart.com/files/16/Light-Gaming-Keyboard-PNG-File.png








import Productcartcomponent from "../Components/Productcartcomponent";
import { PRODUCT_DATA } from "../Tempdata";

export default function Whishlistpage({ likesproducts, handlelike, handlecart }) {
    const likedProducts = PRODUCT_DATA.filter(item => likesproducts.includes(item.id));

    return (
        <>
            <div className="h-[90vh] flex flex-col items-center">
                <h1 className="text-3xl font-bold text-center my-4">Wishlist</h1>
                {likedProducts.length === 0 ? (
                    <p className="text-center text-lg">Your wishlist is currently empty.</p>
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {likedProducts.map((item, index) => (
                            <Productcartcomponent
                                key={index}
                                img={item.image}
                                id={item.id}
                                liked={true}
                                carted={false}
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
                )}
            </div>
        </>
    );
}