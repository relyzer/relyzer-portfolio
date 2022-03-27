import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleMute: () => void;
  className: string;
  isSoundEnabled: boolean;
};

const MuteButton = ({ handleMute, className, isSoundEnabled }: Props) => {
  return (
    <button onClick={handleMute} className={className}>
      {isSoundEnabled && (
        <span className="text-sm">
          Mute! &#10140;&nbsp;
          <span className="text-lg">
            <FontAwesomeIcon icon={faVolumeHigh} />
          </span>
        </span>
      )}
      {!isSoundEnabled && <FontAwesomeIcon icon={faVolumeXmark} />}
    </button>
  );
};

export default MuteButton;
