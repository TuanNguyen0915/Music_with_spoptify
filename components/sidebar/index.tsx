"use client"
import { sideBarLinks } from "@/util/data"
import React from "react"
import SaveAlbums from "./SaveAlbums"

const Sidebar = () => {
  return (
    <div className="bottom-0 left-0 top-0 z-20 space-y-8 overflow-y-scroll md:pb-[150px] bg-[#121212] p-5 md:fixed md:w-[350px] md:min-w-[350px] ">
      <div className="flexCol w-full gap-8 ">
        {sideBarLinks.map((link) => (
          <div
            key={link.name}
            className="group flex w-full cursor-pointer items-center gap-4"
          >
            {link.icon}
            <p className="transition-all group-hover:text-[#1ed760]">
              {link.name}
            </p>
          </div>
        ))}
      </div>
      <hr className="opacity-40" />
      <SaveAlbums />
    </div>
  )
}

export default Sidebar
