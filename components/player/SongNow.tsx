"use client"
import Image from "next/image"
import React from "react"
import VolumeControl from "./VolumeControl"
import { Minus, Plus, Volume1, Volume2, VolumeX } from "lucide-react"

interface IProps {
  volume: string
  setVolume: (volume: string) => void
}

const SongNow = ({ volume, setVolume }: IProps) => {
  const songName = "Song Name Here what's going on for what doing"
  return (
    <div className="max-md:flexBetween lg:flexCol w-full gap-4 sm:gap-1">
      <div className="flex w-2/3 items-center gap-2 md:w-full">
        <Image
          src="/assets/images/banner.jpg"
          width={80}
          height={80}
          alt="music song"
          className="z-20 rounded-lg object-cover object-center max-md:h-[50px] max-md:w-[50px]"
        />
        <div className="flexCol gap-2 overflow-hidden">
          <p
            className={`${songName.length > 28 && "animate-marquee"} whitespace-nowrap`}
          >
            {songName}
          </p>
          <p className="text-[#b3b3b3]">Artist</p>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <div className="flex items-center justify-start gap-2 max-md:justify-end">
          <button
            disabled={volume === "0"}
            className="disabled:cursor-not-allowed"
            onClick={() => {
              setVolume((Number(volume) - 10).toString())
            }}
          >
            <Minus
              size={20}
              className="text-[#b3b3b3] transition-all hover:text-white"
            />
          </button>
          {volume === "0" ? (
            <VolumeX className="size-10 max-md:size-8" />
          ) : Number(volume) <= 50 ? (
            <Volume1 className="size-10 max-md:size-8" />
          ) : (
            <Volume2 className="size-10 max-md:size-8" />
          )}
          <button
            disabled={volume === "100"}
            className="disabled:cursor-not-allowed"
            onClick={() => {
              setVolume((Number(volume) + 10).toString())
            }}
          >
            <Plus
              size={20}
              className="text-[#b3b3b3] transition-all hover:text-white"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SongNow
