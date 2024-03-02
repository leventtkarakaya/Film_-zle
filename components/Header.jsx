"use client";
import MenuItem from "@/components/MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="About" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center gap-1 ">
          <span className="px-2 py-1 text-2xl font-bold rounded-lg bg-amber-600">
            FİLM
          </span>
          <span className="hidden text-xl sm:inline">İzle</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
