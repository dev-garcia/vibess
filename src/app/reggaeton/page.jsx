"use client";
import React from "react";

import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRedo,
  FaRandom,
} from "react-icons/fa";
import Nav from "../components/Nav";

function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRandom, setIsRandom] = useState(false);

  const trackList = [
    {
      name: "Bzrp Music",
      artist: "Artista",
      imagem: "/images/playlists/reggaeton-cover.jpg",
      path: "/sons/reggaeton/01-Quevedo-BzrpMusicSessions-Vol52.mp3",
    },
    {
      name: "Despecha",
      artist: "Artista 2",
      imagem: "/images/playlists/reggaeton-cover.jpg",
      path: "/sons/reggaeton/03-Despecha.mp3",
    },
    {
      name: "La Bachata",
      artist: "Artista 3",
      imagem: "/images/playlists/reggaeton-cover.jpg",
      path: "/sons/reggaeton/04-LaBachata.mp3",
    },
    {
      name: "Me Porto Bonito",
      artist: "Artista 4",
      imagem: "/images/playlists/reggaeton-cover.jpg",
      path: "/sons/reggaeton/05-MePortoBonito.mp3",
    },
    {
      name: "Som",
      artist: "Artista 5",
      imagem: "/images/playlists/reggaeton-cover.jpg",
      path: "/sons/reggaeton/06-Monotonia.mp3",
    },
  ];

  const filteredTrackList = trackList.filter((track) => {
    const trackName = track.name.toLowerCase();
    const artistName = track.artist.toLowerCase();
    const search = searchTerm.toLowerCase();

    return trackName.includes(search) || artistName.includes(search);
  });

  const loadTrack = (index) => {
    const audio = audioRef.current;
    audio.src = filteredTrackList[index].path;
    audio.load();

    audio.addEventListener("loadedmetadata", () => {
      setTotalDuration(audio.duration);
    });

    setCurrentTrackIndex(index);
  };

  const playTrack = () => {
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    const audio = audioRef.current;
    audio.pause();
    setIsPlaying(false);
  };

  const nextTrack = () => {
    let nextIndex;
    if (isRandom) {
      nextIndex = Math.floor(Math.random() * filteredTrackList.length);
    } else {
      nextIndex =
        currentTrackIndex + 1 < filteredTrackList.length
          ? currentTrackIndex + 1
          : 0;
    }
    loadTrack(nextIndex);
    playTrack();
  };

  const prevTrack = () => {
    let prevIndex;
    if (isRandom) {
      prevIndex = Math.floor(Math.random() * filteredTrackList.length);
    } else {
      prevIndex =
        currentTrackIndex === 0
          ? filteredTrackList.length - 1
          : currentTrackIndex - 1;
    }
    loadTrack(prevIndex);
    playTrack();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    loadTrack(0);
  }, []);

  useEffect(() => {
    audioRef.current.addEventListener("ended", nextTrack);

    return () => {
      audioRef.current.removeEventListener("ended", nextTrack);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setTotalDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  return (
    <>
            <header className="h-16 bg-[#333333] font-sans">
        <div className="m-auto flex w-2/4 items-center justify-center rounded ">
          <label htmlFor="searchInput" className="relative mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 transform  text-[#acb2bc]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="searchInput"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar música"
              className="w-full rounded-2xl py-2 pl-8 pr-2 outline-none"
            />
          </label>
        </div>
      </header>

      <Nav />

      <section className="mt-16 flex flex-col items-center justify-center font-sans ">
        {filteredTrackList.length === 0 ? (
          <p className="text-red-500">Música não encontrada.</p>
        ) : (
          <div className=" mb-4 items-center">
            <div>
              <h2 className="pt-4 text-lg font-medium">
                {filteredTrackList[currentTrackIndex].name}
              </h2>
              <img
                src={filteredTrackList[currentTrackIndex].imagem}
                alt="imagem da música"
                className="m-auto mt-4 h-40 w-40 rounded-3xl"
              />
              <p className="titulo-loop w-full pt-4 text-sm text-white">
                {filteredTrackList[currentTrackIndex].artist}
              </p>
            </div>
          </div>
        )}
        <div className="mb-4 flex items-center justify-center">
          <button
            onClick={() => setIsRandom(!isRandom)}
            className="rounded-full p-2 text-[#ff6b6b]"
          >
            {isRandom ? <FaRedo /> : <FaRandom />}
          </button>

          <button onClick={prevTrack} className="mr-2 rounded-full p-2 ">
            <FaStepBackward />
          </button>
          {isPlaying ? (
            <button
              onClick={pauseTrack}
              className="mr-2 rounded-full p-2  text-white  "
            >
              <FaPause />
            </button>
          ) : (
            <button
              onClick={playTrack}
              className="mr-2 rounded-full p-2  text-white "
            >
              <FaPlay />
            </button>
          )}
          <button onClick={nextTrack} className="mr-2 rounded-full p-2  ">
            <FaStepForward />
          </button>
        </div>
        <div className="flex items-center">
          <div className="ml-2 text-sm text-gray-600">
            {formatTime(currentTime)}
          </div>
          <input
            type="range"
            min={0}
            max={totalDuration}
            value={currentTime}
            onChange={(e) => {
              const time = parseFloat(e.target.value);
              setCurrentTime(time);
              audioRef.current.currentTime = time;
            }}
            className="h-3 flex-grow appearance-none rounded-full bg-gray-200"
          />
          <div className="ml-2 text-sm text-gray-600">
            {formatTime(totalDuration)}
          </div>
        </div>
        <audio ref={audioRef}></audio>
      </section>
    </>
  );
}

export default Home;
