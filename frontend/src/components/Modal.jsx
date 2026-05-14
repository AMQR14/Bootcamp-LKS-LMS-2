export default function Modal({children}){
    return (
        <div>
            <div className="fixed bg-black/40 w-full h-screen top-0 left-0">
                <div className="flex w-full h-screen justify-center items-center">
                    <div className="bg-white p-4 rounded-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}