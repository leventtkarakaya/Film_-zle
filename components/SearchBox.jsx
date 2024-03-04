"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between max-w-6xl mx-auto px5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Film ara"
        className="w-full bg-transparent rounded-md outline-none h-14 placeholder:bg-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-500 disabled:text-gray-400"
        disabled={search === ""}
      >
        Ara
      </button>
    </form>
  );
}
