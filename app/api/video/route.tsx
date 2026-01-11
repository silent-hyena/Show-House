import { NextRequest } from "next/server";

async function getMovieTrailer(movieID: string) {

    const URL  = `https://api.themoviedb.org/3/movie/${movieID}/videos`
  const res = await fetch(URL, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return null; 
  }

  return res.json();
}

export async function GET(req: NextRequest) {
  const movieID = req.nextUrl.searchParams.get("movieId");

  if (!movieID) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const data = await getMovieTrailer(movieID);

  if (!data || !data.results || data.results.length === 0) {
    return Response.json({ TraierLink:"" });
  }

  let link ="";
  for(let i =0; i< data.results.length; i++){
    const obj = data.results[i];
    if( obj.site == "YouTube" && obj.type == "Trailer" && obj.official == true){
        link = `https://www.youtube.com/watch?v=${obj.key}`;
        break;
    }
  }
  return Response.json({link:link});
}

