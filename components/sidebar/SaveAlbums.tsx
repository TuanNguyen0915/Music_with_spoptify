"use client"
import { SavedAlbumsData } from "@/util/data"
import {
  ArrowDownCircleIcon,
  ArrowRightCircle,
  MinusCircle,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import { motion } from "framer-motion"

const SaveAlbums = () => {
  const [openSavedAlbums, setOpenSavedAlbums] = useState(false)
  return (
    <div className="flexCol w-full gap-4 tracking-wide">
      <div
        className="flexBetween w-full cursor-pointer transition-all hover:text-[#1ed760]"
        onClick={() => setOpenSavedAlbums(!openSavedAlbums)}
      >
        <p>Saved Albums</p>
        {openSavedAlbums ? (
          <ArrowDownCircleIcon
            onClick={() => setOpenSavedAlbums(false)}
            color={"#b3b3b3"}
            className="cursor-pointer"
          />
        ) : (
          <ArrowRightCircle
            onClick={() => setOpenSavedAlbums(true)}
            color={"#b3b3b3"}
            className="cursor-pointer"
          />
        )}
      </div>
      {openSavedAlbums && (
        <div className="flexCol w-full gap-6 p-2">
          {SavedAlbumsData.map((album) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              key={album.id}
              className="flexBetween w-full items-center"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={album.cover}
                  width={50}
                  height={50}
                  alt={album.title}
                  className="rounded-lg"
                />
                <div className="flexCol gap-2">
                  <p className="font-semibold text-white">{album.title}</p>
                  <p className="text-[#b3b3b3]">{album.likes} likes</p>
                </div>
              </div>
              <MinusCircle className="cursor-pointer text-white opacity-40 transition-all hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SaveAlbums
