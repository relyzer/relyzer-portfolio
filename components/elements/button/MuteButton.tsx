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
    <button onClick={handleMute} className={className} aria-label="Mute" >
      {isSoundEnabled && (
        <span className="text-sm">
          <span className="text-lg">
            <FontAwesomeIcon icon={faVolumeHigh} />
          </span>
        </span>
      )}
      {!isSoundEnabled && (
        <span className="text-sm">
          <span className="text-lg">
            <FontAwesomeIcon icon={faVolumeXmark} />
          </span>
        </span>
      )}
    </button>
  );
};

export default MuteButton;
