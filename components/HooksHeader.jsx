"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const HooksHeader = () => {
  return (
    <nav className="w-full flex justify-between">
      <Link href="/">
        <Image
          alt="walidchaybi"
          className="logo"
          src="/walidchaybi.png"
          width={120}
          height={120}
        />
      </Link>
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
