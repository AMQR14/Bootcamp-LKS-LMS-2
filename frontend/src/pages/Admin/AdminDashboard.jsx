import AdminLayout from "../../layouts/AdminLayout"

export default function AdminDashboard(){
    return (
        <AdminLayout>
            <div className="m-8 flex flex-col gap-8">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    <div className="w-full h-50 rounded-md bg-[#535684]"></div>
                    <div className="w-full h-50 rounded-md bg-[#535684]"></div>
                    <div className="w-full h-50 rounded-md bg-[#535684]"></div>
                    <div className="w-full h-50 rounded-md bg-[#535684]"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-[60%] h-screen rounded-md bg-[#535684]"></div>
                    <div className="md:w-[40%] h-screen rounded-md bg-[#535684]"></div>
                </div>
            </div>
        </AdminLayout>
    )
}