import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image 
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                height="50"
                width="50"
            ></Image>
        </div>

        {/* Menu */}
        <div className="mt-4 mb-3 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:bg-blue-500 
        text-lg hidden xl:inline">
            Tweet
        </button>

        {/* Mini Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img src="/images/profile.jpg" alt="proile-picture" className="h-10 w-10 rounded-full xl:mr-2" />
            <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">John Wilson</h4>
                <p className="text-gray-500">@fender9999</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
    </div>
  )
}
