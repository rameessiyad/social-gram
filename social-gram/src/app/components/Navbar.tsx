import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* LEFT */}
      <div className="">
        <Link href="/">SOCIALGRAM</Link>
      </div>
      {/* CENTER */}
      <div className="hidden"></div>
      {/* RIGHT */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
