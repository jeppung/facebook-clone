import Image from 'next/image'
import React from 'react'

function SidebarRow({src, Icon, title}) {
  return (
    <div className='flex space-x-2 items-center cursor-pointer p-4 hover:bg-gray-200 rounded-xl'>
        {src && (
            <Image src={src} className='rounded-full' width={30} height={30} />
        )}
        {Icon && (
            <Icon className="h-8 w-8 text-blue-500"/>
        )}
        <p className='hidden sm:inline-flex font-medium'>{title}</p>
    </div>
  )
}

export default SidebarRow