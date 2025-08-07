export default function LoginPage() {
    return (
        <div className=" flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white  motion-preset-pop p-8 rounded-lg shadow-xl w-96 items-center ">
                <div className="flex flex-col items-center">
                    <h1 className=" text-[32px] text-[#1A2A80] font-bold">Login</h1>
                    <p className="my-3 text-[#1A2A80]  text-[22px]">Welcome back!</p>
                    <input className="border  border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your email or Username" />
                    <input className="border  border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your password" type="password" />
                    <button className=" font-bold  bg-gradient-to-r from-blue-800 to-indigo-600 text-white p-2 rounded w-[100%]">Login</button>
                    <p className="mt-4 text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
                </div>

            </div>
        </div>
    );
}
