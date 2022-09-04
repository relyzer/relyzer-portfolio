import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeLogo = () => {
  return (
    <Link href="/">
      <a className="w-[3.75rem] h-[3.75rem] lg:m-2">
        <Image
          className=""
          src="/images/kevin-logo.png"
          alt="kevintyh logo"
          width={60}
          height={60}
          layout="fixed"
        />
      </a>
    </Link>
  );
};

export default HomeLogo;
