import defaultImage from "@/image/defaultimage.png"
import { RootState } from "@/Redux/app/store";
import Image from "next/image";
import { useSelector } from "react-redux";
const UserPage = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    if (!user) {
        return <h1>Loading.....</h1>
    }
    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center">
                <Image src={defaultImage} className="w-36 h-36 rounded-full object-cover border-2 border-gray-300" alt="User Profile"/>
                <div className="text-center mt-4">
                    <h1 className="text-xl font-bold">{user.name.slice(0,1).toUpperCase().concat(user.name.slice(1,user.name.length))}</h1>
                    
                </div>
            </div>
            <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                    <strong>Name:</strong>
                    <span className="text-gray-500">{user.name}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Number:</strong>
                    <span className="text-gray-500">{user.number}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Email:</strong>
                    <span className="text-gray-500">{user.email}</span>
                </div>
                <div className="flex justify-between">
                    <strong>Place:</strong>
                    <span className="text-gray-500">{user.place}</span>
                </div>
            </div>
        </div>
    )
}
export default UserPage;