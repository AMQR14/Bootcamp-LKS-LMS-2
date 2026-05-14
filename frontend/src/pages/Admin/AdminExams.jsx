import { Edit, Eye, Plus, Search, Trash, X } from "lucide-react"
import AdminLayout from "../../layouts/AdminLayout"
import Modal from "../../components/Modal"
import { useState } from "react"
import {Link} from 'react-router-dom'

export default function AdminExams(){
    const [create, setCreate] = useState(false)
    const [edit, setEdit] = useState(false)

    const openEdit = () => {
        setEdit(!edit)
    }

    const openCreate = () => {
        setCreate(!create)
    }

    return (
        <AdminLayout>
            {create 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443] overflow-auto h-fit">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Create Exam</p>
                        <div onClick={()=> openCreate()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Name:</label>
                            <input type="text" placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Start Time:</label>
                            <input type="time" step={1} placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">End Time:</label>
                            <input type="time" step={1} placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Class:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Class</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Course:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Course</option>
                            </select>
                        </div>
                        <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-6 w-full text-white rounded-md font-semibold" onClick={()=> openCreate()}>Login</button>
                    </form>
                </div>
            </Modal>
            : ''}

            {edit 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443] overflow-auto h-fit">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Edit Exam</p>
                        <div onClick={()=> openEdit()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Name:</label>
                            <input type="text" placeholder="Enter name" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Start Time:</label>
                            <input type="time" step={1} placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">End Time:</label>
                            <input type="time" step={1} placeholder="Enter description" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Class:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Class</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Course:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Course</option>
                            </select>
                        </div>
                        <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-6 w-full text-white rounded-md font-semibold" onClick={()=> openEdit()}>Login</button>
                    </form>
                </div>
            </Modal>
            : ''}
            
            <div className="m-8">
                <div className="flex gap-6 justify-between">
                    <div className="flex items-center text font-semibold text-xl text-[#222443]">
                        <h1>Exams</h1>
                    </div>
                    <div className="flex gap-6 ">
                        <div className="border-2 border-gray-200 rounded-md w-100 hover:border-[#535684] transition-all flex items-center">
                            <input type="text" className="p-2 focus:outline-none w-full"/>
                            <Search className="text-[#535684] mr-2"/>
                        </div>
                        <div className="bg-[#535684] hover:bg-[#474a79] transition-all p-2 px-3 flex items-center text-white rounded-md" onClick={()=> openCreate()}>
                            <Plus/>
                        </div>
                    </div>
                </div>
                <div className="my-6 min-h-screen">
                    <div className="w-full overflow-auto text-[#222443]">
                        <table className="w-full border-[1.6px] border-[#3a3c67]">
                            <thead className="border-[1.6px] border-[#3a3c67] bg-[#7679a5] text-[#3a3e6d]">
                                <tr>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">No</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Name</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Start Time</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">End Time</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Created At</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2 w-30">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">No</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Name</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Start Time</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">End Time</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Created At</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">
                                        <div className="flex justify-center items-center text-white gap-2 mx-2">
                                            <Link to={'question'}>
                                                <div className="bg-[#535684] hover:bg-[#474a79] p-1 px-2 rounded-md transition-all">
                                                    <Eye/>
                                                </div>
                                            </Link>
                                            <div className="bg-[#5869b6] hover:bg-[#4a5cad] p-1 px-2 rounded-md transition-all" onClick={()=> openEdit()}>
                                                <Edit/>
                                            </div>
                                            <div className="bg-[#ba5050] hover:bg-[#ae4242] p-1 px-2 rounded-md transition-all">
                                                <Trash/>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}