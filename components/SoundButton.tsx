import React from "react";
import useSound from "use-sound";

type Props = {
  name: string;
};

// Sound credit: https://freesound.org/people/nsstudios/sounds/321103/

const SoundButton = (prop: Props) => {
  // For onMouseLeave event
  //   const [play, { stop }] = useSound("./button_sound.wav");
  const [playbackRate] = React.useState(1.4);
  const [play] = useSound("./button_sound.wav", { playbackRate, volume: 0.7 });
  return <button onMouseEnter={() => play()}>{prop.name}</button>;
};

export default SoundButton;
