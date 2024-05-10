
import { Bell, Library, Search } from "lucide-react"


const SearchBar = () => {
  return (
    <div className="flexBetween w-full bg-[#121212] p-4">
      <div className="flex items-center gap-2 flex-1">
        <Search />
        <input
          placeholder="Search"
          className="bg-transparent outline-none placeholder:text-[#b3b3b3]"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flexCenter h-10 w-10 cursor-pointer rounded-full bg-gray-700 transition-all hover:bg-green-800">
          <Bell />
        </div>
        <div className="flexCenter h-10 w-10 cursor-pointer rounded-full bg-gray-700 transition-all hover:bg-green-800">
          <Library />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
