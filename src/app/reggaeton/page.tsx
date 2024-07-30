"use client";

import Player from "../components/player/Player";
import { Track } from "../types";

const trackList: Track[] = [
  {
    id: 1,
    title: "Bzrp Music Sessions",
    artist: "Bizarrap, Quevedo",
    url: "/sons/reggaeton/01-Quevedo-BzrpMusicSessions-Vol52.mp3",
    cover: "/images/playlists/reggaeton-cover.jpg",
  },
  {
    id: 2,
    title: "Despechá",
    artist: "Rosalía",
    url: "/sons/reggaeton/03-Despecha.mp3",
    cover: "/images/playlists/reggaeton-cover.jpg",
  },
  {
    id: 3,
    title: "La Bachata",
    artist: "Manuel Turizo",
    cover: "/images/playlists/reggaeton-cover.jpg",
    url: "/sons/reggaeton/04-LaBachata.mp3",
  },
  {
    id: 4,
    title: "Me Porto Bonito",
    artist: "Bad Bunny, Chencho Corleone",
    url: "/sons/reggaeton/05-MePortoBonito.mp3",
    cover: "/images/playlists/reggaeton-cover.jpg",
  },
  {
    id: 5,
    title: "Monotonía",
    artist: "Shakira, Ozuna",
    url: "/sons/reggaeton/06-Monotonia.mp3",
    cover: "/images/playlists/reggaeton-cover.jpg",
  },
];

export default function Reggaeton() {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="px-4 pt-4">
          <section>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Reggaeton
            </h1>
          </section>
          <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-2">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Player
              </h2>
              <Player trackList={trackList} />
            </section>
            {/* Outras seções */}
          </div>
        </div>
      </div>
    </>
  );
}
