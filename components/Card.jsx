import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { IoIosPlayCircle } from "react-icons/io";
export default function Card({ item }) {
  return (
    <div className="relative transition-shadow duration-200 rounded-lg cursor-pointer group sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2">
      <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-150%] ">
        <IoIosPlayCircle className="w-[50px] h-[50px]" />
      </div>
      <Link href={`/movie/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            item.backdrop_path || item.poster_path
          }`}
          width={500}
          height={500}
          className="transition-opacity duration-300 sm:rounded-t-lg group-hover:opacity-75"
        />
        <div className="p-2">
          <p className="font-medium line-clamp-2">{item.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {item.title || item.name}
          </h2>
          <p className="flex items-center ">
            {item.release_date || item.first_air_date}
            <FiThumbsUp className="h-5 ml-3 mr-1" />
            <span className="ml-1">{item.vote_count}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
