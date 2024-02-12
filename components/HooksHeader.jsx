import Image from "next/image";
import React from "react";

const HooksHeader = () => {
  return (
    <nav className="nav-container">
      <Image
        alt="walidchaybi"
        className="logo"
        src="/walidchaybi.png"
        width={120}
        height={120}
      />
      <Image
        alt="github"
        className="logo"
        src="/icon-github.svg"
        width={100}
        height={100}
      />
    </nav>
  );
};

export default HooksHeader;
