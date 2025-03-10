import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500 ">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500 ">
        <div className="flex items-center gap-2">
          <span className="text-black">Ramees Siyad</span>
          <span>@ramees</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          consequatur laboriosam enim vitae natus!
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} className="" />
          <span>
            Living in <b>India</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} className="" />
          <span>
            Went to <b>MES College</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} className="" />
          <span>
            Works at <b>Cords Innovations</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://github.com/rameessiyad"
              className="text-blue-500 font-medium"
            >
              ramees
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="p-2 bg-blue-500 text-white text-xs rounded-md cursor-pointer">
          Follow
        </button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
