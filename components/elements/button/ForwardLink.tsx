import React, { RefObject } from "react";
import Link from "next/link";

import { randomiser } from "../../../lib/utility/randomiser";

type Props = {
  href: string;
  title?: string;
};

const ForwardLink = ({ href, title }: Props) => {
  const prefixes = [
    "See my",
    "Check out my",
    "Look at my",
    "Go to...",
    "Scroll to...",
  ];
  return (
    <div className="flex m-auto justify-center mt-10">
      <Link href={href}>
        <a
          className="border-2 border-black bg-black px-5 py-2 text-ocean-green-two rounded-md hover:bg-turquoise-green hover:text-black transition-colors"
          suppressHydrationWarning
        >
          {title ? `${randomiser(prefixes)} ${title}!` : `Next!`}
        </a>
      </Link>
    </div>
  );
};

export default ForwardLink;
