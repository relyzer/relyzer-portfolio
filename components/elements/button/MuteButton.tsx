import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
    handleMute: () => void;
    className: string;
    isSoundEnabled: boolean;
}

const MuteButton = ({ handleMute, className, isSoundEnabled }: Props) => {
    return (
        <button onClick={handleMute} className={className}>
            {isSoundEnabled && <FontAwesomeIcon icon={faVolumeHigh} />}
            {!isSoundEnabled && <FontAwesomeIcon icon={faVolumeXmark} />}
        </button>
    )
}

export default MuteButton;