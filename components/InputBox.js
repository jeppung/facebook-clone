import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { db, storage } from '../firebase';
import {ref, uploadString, getDownloadURL} from "firebase/storage";
import {serverTimestamp} from 'firebase/firestore';

function InputBox() {

    const {data: session, loading} = useSession();
    const [imageToPost, setImageToPost] = useState(null);

    const inputRef = useRef(null);
    const filePickerRef = useRef(null);


    const sendPost = async (e) => {
        e.preventDefault();

        if(!inputRef.current.value) return;

        // await fetch('https://reqres.in/api/users?page=2').then(val => console.log(val));

        await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
        }).then(async (document) => {
            if(imageToPost){
                // const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')
                console.log(document.id);
                const storageRef = ref(storage, `posts/${document.id}`);
                await uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
                    getDownloadURL(ref(storage, `posts/${document.id}`)).then(async (url) => {
                        await setDoc(doc(db, 'posts', `${document.id}`),{
                            postImage: url
                        }, {merge: true});
                    });
                })

                removeImage();
            }
        });

        inputRef.current.value = "";
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        console.log(e.target.files[0]);

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }

    }

    const removeImage = () => {
        setImageToPost(null);
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image src={session.user.image} className='rounded-full' width={40} height={40}/>
            <form className='flex flex-1'>
                <input ref={inputRef} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' placeholder={`What's on your mind, ${session.user.name}`}/>
                <button hidden type='submit' onClick={sendPost}>Submit</button>
            </form>
            {imageToPost && (
                <div onClick={removeImage} className='flex flex-col filter hover:brightness-110 transition-transform duration-150 hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' src={imageToPost} alt=""/>
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}
        </div>
        <div className='flex justify-evenly items-center p-4 border-t'>
            <div className='inputIcon justify-center'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='hidden text-xs md:inline-flex sm:text-sm xl:text-base'>Live Video</p>
            </div>
            <div onClick={() => filePickerRef.current.click()} className='inputIcon justify-center'>
                <CameraIcon className='h-7 text-green-400'/>
                <p className='hidden text-xs md:inline-flex sm:text-sm xl:text-base'>Photo/Video</p>
                <input ref={filePickerRef} onChange={addImageToPost} hidden type='file'/>
            </div>
            <div className='inputIcon justify-center '>
                <EmojiHappyIcon className='h-7 text-yellow-300'/>
                <p className='hidden text-xs md:inline-flex sm:text-sm xl:text-base'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default InputBox