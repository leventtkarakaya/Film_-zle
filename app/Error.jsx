"use client";
import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 text-center  w-[450px] h-[450px] items-center flex flex-col justify-center">
        <h1 className="text-2xl">Lütfen Tekrar deyeniz</h1>
        <button
          className="text-2xl hover:text-amber-600"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
