// app/api/search/route.ts
import { NextRequest } from "next/server";


type movie = {
    id: number;
    title: string;
};
type tmdb = {
  results: movie[]
}

async function searchMovies(query: string, page = "1"): Promise<tmdb | null> {
  const encodedQuery = encodeURIComponent(query);

  const URL = `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=en-US&page=${page}&region=IN`;

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
  const q = req.nextUrl.searchParams.get("q");
  const page = req.nextUrl.searchParams.get("page") || "1";

  if (!q) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const data = await searchMovies(q, page);
//   console.log(data)

  if (!data || !data.results || data.results.length === 0) {
    return Response.json({ movies: [] });
  }

  const movieData = data.results.slice(0,10).map((m) => ({
    id: m.id,
    title: m.title,
  }));

  return Response.json({
    movies: movieData,
   
  });
}

