import logo2 from '../assets/logo2.png';
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
export default function Navbarcomponents({ searchtext, setSearchText, Searchhandlar }) {

    return (
        <>
            <div className="flex justify-between items-center space-x-4 p-4 bg-gradient-to-r from-blue-800 to-indigo-600 text-white">
                <div className="flex  items-center space-x-4">
                    <img src={logo2} className="h-8" alt="Logo" />
                    <p className='hover:scale-105  motion-preset-slide-right-md'><a href="/">Home</a></p>
                    <p className='hover:scale-105 motion-preset-slide-right-md'><a href="/login">Login</a></p>
                    <p className='hover:scale-105 motion-preset-slide-right-md'><a href="/signup">Sign Up</a></p>
                </div>
                <div className='flex  items-center space-x-4 mt-2'>
                    <div className='flex  items-center border border-decorative-none bg-white rounded-lg'>
                        <input value={searchtext} onChange={(e) => setSearchText(e.target.value)} placeholder="Search..." className="p-2 rounded-l-lg bg-white text-black w-[90%] focus:outline-none" />
                        <FaSearch onClick={Searchhandlar} className="bg-white text-black hover:cursor-pointer" />
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href='/cart'><IoMdCart className="text-white text-xl cursor-pointer hover:scale-105" /></a>
                    <a href='/wishlist'><FaHeart className="text-white text-xl cursor-pointer hover:scale-105" /></a>
                    <p className='hover:scale-105  motion-preset-slide-right-md' ><a href="/shoppage">Shop</a></p>
                    <p className='hover:scale-105  motion-preset-slide-right-md'><a href="/product">Products</a></p>
                    <p className='hover:scale-105  motion-preset-slide-right-md'><a href="/orders">Orders</a></p>
                    <p className='hover:scale-105  motion-preset-slide-right-md'><a href="/about">About</a></p>
                    <p className='hover:scale-105  motion-preset-slide-right-md'><a href="/contact">Contact</a></p>

                </div>
            </div>

        </>
    );
}