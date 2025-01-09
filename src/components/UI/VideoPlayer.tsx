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
    <div className="relative flex h-[400px] min-w-[562px] cursor-pointer items-center justify-center">
      {showOverlay && (
        <img
          onClick={handlePlayPause}
          src={overlaySrc}
          alt="Video Overlay"
          className="absolute z-[1] h-full w-full rounded-2xl object-cover"
        />
      )}
      <video
        ref={videoRef}
        className="h-full w-full rounded-2xl"
        src={videoSrc}
        controls
      />
      {!isPlaying && (
        <PlayButton onClick={handlePlayPause} className="absolute z-10" />
      )}
    </div>
  );
}
