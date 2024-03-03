const API_KEY = process.env.API_KEY;
import Results from "@/components/Results";

export default async function page({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}`
  );
  const data = await res.json();
  if (!data) {
    throw new Error("Data verisi yok");
  }
  const results = data.results;
  console.log("🚀 ~ page ~ results:", results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
