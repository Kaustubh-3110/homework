import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function Productcartcomponent({ img, id, liked, carted, handlecart, handlelike, name, price, category, title, rating }) {
    const [isliked, setIsliked] = useState(liked);
    const [isCart, setIsCart] = useState(carted);

    const onLikeClick = () => {
        setIsliked(!isliked);
        handlelike(id);
    };

    const onCartClick = () => {
        setIsCart(!isCart);
        handlecart(id);
    };

    return (
        <>
            <div className="bg-gray-200 my-10 mx-1 p-2 flex flex-col items-center justify-center w-[19%] relative">
                <img className="h-[400px]" src={img} alt={name} />
                <FaHeart size={24} color={isliked ? "red" : "gray"} className="absolute top-1 right-4" onClick={onLikeClick} />
                <IoMdCart size={24} color={isCart ? "blue" : "grey"} className="absolute top-1 left-4 text-blue-500" onClick={onCartClick} />
                <p>{category}</p>
                <p>{title}</p>
                <p>₹{price}</p>
                <p>{rating}</p>
            </div>
        </>
    );
}