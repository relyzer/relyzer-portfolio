import React from "react";
import useSound from "use-sound";

type Props = {
  name: string;
  isSoundEnabled: boolean;
  className?: string;
};

// Sound credit: https://freesound.org/people/nsstudios/sounds/321103/

const SoundButton = ({ name, isSoundEnabled, className }: Props) => {
  // For onMouseLeave event
  //   const [play, { stop }] = useSound("./button_sound.wav");
  const [playbackRate] = React.useState(1.4);
  const [play] = useSound("./button_sound.wav", {
    playbackRate,
    volume: 0.5,
    soundEnabled: isSoundEnabled,
  });
  return (
    <div
      onMouseEnter={() => play()}
      className={`${className ? className : ""}`}
    >
      {name}
    </div>
  );
};

export default SoundButton;
