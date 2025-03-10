"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/nextjs";

// Dynamically import UserButton to avoid SSR mismatch
const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);

const Navbar = () => {
  // Ensure component renders only on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid SSR mismatches

  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SOCIALGRAM
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex gap-4 w-[50%] text-sm items-center justify-between">
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
          <div className="hidden xl:flex items-center bg-slate-100 p-2 border border-slate-300 rounded-xl">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent outline-none"
              suppressHydrationWarning
            />
            <Image src="/search.png" alt="search" width={14} height={14} />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          {/* Loading spinner */}
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="People" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="Messages"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="Notifications"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div>
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
