import Profile from "../components/Profile";

export default function PortfolioPage(){
    return (
        <>
            <Profile/>
            <div className="px-4 mt-6 text-center">
                <h2 className="mb-4 font-extrabold text-2xl tracking-widest text-gray-800">PORTFOLIO</h2>
                <div className="space-y-16">
                    <div className="space-y-4">
                        <h3 className="font-semibold tracking-widest text-pink-500">CHIBI ILLUSTRATION</h3>
                        <div className="grid items-center grid-cols-2 gap-2 place-items-center">
                            <img src="http://placehold.co/1080x1080" alt=""
                                className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt=""
                                className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt=""
                                className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt=""
                                className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold tracking-widest text-pink-500">COLORED SKETCH ILLUSTRATION </h3>
                        <div className="grid items-center grid-cols-2 gap-2 place-items-center">
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold tracking-widest text-pink-500">FULL RENDERED ILLUSTRATION </h3>
                        <div className="grid items-center grid-cols-2 gap-2 place-items-center">
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                            <img src="http://placehold.co/1080x1080" alt="" className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125"/>
                        </div>
                    </div>

                    <h2 className="w-64 mx-auto font-light text-pink-500">For more example, please kindly check my <a target="_blank"
                            href="https://www.instagram.com/kura2ge" className="font-medium underline">Instagram</a></h2>
                </div>
            </div>
        </>
    )
}