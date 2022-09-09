import { ChatIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import Moment from "react-moment"
import {collection, deleteDoc, doc, onSnapshot, setDoc} from "firebase/firestore"
import { db } from "../firebase"
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from "react"

export default function Post({post}) {
    const {data: session} = useSession()
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, "posts", post.id, "likes"), 
            (snapshot) => setLikes(snapshot.docs)
        )
    }, [db])

    useEffect(() => {
        setHasLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1)
    }, [likes])

    async function likePost() {
        if(session) {
            if(hasLiked) {
                await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid), )
            } else {
                await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
                    username: session.user.username,
                })
            }  
        } else {
            signIn()
        }
              
    }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* User image */}
        <img src={post.data().userImg} alt="profile-picture" className="h-10 w-10 rounded-full mr-4" />

        {/* Right side */}
        <div className="">
            {/* Header */}
            <div className="flex justify-between items-center">
                {/* User info */}
                <div className="flex space-x-2 items-center whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name}</h4>
                    <span className="text-sm sm:text-[15px]">@{post.data().username} - </span>
                    <span className="text-sm sm:text-[15px]">
                        <Moment fromNow>
                            {post?.data().timestamp?.toDate()}
                        </Moment>
                    </span>
                </div>
                {/* Dots icon */}
                <DotsHorizontalIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            </div>

            {/* Post text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-3">
                {post.data().text}
            </p>

            {/* Post image */}
            <img src={post.data().image} className="rounded-2xl mr-2" />

            {/* Icons */}
            <div className="flex items-center justify-between text-gray-500 p-2">
                <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                <div className="flex items-center">
                    {hasLiked ? (
                        <HeartIconFilled onClick={likePost} className="h-9 w-9 hoverEffect p-2
                        text-red-600 hover:bg-red-100" />
                    ) : (
                        <HeartIcon onClick={likePost} className="h-9 w-9 hoverEffect p-2
                        hover:text-red-600 hover:bg-red-100" />
                    )}  
                    {
                        likes.length > 0 && (
                            <span className={`${hasLiked && "text-red-600"} text-sm select-none`}>
                                {likes.length}
                            </span>
                        )
                    }
                </div>
                              
                
                <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
            </div>
        </div>
    </div>
  )
}
