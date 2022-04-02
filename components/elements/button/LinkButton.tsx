import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  text: string;
  linkUrl: string;
  logoUrl?: string;
  passHref?: boolean;
  devicon?: string;
};

// Bonus: Add transition animation on hover
const LinkButton = ({ logoUrl, devicon, text, passHref, linkUrl }: Props) => {
  return (
    <Link href={linkUrl} passHref={passHref ? passHref : true}>
      <a
        className="flex border-2 border-black bg-black text-ocean-green-two hover:bg-turquoise-green hover:text-black rounded-md p-1 items-center transition-colors"
        target="_blank"
      >
        {logoUrl && <Image src={logoUrl} width={8} height={8} />}
        {devicon && (
          <i
            className={`${devicon} text-illuminating-emerald text-2xl w-fit h-fit pr-1`}
          ></i>
        )}
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
