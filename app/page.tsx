import Loader from "@/components/Loader"
import MainSection from "@/components/mainSection"
import Player from "@/components/player"
import Sidebar from "@/components/sidebar"
import React from "react"

const Home = () => {
  return (
    <div className="min-h-screen w-full text-white max-lg:flexCol">
      <Sidebar />
      <MainSection />
      <Player />
    </div>
  )
}

export default Home
