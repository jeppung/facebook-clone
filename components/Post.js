import Image from 'next/image'
import React from 'react'
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline";

function Post({name, email, message, postImage, image, timestamp}) {
  return (
    <div className='flex mt-5 flex-col'>
        <div className='bg-white p-4 rounded-t-2xl'>
            <div className='flex space-x-2 items-center'>
                <img className='rounded-full' src={image} alt="" width={40} height={40}/>
                <div>
                    <p className='font-medium'>{name}</p>
                    <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <p className='mt-4'>{message}</p>
            {postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image src={postImage} fill/>
                </div>
            )}
        </div>
        <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
            <div className='inputIcon rounded-none rounded-bl-2xl justify-center'>
                <ThumbUpIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className='inputIcon rounded-none justify-center'>
                <ChatAltIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>

            </div>
            <div className='inputIcon rounded-none rounded-br-2xl justify-center'>
                <ShareIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>
        </div>
    </div>
  )
}

export default Post