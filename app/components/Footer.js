import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <footer>
            <div className="flex items-center justify-center gap-4">
                <a href="https://www.instagram.com/kura2ge" target="_blank"
                    className="p-2 text-pink-300 transition duration-300 border border-pink-300 rounded-full hover:bg-pink-500 hover:text-white hover:border-pink-500">
                    <FaInstagram className="text-xl"/>
                </a>
                <a href="https://x.com/kura2ge" target="_blank"
                    className="p-2 text-pink-300 transition duration-300 border border-pink-300 rounded-full hover:bg-pink-500 hover:text-white hover:border-pink-500">
                    <BsTwitterX className="text-xl"/>
                </a>
                <a href="mailto:issakurage@gmail.com" target="_blank"
                    className="p-2 text-pink-300 transition duration-300 border border-pink-300 rounded-full hover:bg-pink-500 hover:text-white hover:border-pink-500">
                    <SiGmail className="text-xl"/>
                </a>
            </div>
        </footer>
    );
}