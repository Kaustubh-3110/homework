import logofinal from '../assets/logofinal1.png';
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
export default function Navbarcomponents({ searchtext, setSearchText, Searchhandlar }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between items-center space-x-4 p-4 bg-gradient-to-r from-blue-800 to-indigo-600 text-white">
                <div className="flex h-[50px] items-center space-x-4">
                    <img src={logofinal} className="h-8" alt="Logo" />
                    <p onClick={()=> navigate("/")} className='hover:scale-105  cursor-pointer motion-preset-slide-right-md'>Home</p>
                    <p onClick={()=> navigate("/login")} className='hover:scale-105 cursor-pointer motion-preset-slide-right-md'>Login</p>
                    <p onClick={()=> navigate("/signup")} className='hover:scale-105 cursor-pointer motion-preset-slide-right-md'>Sign Up</p>
                </div>
                <div className='flex  items-center space-x-4 mt-2'>
                    <div className='flex  items-center border border-decorative-none bg-white rounded-lg'>
                        <input value={searchtext} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." className="p-2 rounded-l-lg bg-white text-black w-[90%] focus:outline-none" />
                        <FaSearch onClick={Searchhandlar} className="bg-white text-black hover:cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <p onClick={() => navigate("/cart")}><IoMdCart className="text-white text-xl cursor-pointer hover:scale-105" /></p>
                    <p onClick={() => navigate("/wishlist")}><FaHeart className="text-white text-xl cursor-pointer hover:scale-105" /></p>
                    <p className='hover:scale-105  motion-preset-slide-right-md cursor-pointer' onClick={()=> navigate("/shoppage")} >Shop</p>
                    <p className='hover:scale-105  motion-preset-slide-right-md cursor-pointer' onClick={()=> navigate("/product")}>Products</p>
                    <p className='hover:scale-105  motion-preset-slide-right-md cursor-pointer' onClick={()=> navigate("/orders")}>Orders</p>
                    <p className='hover:scale-105  motion-preset-slide-right-md cursor-pointer' onClick={()=> navigate("/about")}>About</p>
                    <p className='hover:scale-105  motion-preset-slide-right-md cursor-pointer' onClick={()=> navigate("/contact")}>Contact</p>

                </div> 
            </div>

        </>
    );
}