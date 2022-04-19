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
        className="flex text-ocean-green-two bg-black-space-cadet text-green-turquoise-green hover:bg-green-bottle-green text-sm sm:text-base rounded-3xl px-3 py-2 md:px-3 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-3 items-center transition-colors"
        target="_blank"
      >
        {logoUrl && <Image src={logoUrl} width={8} height={8} />}
        {devicon && (
          <i
            className={`${devicon} text-green-turquoise-green/80 text-xl lg:text-2xl w-fit h-fit pr-1`}
          ></i>
        )}
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
