import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-10 h-10 relative">
      <Image src="/loading.svg" fill alt="loading" />
    </div>
  );
};

export default Loader;
