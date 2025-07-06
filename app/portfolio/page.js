import Profile from "../components/Profile";

export default function PortfolioPage() {
  return (
    <>
      <Profile />

      {/* Kontainer utama untuk mengatur lebar dan padding halaman */}
      <main className="max-w-7xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            PORTFOLIO
          </h2>
        </div>

        {/* Wrapper untuk semua seksi galeri dengan jarak yang konsisten */}
        <div className="mt-12 space-y-16">

          {/* Seksi 1: Chibi Illustration */}
          <section>
            <h3 className="mb-8 text-2xl font-bold text-center text-slate-800">
              CHIBI ILLUSTRATION
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden transition duration-300 rounded-lg hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Chibi Illustration 1" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Chibi Illustration 2" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Chibi Illustration 3" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Chibi Illustration 4" width={500} height={500} className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

          {/* Seksi 2: Colored Sketch Illustration */}
          <section>
            <h3 className="mb-8 text-2xl font-bold text-center text-slate-800">
              COLORED SKETCH ILLUSTRATION
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Colored Sketch 1" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Colored Sketch 2" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Colored Sketch 3" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Colored Sketch 4" width={500} height={500} className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

          {/* Seksi 3: Full Rendered Illustration */}
          <section>
            <h3 className="mb-8 text-2xl font-bold text-center text-slate-800">
              FULL RENDERED ILLUSTRATION
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Full Rendered 1" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Full Rendered 2" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Full Rendered 3" width={500} height={500} className="object-cover w-full h-full" />
              </div>
              <div className="overflow-hidden transition duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-125">
                <img src="http://placehold.co/1080x1080" alt="Full Rendered 4" width={500} height={500} className="object-cover w-full h-full" />
              </div>
            </div>
          </section>

          {/* Tautan ke Instagram */}
          <div className="pt-8 text-center">
            <p className="text-slate-600">
              For more examples, please kindly check my{' '}
              <a target="_blank" href="https://www.instagram.com/kura2ge" rel="noopener noreferrer" className="font-semibold text-pink-500 underline transition hover:text-pink-600">
                Instagram
              </a>
            </p>
          </div>
          
        </div>
      </main>
    </>
  )
}