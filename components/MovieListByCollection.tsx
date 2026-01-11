import Link from "next/link"
import MovieCard from "./movieCard";



type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: string;
};

type TMDBResponse = {
    parts: Movie[];
};
async function getMovieByCollection(id:string):Promise<TMDBResponse | null> {
    try{
        const url = `https://api.themoviedb.org/3/collection/${id}`;

        const res = await fetch(url, {
        headers: {
            accept: "application/json",
            // "User-Agent": "Mozilla/5.0",
            Connection: "keep-alive",
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN?.trim()}`,
        },
        next: { revalidate: 3600 }, // caching 
    });

    if (!res.ok) {
        // console.log()
        // throw new Error("Failed to fetch movies");
        return null;
    }

    return (res.json());
    }
    catch(err){
        console.log(err);
        return null;
    }
}

export default async function MovieCollectionList({CollectionID}: {CollectionID:string}){
    const movieList = await getMovieByCollection(CollectionID);
    if(!movieList || !movieList.parts){
        return <></>;
    }

    return<>

        <h3 className="dark:text-blue-50 text-3xl align-content-center text-slate-800 m-0 font-bold">Related</h3>
        <hr className="border-t-2 border-slate-600 mt-0 mb-1" />
        <div className="flex flex-row align-center justify-center flex-nowrap overflow-x-scroll gap-2">
            {movieList.parts.map((movie,i)=>(
                <Link key={i} href={`/movie/${movie.id}`}>
                    <MovieCard id={movie.id} title={movie.title} poster_path={movie.poster_path} 
                    release_date={movie.release_date} vote_average={movie.vote_average} />
                </Link>
            ))}
        </div>
    </>
}