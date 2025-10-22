export default function Herocomponent() {
    return (
        <>
            <div className="flex mx-10 my-8 justify-end h-[50vh] bg-gradient-to-r from-blue-800 to-indigo-600">

                <div className="flex flex-col justify-center items-start w-[50%] pl-10">
                    <h1 className="text-white text-5xl font-bold">Gaming Keyboard</h1>
                    <p className="text-white text-lg mt-4">Experience the ultimate gaming performance with our high-quality gaming keyboard.</p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 hover:scale-105">Shop Now</button>
                </div>

                <div className="flex flex-col justify-center items-start w-[50%]">
                    <div className="flex items-center flex-row ">
                        <img className="pr-10 h-[300px] hover:motion-preset-pop" src="https://www.pngmart.com/files/16/Light-Gaming-Keyboard-PNG-File.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    );
}