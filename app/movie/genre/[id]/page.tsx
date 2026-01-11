import MoviesListByGenre from "@/components/MoviesListByGenre";
import Navbar from "@/components/Navbar";
type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function MovieDetail({ params }: PageProps) {
    // const movieId = params.id;
    const { id } = await params;
    return (<>
        <Navbar />
        <div className="flex flex-col gap-2 m-0">
            <h4 className="font-bold text-slate-100 text-[25px] mt-3 mb-0">Top in {id}</h4>

            <MoviesListByGenre genreId={id} pageStart="1" />
        </div>

    </>)

}