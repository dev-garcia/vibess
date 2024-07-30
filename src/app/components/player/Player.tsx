"use client";

import { Track } from "@/app/types";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import {
  FaPause,
  FaPlay,
  FaRandom,
  FaRedo,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";

interface PlayerProps {
  trackList: Track[];
}

const Player: FC<PlayerProps> = ({ trackList }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const loadTrack = useCallback(
    (index: number) => {
      const audio = audioRef.current;
      if (audio) {
        audio.src = trackList[index].url;
        audio.load();
        setCurrentTrackIndex(index);
        setCurrentTime(0);
        if (isPlaying) {
          audio.play();
        }
      }
    },
    [trackList, isPlaying],
  );

  const playTrack = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  }, []);

  const pauseTrack = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const prevTrack = useCallback(() => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackList.length - 1 : prevIndex - 1,
    );
  }, [trackList]);

  const nextTrack = useCallback(() => {
    setCurrentTrackIndex((prevIndex) =>
      isRandom
        ? Math.floor(Math.random() * trackList.length)
        : (prevIndex + 1) % trackList.length,
    );
  }, [trackList, isRandom]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
      const handleLoadedMetadata = () => setTotalDuration(audio.duration);
      const handleEnded = () => nextTrack();

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [nextTrack]);

  useEffect(() => {
    loadTrack(currentTrackIndex);
  }, [currentTrackIndex, loadTrack]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-80 text-center">
        <img
          src={trackList[currentTrackIndex].cover}
          alt={trackList[currentTrackIndex].title}
          className="w-full h-48 object-cover"
        />
        <h2 className="mt-2 text-xl font-bold text-white">
          {trackList[currentTrackIndex].title}
        </h2>
        <p className="mt-2 font-medium text-gray-400">
          {trackList[currentTrackIndex].artist}
        </p>
        <audio ref={audioRef} />
        <div className="mt-4 flex items-center justify-center space-x-4">
          <button
            onClick={prevTrack}
            className="text-white hover:text-gray-400"
          >
            <FaStepBackward size={20} />
          </button>
          <button
            onClick={isPlaying ? pauseTrack : playTrack}
            className="mx-4 text-white hover:text-gray-400"
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button
            onClick={nextTrack}
            className="text-white hover:text-gray-400"
          >
            <FaStepForward size={20} />
          </button>
          <button
            onClick={() => setIsRandom(!isRandom)}
            className="ml-4 text-white hover:text-gray-400"
          >
            <FaRandom size={20} />
          </button>
          <button
            onClick={() => loadTrack(currentTrackIndex)}
            className="ml-4 text-white hover:text-gray-400"
          >
            <FaRedo size={20} />
          </button>
        </div>
        <div className="mt-4 w-full">
          <div className="text-white">
            <span>{formatTime(currentTime)}</span> /{" "}
            <span>{formatTime(totalDuration)}</span>
          </div>
          <input
            type="range"
            min={0}
            max={totalDuration}
            value={currentTime}
            onChange={(e) => {
              const audio = audioRef.current;
              if (audio) {
                audio.currentTime = Number(e.target.value);
                setCurrentTime(audio.currentTime);
              }
            }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
