export default function Footercomponent() {
    return (
        <div className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-4 h-[20vh]">
            <img src="../assets/logo2.png" className="h-8 mx-auto mb-4" alt="Logo" />
            <h2 className="text-center text-lg font-semibold">LiveZone</h2>
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} LiveZone. All rights reserved.</p>
            </div>
            <div>
                <p className="text-center mt-2">Follow us on:</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">Twitter</a>
                    <a href="https://www.instagram.com/im_beast4150/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">Instagram</a>
                </div>
            </div>
        </div>
    );
}