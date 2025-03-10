"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex flex-col gap-[4.5px] cursor-pointer">
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-out duration-500 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ease-out duration-500 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm origin-left ease-out duration-500 ${
              isOpen ? "-rotate-45" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="z-50 absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl">
            <Link href="/">Home</Link>
            <Link href="/friends">Friends</Link>
            <Link href="/groups">Groups</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/login">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
