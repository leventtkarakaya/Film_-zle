import React from "react";
import Image from "next/image";
export default function loading() {
  return (
    <div className="flex justify-center">
      <img src={"/loading.svg"} alt="loading" width={200} height={200} />
    </div>
  );
}
