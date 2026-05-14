import { Edit, Plus, Search, Trash, X } from "lucide-react"
import AdminLayout from "../../layouts/AdminLayout"
import Modal from "../../components/Modal"
import { useState } from "react"

export default function AdminUser(){
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
                <div className="m-6 w-90 text-[#222443]">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Create User</p>
                        <div onClick={()=> openCreate()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Email:</label>
                            <input type="text" placeholder="Enter email" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Password:</label>
                            <input type="text" placeholder="Enter password" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Role:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Role</option>
                            </select>
                        </div>
                        <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-6 w-full text-white rounded-md font-semibold" onClick={()=> openCreate()}>Login</button>
                    </form>
                </div>
            </Modal>
            : ''}

            {edit 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443]">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Edit User</p>
                        <div onClick={()=> openEdit()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Email:</label>
                            <input type="text" placeholder="Enter email" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Password:</label>
                            <input type="text" placeholder="Enter password" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div>
                            <label htmlFor="" className="font-semibold">Role:</label>
                            <select name="" id="" className="focus:outline-none border-2 border-gray-200 rounded-md p-2 w-full">
                                <option value="" disabled selected>Select Role</option>
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
                        <h1>User</h1>
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
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Email</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Role</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Created At</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2 w-30">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">No</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Email</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Role</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Created At</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">
                                        <div className="flex justify-center items-center text-white gap-2">
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