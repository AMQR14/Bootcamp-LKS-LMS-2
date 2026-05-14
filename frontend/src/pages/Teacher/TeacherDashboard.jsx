import { Plus, Search } from "lucide-react"
import TeacherLayout from "../../layouts/TeacherLayout"
import {Link} from 'react-router-dom'

export default function TeacherDashboard(){
    return (
        <TeacherLayout>
            <div className="m-8">
                <div className="flex gap-6 justify-between">
                    <div className="flex items-center text font-semibold text-xl text-[#222443]">
                        <h1>Dashboard</h1>
                    </div>
                    <div className="flex gap-6 ">
                        <div className="border-2 border-gray-200 rounded-md w-100 hover:border-[#535684] transition-all flex items-center">
                            <input type="text" className="p-2 focus:outline-none w-full"/>
                            <Search className="text-[#535684] mr-2"/>
                        </div>
                    </div>
                </div>
                <div className="my-6 min-h-screen text-[#222443]">
                    <div className="grid grid-cols-4 gap-6">
                        <Link to={'course'}>
                            <div className="group/card h-60 w-full rounded-md bg-[#535684] ">
                                <div className="h-full flex flex-col justify-end">
                                    <div className="bg-white group-hover/card:h-22 h-16 border-2 rounded-b-md border-[#474a78] transition-all p-2 justify-between flex-col">
                                        <div className="flex justify-between w-full">
                                            <p className="font-semibold">COURSE NAME</p>
                                            <p className="text-sm text-gray-400">01/02/2026</p>
                                        </div>
                                        <div className="justify-end">
                                            <p className="text-gray-400 text-sm">Exam: 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="group/card h-60 w-full rounded-md bg-[#535684] ">
                            <div className="h-full flex flex-col justify-end">
                                <div className="bg-white group-hover/card:h-22 h-16 border-2 rounded-b-md border-[#474a78] transition-all p-2 justify-between flex-col">
                                    <div className="flex justify-between w-full">
                                        <p className="font-semibold">COURSE NAME</p>
                                        <p className="text-sm text-gray-400">01/02/2026</p>
                                    </div>
                                    <div className="justify-end">
                                        <p className="text-gray-400 text-sm">Exam: 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group/card h-60 w-full rounded-md bg-[#535684] ">
                            <div className="h-full flex flex-col justify-end">
                                <div className="bg-white group-hover/card:h-22 h-16 border-2 rounded-b-md border-[#474a78] transition-all p-2 justify-between flex-col">
                                    <div className="flex justify-between w-full">
                                        <p className="font-semibold">COURSE NAME</p>
                                        <p className="text-sm text-gray-400">01/02/2026</p>
                                    </div>
                                    <div className="justify-end">
                                        <p className="text-gray-400 text-sm">Exam: 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group/card h-60 w-full rounded-md bg-[#535684] ">
                            <div className="h-full flex flex-col justify-end">
                                <div className="bg-white group-hover/card:h-22 h-16 border-2 rounded-b-md border-[#474a78] transition-all p-2 justify-between flex-col">
                                    <div className="flex justify-between w-full">
                                        <p className="font-semibold">COURSE NAME</p>
                                        <p className="text-sm text-gray-400">01/02/2026</p>
                                    </div>
                                    <div className="justify-end">
                                        <p className="text-gray-400 text-sm">Exam: 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TeacherLayout>
    )
}