"use client"
import React, { useState } from "react"
import ControlCenter from "./ControlCenter"
import VolumeControl from "./VolumeControl"
import TimeProgress from "./TimeProgress"

interface IProps {
  volume: string
  setVolume: (volume: string) => void
}
const PlayerControl = ({ volume, setVolume }: IProps) => {
  const [isPlay, setPlay] = useState(true)
  return (
    <div className="flex w-full items-center gap-10 max-md:gap-2 max-lg:flex-col-reverse">
      {/* PLAYER CONTROL */}
      <div className="flex items-center max-lg:justify-center">
        <ControlCenter isPlay={isPlay} setPlay={setPlay} />
      </div>
      {/* TIME PROGRESS */}
      <div className="w-full flex-1">
        <TimeProgress isPlay={isPlay} setPlay={setPlay} />
      </div>
      {/* VOLUME CONTROL */}
      <div className="max-lg:hidden">
        <VolumeControl volume={volume} setVolume={setVolume} />
      </div>
    </div>
  )
}

export default PlayerControl
