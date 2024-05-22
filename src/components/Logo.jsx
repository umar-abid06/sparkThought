import React from "react";
import blog_logo from "../assets/blog-logo.png";

function Logo() {
  return (
    <>
      <img
        src={blog_logo}
        alt="blog-logo"
        className={`w-[60px] text-white inline-bock my-2 py-2 duration-200 hover:bg-red-300 rounded-full `}
      />
    </>
  );
}

export default Logo;
