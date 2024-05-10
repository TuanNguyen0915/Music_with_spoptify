import { IoPause, IoPlay, IoPlayBack, IoPlayForward } from "react-icons/io5"

interface IProps {
  isPlay: boolean
  setPlay: (play: boolean) => void
}


const ControlCenter = ({ isPlay, setPlay }: IProps) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <IoPlayBack className="size-8 text-[#b3b3b3] transition-all hover:text-white max-md:size-5" />
      <div
        className="flexCenter max-md size-14 rounded-full bg-slate-300 transition-all"
        onClick={() => setPlay(!isPlay)}
      >
        {isPlay ? (
          <IoPause className="size-10 text-black max-md:size-8" />
        ) : (
          <IoPlay className="size-10 pl-1 text-black max-md:size-8" />
        )}
      </div>
      <IoPlayForward className="size-8 text-[#b3b3b3] transition-all hover:text-white max-md:size-5" />
    </div>
  )
}

export default ControlCenter
