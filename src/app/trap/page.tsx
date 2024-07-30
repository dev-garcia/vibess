"use client";

import Player from "../components/player/Player";
import { Track } from "../types";

const trackList: Track[] = [
  {
    id: 1,
    title: "Coração de gelo",
    artist: "Wiu",
    url: "/sons/trap/01-Wiu-Coracaodegelo.mp3",
    cover: "/images/playlists/trap-cover.jpg",
  },
  {
    id: 2,
    title: "Flow espacial",
    artist: "Teto, Wiu, Matue",
    url: "/sons/trap/02-Teto-Flowespacial.mp3",
    cover: "/images/playlists/trap-cover.jpg",
  },
  {
    id: 3,
    title: "Felina",
    artist: "Wiu, MC Ryan SP",
    url: "/sons/trap/03-Wiu-Felina.mp3",
    cover: "/images/playlists/trap-cover.jpg",
  },
  {
    id: 4,
    title: "Fogo e gasolina",
    artist: "MC Cabelinho, cyclope beatz, Red, Mello",
    url: "/sons/trap/04-Mccabelinho-Fogoegasolina.mp3",
    cover: "/images/playlists/trap-cover.jpg",
  },
  {
    id: 5,
    title: "Som",
    artist:
      "Chris MC, Salve Malak, Tz da Coronel, MC Cabelinho, Chefin, L7NNON, Luísa Sonza, Oruam, Xamã, N.I.N.A",
    url: "/sons/trap/05-Pineapplestormtv-Poesiaacustica13.mp3",
    cover: "/images/playlists/trap-cover.jpg",
  },
];

export default function Trap() {
  return (
    <>
      <div className="relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="px-4 pt-4">
          <section>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Trap
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
