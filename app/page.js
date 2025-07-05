"use client";
import Image from "next/image";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Profile/>
      <div className="m-6 text-center">
          <h2 className="mb-6 text-xl font-bold text-gray-800">✨ COMMISSION STATUS ✨</h2>
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-96">
              <a href="#"
                  className="px-4 py-2 text-base font-light text-pink-500 transition duration-300 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">Local:
                  Open</a>
              <a href="#"
                  className="px-4 py-2 text-base font-light text-pink-500 transition duration-300 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">International:
                  Open</a>
              <a href="https://trello.com/b/h6ZCvSFi/kurages-commission-progress" target="_blank"
                  className="px-4 py-2 text-base font-light text-pink-500 transition duration-300 border border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">Commission
                  Status</a>
          </div>
      </div>

      <hr className="mx-4 my-8 border-pink-300" />

      <div className="mx-4 my-8">
          <h2 className="mb-4 text-xl font-bold font-gray-800">Latest Posts</h2>
          <div className="elfsight-app-f4382a88-8b6f-4de0-a2f3-65492c6de9d7" data-elfsight-app-lazy></div>
      </div>

      <script src="https://static.elfsight.com/platform/platform.js" async></script>
    </>
  );
}
