"use client"
import { useState } from "react"
import SongNow from "./SongNow"
import PlayerControl from "./PlayerControl"

const Player = () => {
  const [volume, setVolume] = useState("80")

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex w-full gap-4 bg-black/80 px-2 py-4 backdrop-blur-lg max-md:flex-col">
      <div className="flexCenter w-full md:max-w-[350px]">
        <SongNow volume={volume} setVolume={setVolume} />
      </div>
      <div className="flex w-full items-center">
        <PlayerControl volume={volume} setVolume={setVolume} />
      </div>
    </div>
  )
}

export default Player
