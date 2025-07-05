import Image from "next/image";
import gambarProfile from '@/public/assets/profile1.png';
import gambarThumbnail from '@/public/assets/asset1.png';


export default function Profile(){
    return(
        <>
            <div className="w-full">
                <Image src={gambarThumbnail} alt={''} width={0} height={0} className="object-cover w-full h-48 border-b-2 border-pink-300" />
                <div className="flex px-4">
                    <Image src={gambarProfile} alt={""} width={80} height={80}
                        className="object-cover -mt-4 border-2 border-pink-300 rounded-full" />
                    <div className="mt-2 ml-2">
                        <h1 className="text-xl font-bold text-gray-800">Kurage</h1>
                        <p className="flex items-center text-xs font-light text-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg><span className="ml-1">Indonesia</span>
                        </p>
                    </div>
                </div>
            </div>

            <hr className="mx-4 mt-4 border-pink-300"></hr>
        </>
    );
}