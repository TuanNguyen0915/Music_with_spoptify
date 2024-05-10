"use client"

import { formatTime } from "@/util/actions"
import { useEffect, useState } from "react"

interface IProps {
  isPlay: boolean
  setPlay: (play: boolean) => void
}

const TimeProgress = ({ isPlay, setPlay }: IProps) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [isDragging, setDragging] = useState(false)

  const durationMusic = 200 // duration in seconds
  const progressBarWidth = (currentTime / durationMusic) * 100

  // using interval and useEffect to increase the current time
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined
    if (isPlay) {
      intervalId = setInterval(() => {
        setCurrentTime(() => {
          if (currentTime >= durationMusic) {
            setPlay(false)
            return 0
          }
          return currentTime + 1
        })
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [currentTime, isPlay, setPlay, durationMusic])

  const handleProgressBarCLick = (e: any) => {
    const progressBar = e.currentTarget
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
    const progressBarWidth = progressBar.offsetWidth
    const clickedTime = (clickPosition / progressBarWidth) * durationMusic
    setCurrentTime(clickedTime)
  }
  const handleDraggingMove = (e: any) => {
    if (isDragging) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const progressBarWidth = progressBar.offsetWidth
      const clickedTime = (clickPosition / progressBarWidth) * durationMusic
      setCurrentTime(clickedTime)
    }
  }
  return (
    <div className="flex w-full items-center gap-2">
      <p className="w-[40px] text-start">{formatTime(currentTime)}</p>
      <div
        className="relative h-1.5 w-full cursor-pointer rounded-full bg-gray-600/80"
        onClick={handleProgressBarCLick}
        onMouseDown={() => setDragging(true)}
        onMouseLeave={() => setDragging(false)}
        onMouseUp={() => setDragging(false)}
        onMouseMove={handleDraggingMove}
      >
        <div
          className="absolute h-full rounded-full bg-[#1ed760]"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <p className="w-[40px] text-end">{formatTime(durationMusic)}</p>
    </div>
  )
}

export default TimeProgress
