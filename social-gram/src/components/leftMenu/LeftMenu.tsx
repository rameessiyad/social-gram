import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "./Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="">
      {type === "home" && <ProfileCard />}
      <div className="p-2 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="" width={20} height={20} />
          <span>My Activity</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="" width={20} height={20} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="" width={20} height={20} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/news.png" alt="" width={20} height={20} />
          <span>News</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
        <Link
          href="/my-posts"
          className="flex gap-4 items-center p-2 rounded-lg hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="" width={20} height={20} />
          <span>Settings</span>
        </Link>
        <hr className="border-t-2 border-gray-50 w-36 self-center" />
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
