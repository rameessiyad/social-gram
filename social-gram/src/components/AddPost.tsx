import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/30586023/pexels-photo-30586023/free-photo-of-camel-ride-in-the-egyptian-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder="What on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default AddPost;
