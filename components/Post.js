import { ChatIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon, DotsHorizontalIcon } from "@heroicons/react/outline"

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* User image */}
        <img src={post.userImg} alt="profile-picture" className="h-10 w-10 rounded-full mr-4" />

        {/* Right side */}
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-center">
                {/* User info */}
                <div className="flex space-x-2 items-center whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                    <span className="text-sm sm:text-[15px]">{post.timestamp}</span>
                </div>
                {/* Dots icon */}
                <DotsHorizontalIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            </div>

            {/* Post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-3">
                {post.text}
            </p>

            {/* Post image */}
            <img src={post.img} className="rounded-2xl mr-2" />

            {/* Icons */}
            <div className="flex items-center justify-between text-gray-500 p-2">
                <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            </div>
        </div>
    </div>
  )
}
