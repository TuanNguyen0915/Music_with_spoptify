import React from "react"
import SearchBar from "./SearchBar"
import MainView from "./MainView"

const MainSection = () => {
  return (
    <div className="flexCol max-md:pb-[200px] min-h-screen w-full gap-4 pb-[120px] md:ml-[350px] md:w-[calc(100%-350px)]">
      <SearchBar />
      <div className="h-full w-full md:pl-4">
        <MainView />
      </div>
    </div>
  )
}

export default MainSection
