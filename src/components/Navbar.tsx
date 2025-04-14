import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-8 lg:px-20 py-4 bg-white">
                <Link to="/" className="text-xl font-bold text-purple-700 transition">
                    Elite-Ayomide
                </Link>

                <div className="flex space-x-2">
                    <a
                        href="https://t.me/yourtelegramchannel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="items-center justify-center hidden px-4 py-2 font-semibold text-purple-700 bg-white sm:flex hover:text-purple-600"
                    >
                        <FaTelegramPlane className="mr-2" /> Join Telegram
                    </a>

                    <Link
                        to="/"
                        className="px-2 py-1 font-semibold text-black transition bg-gray-200 rounded-lg shadow-md lg:py-2 lg:px-4 hover:bg-gray-300"
                    >
                        Get In Touch
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar; 