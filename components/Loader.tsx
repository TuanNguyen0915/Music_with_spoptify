"use client"
import { ScaleLoader } from "react-spinners"

interface IProps {
  width?: number
  height?: number
}

const Loader = ({ width, height }: IProps) => {
  return <ScaleLoader color="#1ed760" width={width} height={height} />
}

export default Loader
