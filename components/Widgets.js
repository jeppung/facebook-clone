import React from 'react'
import {DotsHorizontalIcon, SearchIcon, VideoCameraIcon} from "@heroicons/react/solid";
import Contact from './Contact';

const contacts = [
    { src:"https://links.papareact.com/f0p", name: "Jeff Bezoz" },
    { src:"https://links.papareact.com/kxk", name: "Elon Musk" },
    { src:"https://links.papareact.com/zvy", name: "Bill Gates" },
    { src:"https://links.papareact.com/snf", name: "Mark Zuckerberg" },
    { src:"https://links.papareact.com/d0c", name: "Harry Potter" },
    { src:"https://links.papareact.com/6gg", name: "The King" },
    { src:"https://links.papareact.com/r57", name: "James Bond" },
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex items-center justify-between text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex'>
                <VideoCameraIcon className='h-6'/>
                <SearchIcon className='h-6' />
                <DotsHorizontalIcon className='h-6' />
            </div>
        </div>
        <div className='overflow-y-auto h-screen '>
            {contacts.map(contact => (
                <Contact key={contact.key} src={contact.src} name={contact.name}/>
            ))}
        </div>
        
    </div>
  )
}

export default Widgets