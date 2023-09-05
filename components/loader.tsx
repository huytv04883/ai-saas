import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="h-full p-20 flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.jpg" fill alt="Logo" />
      </div>
    </div>
  );
};

export default Loader;
