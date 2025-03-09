import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SOCIALGRAM
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex gap-4 w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-4 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="home" width={16} height={16} />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex items-center gap-2">
            <Image src="/friends.png" alt="home" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/stories" className="flex items-center gap-2">
            <Image src="/stories.png" alt="home" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
