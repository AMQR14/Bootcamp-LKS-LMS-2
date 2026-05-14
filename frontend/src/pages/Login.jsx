import { MoveLeft } from "lucide-react";
import {Link} from 'react-router-dom'

export default function Login(){
    return (
        <div>
            <div className="flex">
                <div className="w-[50%] bg-[#62658e] min-h-screen hidden md:block">
                </div>
                <div className="w-full md:w-[50%] flex justify-center items-center flex-col m-8 md:m-0 h-screen">
                    <div className="p-8 text-[#222443] gap-8 flex flex-col w-full lg:w-120">
                        <div className="flex justify-between items-center mb-4">
                            <div className="">
                                <p className="font-bold text-xl">Welcome</p>
                                <p className="font-semibold">Login to your account!</p>
                            </div>
                            <Link to={'/home'}>
                                <div className="p-2 px-3 bg-[#62658e] hover:bg-[#535681] rounded-md text-white transition-all">
                                    <MoveLeft/>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <form action="" className="flex gap-8 flex-col">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="font-semibold">Email:</label>
                                    <input type="text" placeholder="Enter your email" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="" className="font-semibold">Password:</label>
                                    <input type="text" placeholder="Enter your password" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                                </div>
                                <Link to={'/admin/dashboard'}>
                                    <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-8 w-full text-white rounded-md font-semibold">Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}