import Image from "next/image";


type Cast = {
    name: string;
    profile_path: string | null;
    character: string;
    known_for_department: string
};

export default function CastList({ cast }: { cast: Cast[] }) {
    return (<>
        <div className="my-3 p-1 flex flex-col">
            <h4 className="font-bold dark:text-slate-100 text-slate-700 text-[25px] mt-0 mb-0">Acting Cast</h4>
            <hr className="border-t-2 border-slate-600 mt-0 mb-2" />

            <div className="flex align-center justify-center flex-wrap gap-3">

                {cast
                    .filter(c => c.known_for_department == "Acting" && c.profile_path)
                    .slice(0, 20)
                    .map((c, idx) => (
                        <div key={idx} className="flex flex-col p-0 m-0">

                            {/* DESKTOP VIEW: Hidden on mobile, flex on sm and up */}
                            <div className="hidden sm:flex align-center justify-center flex-col w-[150px] mt-3  h-[230px]">
                                
                                <Image
                                    src={`https://image.tmdb.org/t/p/w200/${c.profile_path}`}
                                    alt={c.name}
                                    width={150}
                                    height={180}
                                    placeholder="blur"
                                    blurDataURL="/person_placeholder.jpg"
                                    className="m-0 w-[150px] h-[180px] rounded-lg object-cover"
                                />
                               
                                <div className="mt-2 text-[14px] leading-tight font-mono text-slate-700 dark:text-slate-300">
                                    <span className="font-bold">{c.name}</span>
                                    <br />
                                    <span className="text-xs opacity-80">{c.character}</span>
                                </div>
                            </div>

                            {/* MOBILE VIEW: Block on mobile, hidden on sm and up */}
                            <div className="sm:hidden">
                                <div className="custom_pill_box">
                                    {c.name}
                                </div>
                            </div>

                        </div>
                    ))}

            </div>
        </div>
    </>)
}