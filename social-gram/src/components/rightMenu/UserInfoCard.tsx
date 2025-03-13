/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = async ({ user }: { user?: User }) => {
  const createAtDate = new Date(user?.createdAt || "");

  const formatedDate = createAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = await auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user?.id,
      },
    });

    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user?.id,
      },
    });

    followRes ? (isFollowing = true) : (isFollowing = false);

    const followReqRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user?.id,
      },
    });

    followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

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
          <span className="text-black">
            {" "}
            {user?.name && user?.surname
              ? user?.name + " " + user?.surname
              : user?.username}
          </span>
          <span>@{user?.username}</span>
        </div>
        {user?.description && <p>{user?.description}</p>}

        {user?.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16} className="" />
            <span>
              Living in <b>{user?.city}</b>
            </span>
          </div>
        )}

        {user?.school && (
          <div className="flex items-center gap-2">
            <Image
              src="/school.png"
              alt=""
              width={16}
              height={16}
              className=""
            />
            <span>
              Went to <b>{user?.school}</b>
            </span>
          </div>
        )}

        {user?.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16} className="" />
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          {user?.website && (
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="" width={16} height={16} />
              <Link href={user?.website} className="text-blue-500 font-medium">
                ramees
              </Link>
            </div>
          )}

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined {formatedDate}</span>
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
