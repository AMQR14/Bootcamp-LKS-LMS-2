import {Link} from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <div className="h-23 bg-[#3a3c67] p-6 flex items-center text-white justify-between top-0 sticky">
                <h1 className="font-bold text-2xl">DELORES</h1>
                <div className="flex items-center">
                    <ul className="flex gap-2 font-semibold">
                        <li>Home</li>
                        <li>Learn More</li>
                    </ul>
                    <div className="w-8 h-full flex items-center justify-center">
                        <div className="h-10 w-0.5 bg-[#535684]"></div>
                    </div>
                    <div className="">
                        <Link to={'/login'}>
                            <button className="font-semibold bg-[#535684] p-2 px-4 rounded-md hover:bg-[#464976] transition-all">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
            <main>
                <div className="bg-[#454875] h-8"></div>
                <div className="bg-[#62658e] h-100">
                    <div className="flex  justify-center items-center h-full text-white flex-col">
                        <div className="text-3xl font-semibold">Welcome to the <b>DELORES</b> LMS</div>
                        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="m-8 flex text-[#222443]">
                    <div className="w-[50%] h-110 rounded-md bg-[#62658e]">

                    </div>
                    <div className="w-[50%] ml-8 flex flex-col gap-8">
                        <p className="font-semibold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ut molestias eligendi mollitia? Laboriosam facilis maiores odio provident quod molestias suscipit quia, temporibus ullam debitis architecto rem, laborum, praesentium dolorum.</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ut molestias eligendi mollitia? Laboriosam facilis maiores odio provident quod molestias suscipit quia, temporibus ullam debitis architecto rem, laborum, praesentium dolorum.</p>

                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ut molestias eligendi mollitia? Laboriosam facilis maiores odio provident quod molestias suscipit quia, temporibus ullam debitis architecto rem, laborum, praesentium dolorum.</p>
                    </div>
                </div>
                <div>
                    <div className="grid-cols-4 m-8 gap-8 grid">
                        <div className="w-full h-80 rounded-md bg-[#62658e]"></div>
                        <div className="w-full h-80 rounded-md bg-[#62658e]"></div>
                        <div className="w-full h-80 rounded-md bg-[#62658e]"></div>
                        <div className="w-full h-80 rounded-md bg-[#62658e]"></div>
                    </div>
                </div>
            </main>
            <div>
                <div className="bg-[#62658e] h-10"></div>
                <div className="h-20 bg-[#454875]"></div>
            </div>
        </div>
    )
}