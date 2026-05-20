import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-4 rounded-2xl p-6 backdrop-blur-md shadow-2xl">

          <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-300"
            >
              <Home size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;