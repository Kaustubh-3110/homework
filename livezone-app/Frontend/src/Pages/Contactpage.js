export default function Contactpage() {
    return (
        <>

            <div className="h-[80vh]">
                <h1 className="text-3xl font-bold text-center my-10">Contact Us</h1>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded" />
                        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    );
}