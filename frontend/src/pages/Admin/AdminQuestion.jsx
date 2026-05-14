import { Edit, Eye, MoveLeft, Plus, Search, Trash, X } from "lucide-react"
import AdminLayout from "../../layouts/AdminLayout"
import Modal from "../../components/Modal"
import { useState } from "react"
import {Link} from 'react-router-dom'

export default function AdminQuestion(){
    const [create, setCreate] = useState(false)
    const [edit, setEdit] = useState(false)
    const [view, setView] = useState(false)
    const [type, setType] = useState('mul-choice') 

    const handleChoice = (e) => {
        setType(e.target.value)
    }

    console.log(type)

    const openEdit = () => {
        setEdit(!edit)
    }

    const openCreate = () => {
        setCreate(!create)
    }

    const openView = () => {
        setView(!view)
    }

    return (
        <AdminLayout>
            {create 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443] overflow-auto h-fit">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Create Question</p>
                        <div onClick={()=> openCreate()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Question:</label>
                            <input type="text" placeholder="Enter question" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex gap-1">
                                <input type="radio" name="type" value={'mul-choice'} onChange={handleChoice} checked={type == 'mul-choice'}/>
                                <label htmlFor="">Multiple Choice</label>
                            </div>
                            <div className="flex gap-1">
                            <input type="radio" name="type" value={'essay'} onChange={handleChoice} checked={type == 'essay'}/>
                                <label htmlFor="">Essay</label>
                            </div>
                        </div>
                        {type == 'mul-choice' 
                        ? <div>
                            <p className="text-gray-500 mb-3">Must have one correct answer:</p>
                            <div className="gap-3 flex flex-col">
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice"/>
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                            </div>
                        </div> 
                        : ''}
                        <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-6 w-full text-white rounded-md font-semibold" onClick={()=> openCreate()}>Login</button>
                    </form>
                </div>
            </Modal>
            : ''}

            {edit 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443] overflow-auto h-fit">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Edit Question</p>
                        <div onClick={()=> openEdit()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Question:</label>
                            <input type="text" placeholder="Enter question" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex gap-1">
                                <input type="radio" name="type" value={'mul-choice'} onChange={handleChoice} checked={type == 'mul-choice'}/>
                                <label htmlFor="">Multiple Choice</label>
                            </div>
                            <div className="flex gap-1">
                            <input type="radio" name="type" value={'essay'} onChange={handleChoice} checked={type == 'essay'}/>
                                <label htmlFor="">Essay</label>
                            </div>
                        </div>
                        {type == 'mul-choice' 
                        ? <div>
                            <p className="text-gray-500 mb-3">Must have one correct answer:</p>
                            <div className="gap-3 flex flex-col">
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice"/>
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                            </div>
                        </div> 
                        : ''}
                        <button className="bg-[#62658e] hover:bg-[#535681] p-3 mt-6 w-full text-white rounded-md font-semibold" onClick={()=> openEdit()}>Login</button>
                    </form>
                </div>
            </Modal>
            : ''}

            {view 
            ? <Modal>
                <div className="m-6 w-90 text-[#222443] overflow-auto h-fit">
                    <div className="flex font-semibold justify-between items-center mb-6">
                        <p className="text-lg">Question</p>
                        <div onClick={()=> openView()}>
                            <X/>
                        </div>
                    </div>
                    <form action="" className="gap-6 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="" className="font-semibold">Question:</label>
                            <input type="text" placeholder="Enter question" className="focus:outline-none border-2 border-gray-200 rounded-md p-2"/>
                        </div>
                        {/* <div className="flex gap-3">
                            <div className="flex gap-1">
                                <input type="radio" name="type" value={'mul-choice'} onChange={handleChoice}/>
                                <label htmlFor="">Multiple Choice</label>
                            </div>
                            <div className="flex gap-1">
                            <input type="radio" name="type" value={'essay'} onChange={handleChoice}/>
                                <label htmlFor="">Essay</label>
                            </div>
                        </div> */}
                        {type == 'mul-choice' 
                        ? <div>
                            <p className="text-gray-500 mb-3">Must have one correct answer:</p>
                            <div className="gap-3 flex flex-col">
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice"/>
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                                <div className="gap-1 flex border border-gray-300 p-2 rounded-md bg-gray-100">
                                    <input type="radio" name="choice" />
                                    <input type="text" className="focus:outline-none w-full" placeholder="Enter choice"/>
                                </div>
                            </div>
                        </div> 
                        : ''}
                    </form>
                </div>
            </Modal>
            : ''}
            
            <div className="m-8">
                <div className="flex gap-6 justify-between">
                    <div className="flex items-center text font-semibold text-xl text-[#222443]">
                        <h1>Questions</h1>
                    </div>
                    <div className="flex gap-6 ">
                        <div className="border-2 border-gray-200 rounded-md w-100 hover:border-[#535684] transition-all flex items-center">
                            <input type="text" className="p-2 focus:outline-none w-full"/>
                            <Search className="text-[#535684] mr-2"/>
                        </div>
                        <div className="bg-[#535684] hover:bg-[#474a79] transition-all p-2 px-3 flex items-center text-white rounded-md" onClick={()=> openCreate()}>
                            <Plus/>
                        </div>
                        <Link to={'/admin/dashboard/exam'}>
                            <div className="bg-[#535684] hover:bg-[#474a79] h-full transition-all p-2 px-3 flex items-center text-white rounded-md" onClick={()=> openCreate()}>
                                <MoveLeft/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="my-6 min-h-screen">
                    <div className="w-full overflow-auto text-[#222443]">
                        <table className="w-full border-[1.6px] border-[#3a3c67]">
                            <thead className="border-[1.6px] border-[#3a3c67] bg-[#7679a5] text-[#3a3e6d]">
                                <tr>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">No</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Question</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Type</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2">Created At</th>
                                    <th className="border-r-[1.6px] border-[#3a3c67] p-2 w-30">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">No</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Question</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Type</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">Created At</td>
                                    <td className="border-r-[1.6px] border-[#3a3c67] p-1">
                                        <div className="flex justify-center items-center text-white gap-2 mx-2">
                                            <div className="bg-[#535684] hover:bg-[#474a79] p-1 px-2 rounded-md transition-all" onClick={()=> openView()}>
                                                <Eye/>
                                            </div>
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