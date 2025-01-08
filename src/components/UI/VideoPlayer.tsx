import { useRef, useState } from "react";
import PlayButton from "../Icons/PlayButton";

type Props = {
  videoSrc: string;
  overlaySrc: string;
};

export default function VideoPlayer({ videoSrc, overlaySrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
        setShowOverlay(false);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative min-w-[562px] h-[400px] flex justify-center items-center cursor-pointer ">
      {showOverlay && <img onClick={handlePlayPause} src={overlaySrc} alt="Video Overlay" className="absolute w-full h-full object-cover z-[1] rounded-2xl  " />}
      <video ref={videoRef} className="w-full h-full rounded-2xl" src={videoSrc} controls />
      {!isPlaying && <PlayButton onClick={handlePlayPause} className="absolute z-10" />}
    </div>
  );
}
