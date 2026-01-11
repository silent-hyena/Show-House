import RatingBox from "./RatingBox";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: string;
};
export default function MovieCard({id=0,title="Movie Title",poster_path="",release_date="", vote_average="0.0" }:Movie) {
    
    return (<>

        <div
        
            className="group relative h-[240px] w-[150px] m-1 rounded-xl bg-cover gap-5 bg-center shadow-lg flex-shrink-0 overflow-hidden"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
            }}
        >   
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between items-between p-4">
                
                    <RatingBox rating={vote_average}/>
                    <div className="flex flex-col ">
                        <p className="text-white text-lg font-semibold">
                            {title}
                        </p>
                        <p className="text-gray-300 text-sm">
                            {release_date}
                        </p>
                    </div>
                
            </div>
        </div>
    </>)
}