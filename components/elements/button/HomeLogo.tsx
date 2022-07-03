import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomeLogo = () => {
  return (
    <Link href="/">
      <button>
        <Image
          className=""
          src="/images/kevin-logo.png"
          alt="kevintyh logo"
          width={60}
          height={60}
        />
      </button>
    </Link>
  );
};

export default HomeLogo;
