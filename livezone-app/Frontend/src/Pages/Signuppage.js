export default function Signuppage() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 items-center motion-preset-pop ">
                <div className="flex flex-col items-center ">
                    <h1 className="my-2 text-[#1A2A80] text-2xl font-bold">Sign Up</h1>
                    <p className="my-3 text-[#1A2A80] text-[22px]">Create a new account</p>
                    <input className="border border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your email" />
                    <input className="border border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Enter your password" type="password" />
                    <input className="border border-gray-300 p-2 mb-4 rounded w-[100%]" placeholder="Confirm your password" type="password" />
                    <button className=" font-bold  bg-gradient-to-r from-blue-800 to-indigo-600 text-white p-2 rounded w-[100%]">Sign Up</button>
                    <p className="mt-4 text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
                </div>

            </div>
        </div>
    );
}
