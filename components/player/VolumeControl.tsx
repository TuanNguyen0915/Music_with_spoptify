import { Volume1, Volume2, VolumeX } from "lucide-react"

interface IProps {
  volume: string
  setVolume: (volume: string) => void
  mobileView?: boolean
}
const VolumeControl = ({ volume, setVolume, mobileView }: IProps) => {
  return (
    <div
      className={`flex items-center gap-2`}
    >
      {volume === "0" ? (
        <VolumeX size={25} />
      ) : Number(volume) <= 50 ? (
        <Volume1 size={25} />
      ) : (
        <Volume2 size={25} />
      )}
      <input
        className={`rounded-full accent-[#1ed760]`}
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  )
}

export default VolumeControl
