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
        <a className="next-button">
          {title ? `${randomiser(prefixes)} ${title}!` : `Next!`}
        </a>
      </Link>
    </div>
  );
};

export default ForwardLink;
