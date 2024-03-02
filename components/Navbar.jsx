import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center gap-4 p-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
      <NavbarItem title="Treding" param="ferchTreding" />
      <NavbarItem title="Top Rated" param="ferchTopRated" />
    </div>
  );
}
