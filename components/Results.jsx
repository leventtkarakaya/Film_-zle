import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results &&
        results.map((item, index) => <Card item={item} key={index} />)}
    </div>
  );
}
