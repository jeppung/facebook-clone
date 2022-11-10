import Image from "next/image";
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from "@heroicons/react/solid";
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon";
import {useSession, signOut} from "next-auth/react";
import Link from "next/link";

export default function Header(){

    const {data: session} = useSession();

    return (
        <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Link href='/'>
                    <Image src='https://links.papareact.com/5me' width={40} height={40} />
                </Link>
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='h-6 text-gray-600'/>
                    <input className="hidden md:inline-flex bg-transparent ml-2 items-center outline-none" type='text' placeholder="Search Facebook"/>
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}
                <Image
                    onClick={() => signOut()}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width={40}
                    height={40}
                />

                <p className="font-semibold pr-3 whitespace-nowrap hidden sm:inline-flex">{session.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </header>
    );
}