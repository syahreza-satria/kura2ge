import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="fixed bottom-0 left-0 z-50 flex justify-center w-full gap-16 py-4 bg-white">
            <Link href="/" className="text-pink-500 transition duration-300 hover:text-pink-300">Home</Link>
            <Link href="/portfolio" className="text-pink-500 transition duration-300 hover:text-pink-300">Portfolio</Link>
            <Link href="/pricelist" className="text-pink-500 transition duration-300 hover:text-pink-300">Pricelist</Link>
        </nav>
    );
}