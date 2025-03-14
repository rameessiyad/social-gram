import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-2 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500 ">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30988801/pexels-photo-30988801/free-photo-of-elegant-flat-lay-of-yellow-tulips-and-white-collar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Mubarak</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30988801/pexels-photo-30988801/free-photo-of-elegant-flat-lay-of-yellow-tulips-and-white-collar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Mubarak</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30988801/pexels-photo-30988801/free-photo-of-elegant-flat-lay-of-yellow-tulips-and-white-collar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <span className="font-semibold">Mubarak</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
