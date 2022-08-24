import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon} from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div>
        {/* Twitter Logo */}
        <div className="">
            <Image 
                src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                height="50"
                width="50"
            ></Image>
        </div>

        {/* Menu */}
        <div className="">
            <SidebarMenuItem text="Home" Icon={HomeIcon} />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>

        {/* Button */}
        <button>Tweet</button>

        {/* Mini Profile */}
        <div className="">
            <img src="" alt="" />
        </div>
    </div>
  )
}
