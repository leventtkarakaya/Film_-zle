import Results from "@/components/Results";
import axios from "axios";

export default async function page({ params }) {
  const searchMovie = params.searchMovie;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.API_KEY,
          query: searchMovie,
        },
      }
    );

    const results = response.data.results;
    console.log("🚀 ~ page ~ ress:", results);

    return (
      <div>
        {results && results.length === 0 && (
          <h1 className="pt-6 text-center">Film Bulunamadı</h1>
        )}
        {results && <Results results={results} />}
      </div>
    );
  } catch (error) {
    console.error("Hata oluştu:", error);
    return <div>Hata oluştu. Lütfen tekrar deneyin.</div>;
  }
}
