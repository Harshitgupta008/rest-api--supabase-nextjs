"use client"

import { RootState } from "@/Redux/app/store";
import { useSelector } from "react-redux";


const Home: React.FC = () => {
    
    const { user } = useSelector((state: RootState) => state.auth)
    if(!user || user === null){
        return <h1>Loading....</h1>
    }
    return <>
        <div className="mt-20 w-full flex-col gap-10  flex justify-center items-center">
            <h1 className="font-bold text-xl text-gray-500">Ignore it i will Change this</h1>
            <div className="w-full h-40 bg-white shadow-xl rounded-xl py-2 px-3 justify-center flex flex-col gap-3">
                <div className="flex gap-7 "><h1 className="font-bold">Name: </h1><h2>{user.name}</h2></div>
                <hr />
                <div className="flex gap-7 "><h1 className="font-bold">Email: </h1><h2>{user.email}</h2></div>
                <hr />
                <div className="flex gap-7 "><h1 className="font-bold">Place: </h1><h2>{user.place}</h2></div>
                <hr />
                <div className="flex gap-7 "><h1 className="font-bold">number: </h1><h2>{user.number}</h2></div>
                <hr className="mb-5"/>
            </div>

        </div>
    </>
}
export default Home;