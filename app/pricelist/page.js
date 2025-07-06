import Profile from '../components/Profile';

export default function PricelistPage() {
  return (
    <>
      <Profile />
      
      {/* Container Utama */}
      <div className="px-4 mt-6">
        <div className="text-center">
          <h2 className="font-extrabold tracking-tight text-slate-900 text-2xl">
            PRICE LIST
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm text-slate-500">
            *please note that there will be a difference between the local price &amp; international price.
          </p>
        </div>

        {/* Wrapper untuk semua kartu harga dengan spacing konsisten */}
        <div className="max-w-2xl mx-auto mt-12 space-y-8">

          {/* Kartu 1: Chibi Illustration */}
          <div className="p-6 bg-white border border-pink-300 rounded-lg shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-pink-600">CHIBI ILLUSTRATION</h3>
            <ul className="pl-5 space-y-3 text-sm list-disc">
              <li className="text-slate-700">Half Body = Rp 60.000 / $20 per character</li>
              <li className="text-slate-700">Full Body = Rp 100.000 / $35 per character</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img src="http://placehold.co/500x500" alt="Chibi Example 1"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
              <img src="http://placehold.co/500x500" alt="Chibi Example 2"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
            </div>
          </div>

          {/* Kartu 2: Colored Sketch */}
          <div className="p-6 bg-white border border-pink-300 rounded-lg shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-pink-600">COLORED SKETCH ILLUSTRATION</h3>
            <ul className="pl-5 space-y-3 text-sm list-disc">
              <li className="text-slate-700">Headshot = Rp 100.000 / $35 per character</li>
              <li className="text-slate-700">Bust Up = Rp 140.000 / $45 per character</li>
              <li className="text-slate-700">Half Body = Rp 175.000 / $60 per character</li>
              <li className="text-slate-700">Full Body = Rp 190.000 / $75 per character</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img src="http://placehold.co/500x500" alt="Sketch Example 1"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
              <img src="http://placehold.co/500x500" alt="Sketch Example 2"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
            </div>
          </div>

          {/* Kartu 3: Full Rendered */}
          <div className="p-6 bg-white border border-pink-300 rounded-lg shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-pink-600">FULL RENDERED ILLUSTRATION</h3>
            <ul className="pl-5 space-y-3 text-sm list-disc">
              <li className="text-slate-700">Headshot = Rp 150.000 / $45 per character</li>
              <li className="text-slate-700">Bust Up = Rp 190.000 / $60 per character</li>
              <li className="text-slate-700">Half Body = Rp 240.000 / $75 per character</li>
              <li className="text-slate-700">Full Body = Rp 350.000 / $90 per character</li>
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <img src="http://placehold.co/500x500" alt="Render Example 1"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
              <img src="http://placehold.co/500x500" alt="Render Example 2"  className="w-64 h-auto transition duration-300 shadow-lg hover:rotate-3 hover:scale-125" />
            </div>
          </div>

          {/* Kartu 4: Biaya Lainnya */}
          <div className="p-6 bg-white border border-pink-300 rounded-lg shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-pink-600">BACKGROUND REQUEST & OTHER FEES</h3>
            <ul className="pl-5 space-y-3 text-sm list-disc">
              <li className="text-slate-700">Background request = 10.000 IDR / $3</li>
              <li className="text-slate-700">Additional properties (umbrella, laptop, etc.) = Rp 5.000 - Rp 20.000 / $1 - $5</li>
            </ul>
          </div>

        </div>

        <p className="mt-12 text-base text-center text-slate-600">
          I will send you the invoice after you order the commission;
          <br />
          please <span className='font-extrabold'>double-check</span> before making payment.
        </p>
      </div>
    </>
  );
}