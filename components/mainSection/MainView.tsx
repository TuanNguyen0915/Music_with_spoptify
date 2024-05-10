import React from "react"
import RenderRows from "./RenderRows"
import { firstRow, secondRow } from "@/util/data"

const MainView = () => {
  return (
    <div className="flexCol h-full w-full gap-8 rounded-md bg-[#121212]">
      <div
        className="relative h-[150px] w-full rounded-xl bg-cover bg-center md:h-[300px]"
        style={{ backgroundImage: `url(/assets/images/banner.jpg)` }}
      >
        {/* <div className="flexCenter absolute h-full w-full rounded-lg bg-black/40"></div> */}
      </div>
      <div className="flexCol w-full gap-4">
        <RenderRows title="Top New Songs" data={firstRow} />
        <RenderRows title="Recommendation For You" data={secondRow} />
        <RenderRows title="Top 10 Hits" data={firstRow} />
        <RenderRows title="Rock Musics" data={secondRow} />
        <RenderRows title="Pops" data={firstRow} />
        <RenderRows title="Rap-HipHop" data={secondRow} />
      </div>
    </div>
  )
}

export default MainView
