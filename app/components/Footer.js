import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Copyright Text */}
          <p className="text-sm text-center text-slate-500 md:text-left">
            &copy; {new Date().getFullYear()} Kurage. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/kura2ge" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-slate-500 transition-transform duration-300 rounded-full hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="https://x.com/kura2ge" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter X"
              className="p-2 text-slate-500 transition-transform duration-300 rounded-full hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              <BsTwitterX size={20} />
            </a>
            <a 
              href="mailto:issakurage@gmail.com"
              aria-label="Gmail"
              className="p-2 text-slate-500 transition-transform duration-300 rounded-full hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              <SiGmail size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}