import { Children, useState } from "react";
import {Link, useLocation} from 'react-router-dom'

export default function TeacherLayout({children}){
    const [sidebar, setSidebar] = useState(false)
    const [profile, setProfile] = useState(false)
    const location = useLocation()

    const openSide = () => {
        setSidebar(!sidebar)
    }

    const openProfile = () => {
        setProfile(!profile)
    }
    
    return (
        <div>
            <div className="h-23 bg-[#3a3c67] p-6 flex items-center text-white justify-between top-0 sticky">
                <h1 className={"font-bold text-2xl hidden md:block"}>DELORES</h1>
                <div className="gap-2 flex flex-col" onClick={()=> openSide()}>
                    <div className="h-0.75 w-9 bg-[#535684] block md:hidden"></div>
                    <div className="h-0.75 w-9 bg-[#535684] block md:hidden"></div>
                    <div className="h-0.75 w-9 bg-[#535684] block md:hidden"></div>
                </div>
                <div className="flex items-center">
                    <div className="w-8 h-full flex items-center justify-center">
                        <div className="h-10 w-0.5 bg-[#535684]"></div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="font-semibold">Teacher 1</p>
                        <div className="w-13 h-13 bg-[#535684] rounded-full" onClick={()=> openProfile()}></div>
                    </div>
                </div>
            </div>
            <div className={`${profile ? 'block' : 'hidden'} flex justify-end fixed w-full`}>
                <div className="w-40 h-45 bg-[#3a3c67] border-t-2 border-[#535684] rounded-bl-md text-white p-2 px-4 flex justify-between flex-col">
                    <div>
                        <p className="font-semibold">Teacher 1</p>
                        <p className="text-xs text-gray-300">Teacher</p>
                    </div>
                    <div className="text-white flex-col flex mb-1">
                        <button className="bg-[#535684] hover:bg-[#454878] p-1 rounded-md transition-all">Profile</button>
                        <div className="h-6 flex items-center">
                            <div className="w-full h-[2.2px] bg-[#535684]">
                                
                            </div>
                        </div>
                        <Link to={'/home'} className="w-full">
                            <button className="bg-[#ba5050] hover:bg-[#9d3c3c] p-1 rounded-md transition-all w-full">Log Out</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="">
                <div className={`${sidebar ? 'block' : 'hidden'} md:block block w-40 h-screen fixed bg-[#3a3c67] border-t-2 border-[#535684]`}>
                    <ul className="justify-center p-4 py-6 text-white font-semibold flex flex-col">
                        <Link to={'/teacher/dashboard'}>
                            <li className={`${location.pathname == '/teacher/dashboard' ?'border-l-4 border-white' : '' } p-3 px-4 hover:border-l-4 hover:border-white hover:bg-[#535684] transition-all`}>Dashboard</li>
                        </Link>
                        <Link to={'/teacher/dashboard/profile'}>
                            <li className={`${location.pathname == '/admin/dashboard/user' ?'border-l-4 border-white' : '' } p-3 px-4 hover:border-l-4 hover:border-white hover:bg-[#535684] transition-all`}>Users</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <main className="min-h-screen md:ml-40">
                {children}
            </main>
            <div>
                <div className="bg-[#62658e] h-10"></div>
                <div className="h-20 bg-[#454875]"></div>
            </div>
        </div>
    )
}