import React, { useState } from "react";

type Props = {
  text: string;
  className: string;
};

const ReadMore = ({ text, className }: Props) => {
  const [toggleReadMore, setToggleReadMore] = useState(true);
  const handleReadMore = () => {
    setToggleReadMore(!toggleReadMore);
  };

  return (
    <p className={className}>
      {toggleReadMore ? text.slice(0, 170) : text}
      <span
        onClick={handleReadMore}
        className="italic font-semibold cursor-pointer text-green-turquoise-green-two hover:text-green-turquoise-green"
      >
        {text.length > 170
          ? toggleReadMore
            ? "\t...show more"
            : "\n...show less"
          : ""}
      </span>
    </p>
  );
};

export default ReadMore;
