// 'use client'
import Image from "next/image";
import MoviesListByGenre from "@/components/MoviesListByGenre";


import MoviesByVariant from "@/components/MoviesByVariant";
// import Image from "next/image"
// import Link from "next/link"
import Navbar from "@/components/Navbar";
export default function Home() {
  return (<>


    <Navbar />
    <div className="relative  h-[200px] md:h-[300px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/home_banner.webp"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Text Content */}
      <h2 className="relative z-10 text-[clamp(1.2rem,5vw,3rem)] dark:text-blue-50 text-white font-bold text-center leading-relaxed px-4">
        See What’s Trending.<br />
        Decide Your Next BingeWatch.<br />
        Share Your Collection With Friends.
      </h2>

    </div>


    {/* <NowPlayingMovies /> */}
    <MoviesByVariant movieType="upcoming" />
    <MoviesByVariant movieType="now_playing" />
    <MoviesByVariant movieType="popular" />

    <h3 className="dark:text-blue-50 text-3xl align-content-center text-slate-800 m-0 font-bold">Top in Action</h3>
    <hr className="border-t-2 border-slate-600 mt-0 mb-1" />

    <MoviesListByGenre pageStart="1" genreId="28" />
   






  </>
  );
}
