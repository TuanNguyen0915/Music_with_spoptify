"use client"
import Image from "next/image"
import { useState } from "react"

interface IProps {
  title: string
  data: {
    title: string
    singer: string
    cover: string
  }[]
}

const RenderRows = ({ title, data }: IProps) => {
  const [onLoadImg, setOnLoadImg] = useState(true)
  const handleOnLoadImg = () => setOnLoadImg(false)
  return (
    <div className="w-full space-y-4 px-2">
      <div className="flexBetween w-full">
        <h1 className="cursor-pointer text-xl font-extrabold tracking-wider text-slate-300 transition-all hover:text-white md:text-2xl">
          {title}
        </h1>
        <p className="cursor-pointer text-[#1ed760] opacity-60 transition-all hover:opacity-100">
          View All
        </p>
      </div>
      <div className="flexBetween w-full gap-8 overflow-x-auto pb-5">
        {data?.map((song, idx) => (
          <div
            className="flexCol w-[400px] cursor-pointer items-center gap-1"
            key={idx}
          >
            <Image
              src={song.cover}
              width={150}
              height={150}
              alt={song.title}
              className={`${onLoadImg && "blur-lg"} min-h-[100px] min-w-[100px] rounded-xl bg-center transition-all lg:min-h-[150px] lg:min-w-[150px]`}
              onLoad={handleOnLoadImg}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RenderRows
