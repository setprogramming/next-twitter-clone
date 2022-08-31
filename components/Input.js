import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline"

export default function Input() {   

  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
        <img src="/images/profile.jpg" alt="profile-picture" className="h-10 w-10 rounded-full xl:mr-2 cursor-pointer" />
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 min-h-[50px] text-gray-700" rows="2" placeholder="What's happening?">

                </textarea>
            </div>
            <div className="flex items-center justify-between pt-3">
                <div className="flex">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                </div>
                <button className="bg-blue-400 text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-blue-500 disabled:opacity-50">
                    Tweet
                </button>
            </div>
        </div>
    </div>
  )
}
