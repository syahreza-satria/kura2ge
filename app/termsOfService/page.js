import Image from 'next/image';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Menggunakan ikon untuk list
import bannerImage from '@/public/assets/asset2.png'; // Impor gambar secara lokal

export default function TermsOfService() {
  return (
    <main className="bg-slate-50 shadow-xl rounded-2xl border-pink-300 border mt-8">
      <div className="max-w-4xl min-h-screen px-4 py-8 mx-auto sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src={bannerImage}
            alt="Terms of Service Banner"
            width={1200}
            height={400}
            className="object-cover w-full h-48"
            priority // Prioritaskan gambar di atas layar untuk dimuat
          />
        </div>

        {/* Judul Utama */}
        <div className="py-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            TERMS OF SERVICE
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-slate-500">
            Please kindly check my <span className="font-medium text-pink-500">Terms Of Service</span> before ordering a commission.
          </p>
        </div>

        {/* Seksi "Accept / Don't Accept" dengan Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Kolom "I ACCEPT" */}
          <div>
            <h2 className="text-lg font-semibold text-green-600">I ACCEPT:</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-green-500" />
                <span>Original Character</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-green-500" />
                <span>Canon Character</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-green-500" />
                <span>Couple</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="flex-shrink-0 mt-1 text-green-500" />
                <span>etc.</span>
              </li>
            </ul>
          </div>

          {/* Kolom "I DON'T ACCEPT" */}
          <div>
            <h2 className="text-lg font-semibold text-red-600">I DON'T ACCEPT:</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <FaTimesCircle className="flex-shrink-0 mt-1 text-red-500" />
                <span>Furry (animal ears are ok!)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="flex-shrink-0 mt-1 text-red-500" />
                <span>Not Safe For Work (NSFW) Stuff</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="flex-shrink-0 mt-1 text-red-500" />
                <span>Mecha</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="flex-shrink-0 mt-1 text-red-500" />
                <span>Aged People</span>
              </li>
              <li className="flex items-start gap-3">
                <FaTimesCircle className="flex-shrink-0 mt-1 text-red-500" />
                <span>Complex poses/background</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-12" />

        {/* Seksi Aturan Lainnya */}
        <div className="space-y-10 text-slate-700">
          <div>
            <h2 className="mb-4 text-xl font-bold text-pink-600">ORDER, REQUEST, AND WORKING TIME</h2>
            <ul className="pl-5 space-y-4 list-disc">
              <li>If you'd like to order my commission, please DM me on <a href="https://x.com/kura2ge" target="_blank" rel="noopener noreferrer" className="font-medium text-pink-500 hover:underline">Twitter</a> / <a href="https://www.instagram.com/kura2ge" target="_blank" rel="noopener noreferrer" className="font-medium text-pink-500 hover:underline">Instagram</a>.</li>
              <li>Please provide canvas size (1:1, 3:4, 9:16, etc.), clear references, and tell me details of what I should know (e.g., expression, character details, vibes, etc.) so that I can project your request to the artwork better.</li>
              <li>I will work on your illustration based on the queue. If you have a deadline or need a rush order, please discuss it with me.</li>
              <li>It will take 3-14 days to work on the artwork depending on how detailed it is.</li>
              <li>The finished artwork will be posted as part of my portfolio (unless for commercial use).</li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-xl font-bold text-pink-600">PRICING & PAYMENT</h2>
            <ul className="pl-5 space-y-4 list-disc">
              <li>The price list is for personal use only.</li>
              <li>For commercial use, the price will be x2 the original price.</li>
              <li>The payment will be due upfront (either full or 50%, with the remaining 50% due after the sketch is completed).</li>
              <li>I accept payment via BCA/Gopay (local) and PayPal (international).</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-pink-600">CANCELLATION & REFUND</h2>
            <ul className="pl-5 space-y-4 list-disc">
              <li>I will decline your order if I feel that I am not capable of fulfilling your request.</li>
              <li>You will not be able to request a refund once I have started working on your order, but please do tell me if it's an urgent situation.</li>
              <li>If I am unable to complete your order by the deadline and you want to cancel the order, feel free to discuss it with me and I will refund your order.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}