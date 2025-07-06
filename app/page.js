"use client";
import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Profile />

      {/* Kontainer utama untuk konten di bawah profil */}
      <main className="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        
        {/* Seksi Status Komisi */}
        <section className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ✨ Commission Status ✨
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link href="#" className="px-5 py-2 text-sm font-medium text-pink-600 bg-pink-100 rounded-full shadow-sm hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Local: Open
            </Link>
            <Link href="#" className="px-5 py-2 text-sm font-medium text-pink-600 bg-pink-100 rounded-full shadow-sm hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              International: Open
            </Link>
            <a href="https://trello.com/b/h6ZCvSFi/kurages-commission-progress" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-medium text-white transition-colors bg-pink-500 rounded-full shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Commission Progress
            </a>
          </div>
        </section>

        {/* Pemisah antar seksi */}
        <div className="py-12">
          <hr className="border-slate-200" />
        </div>

        {/* Seksi Latest Posts */}
        <section>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Latest Posts
          </h2>
          {/* Kontainer untuk widget agar terlihat lebih rapi */}
          <div className="p-2 overflow-hidden bg-white rounded-xl shadow-lg ring-1 ring-slate-200">
            <div className="elfsight-app-f4382a88-8b6f-4de0-a2f3-65492c6de9d7" data-elfsight-app-lazy></div>
          </div>
        </section>

      </main>

      {/* Gunakan komponen <Script> dari Next.js untuk performa lebih baik */}
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
    </>
  );
}