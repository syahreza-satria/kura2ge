import Image from "next/image";
import gambarProfile from '@/public/assets/profile1.png';
import gambarThumbnail from '@/public/assets/asset1.png';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Menggunakan ikon dari library

export default function Profile() {
    return (
        <div className="w-full">
            {/* Bagian Banner */}
            <div className="h-48 w-full">
                <Image 
                    src={gambarThumbnail} 
                    alt="User banner" 
                    width={1200} // Masukkan lebar asli gambar banner
                    height={400} // Masukkan tinggi asli gambar banner
                    className="w-full h-full object-cover rounded-b-2xl border-x-2 border-b-2 border-pink-300 "
                    priority
                />
            </div>

            {/* Bagian Konten Profil */}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                    
                    {/* Foto & Nama */}
                    <div className="flex items-end gap-4">
                        <Image 
                            src={gambarProfile} 
                            alt="Kurage profile picture"
                            width={120}
                            height={120}
                            className="object-cover -mt-16 rounded-full ring-4 ring-white"
                        />
                        <div className="pb-2">
                            <h1 className="text-2xl font-bold text-slate-900">Kurage</h1>
                            <p className="flex items-center text-sm text-slate-500">
                                <FaMapMarkerAlt className="mr-1.5" />
                                Indonesia
                            </p>
                        </div>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-2 mt-4 sm:mt-0 sm:pb-2">
                        <a href="https://instagram.com/kura2ge/" className="px-4 py-1.5 text-sm font-semibold text-white bg-pink-500 rounded-md shadow-sm hover:bg-pink-600">
                            Follow
                        </a>
                        <a href="mailto:issakurage@gmail.com" className="px-4 py-1.5 text-sm font-semibold text-slate-700 bg-white rounded-md shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
                            Message
                        </a>
                    </div>
                </div>
            </div>

            {/* Pemisah yang lebih halus */}
            <div className="mt-6">
              <hr className="border-t border-slate-200" />
            </div>
        </div>
    );
}