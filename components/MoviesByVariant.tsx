import MovieCard from "./movieCard";
import Link from "next/link"

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
};

type TMDBResponse = {
    results: Movie[];
};

type MovieVariant = {
    movieType: "now_playing" | "popular" | "upcoming";
};
async function getMovies({movieType}: MovieVariant): Promise<TMDBResponse | null> {

    try{
    // const URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const URL = `https://api.themoviedb.org/3/movie/${movieType}?language=en-US&page=1`;

    if (!process.env.TMDB_ACCESS_TOKEN) {
    throw new Error("TMDB_ACCESS_TOKEN is missing");
        }


    const res = await fetch(URL, {
        headers: {
            accept: "application/json",
            // "User-Agent": "Mozilla/5.0",
            Connection: "keep-alive",
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN?.trim()}`,
        },
        next: { revalidate: 3600 }, // caching 
    });

    if (!res.ok) {
        return null
    }
    return (res.json());
    }
    catch(err){
        console.error("Network error:", err);
        return null;
    }

    
}

export default async function MoviesByVariant({movieType}: MovieVariant) {
    const movieList = await getMovies({ movieType: movieType });
    if (!movieList || !movieList.results) return null;
    let heading ="";
    if(movieType == "now_playing"){
        heading = "Now In Theatres";
    }
    else if( movieType == "popular"){
        heading  = "Now Trending Movies";
    }
    else{
        heading = "Upcoming Movies";
    }

    return (
        <div className="my-[40px]">
            <h3 className="dark:text-blue-50 text-3xl align-content-center text-slate-800 m-0 font-bold">{heading}</h3>
            <hr className="border-t-2 border-slate-600 mt-0 mb-1" />


            <div className="flex  flex-row w-full flex-nowrap overflow-x-auto">

                {movieList.results.map((movie) => (
                    <div key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <MovieCard vote_average={movie.vote_average} id={movie.id} title={movie.title} poster_path={movie.poster_path} release_date={movie.release_date} />

                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}
