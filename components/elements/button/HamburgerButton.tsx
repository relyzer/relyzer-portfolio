import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleOnClick: () => void;
};

const HamburgerButton = ({ handleOnClick }: Props) => {
  return (
    <button
      className="cursor-pointer z-10 text-nyanza text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl"
      onClick={handleOnClick}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default HamburgerButton;
