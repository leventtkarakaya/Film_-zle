import axios from "axios";
import Image from "next/image";

export default async function page({ params }) {
  const serchParams = params.id;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${serchParams}?api_key=${process.env.API_KEY}`
  );
  const response = res.data;

  console.log("🚀 ~ page ~ response:", response);

  return (
    <div className="w-full">
      <div className="flex flex-col content-center p-4 mx-auto max-w-[1440px] md:pt-8 md:flex-row md:space-x-10 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            response.backdrop_path || response.backdrop_path
          }`}
          width={500}
          height={500}
          alt={response.title}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">
            {response.title || response.name}
          </h2>
          <p className="mb-3 text-lg">{response.overview}</p>
          <p>
            <span className="mr-1 font-semibold">Vizyona Tarihi :</span>
            {response.release_date || response.first_air_path}
          </p>
          <p>
            <span className="mr-1 font-semibold">İzlenme :</span>
            {response.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
