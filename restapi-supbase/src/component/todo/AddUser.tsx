import { useState } from "react";

interface addUserType {
    name: string;
    email: string;
    number: string;
    id: number;
}
interface userType {
    name: string;
    email: string;
    number: number;
    id: number;
}
interface AddType {
    AddUserDetail: (user: userType) => void;
}

const AddUser: React.FC<AddType> = ({ AddUserDetail }) => {
    const [user, setUser] = useState<addUserType>({
        name: "", email: "", number: "", id: 0
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const SubmitUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newUser = { ...user, id: Date.now(), number: parseInt(user.number),  };
        AddUserDetail(newUser)
        setUser({ name: "", email: "", number: "", id: 0 });
        return alert("User Submitted")
    }

    return <div className="flex  justify-center items-center mt-10 ">

        <form onSubmit={SubmitUser} className="flex flex-col gap-5 h-fit w-fit p-10 rounded-xl shadow-xl">
            <h1 className="my-2 text-center font-bold text-lg underline">Enter User</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="px-2 text-gray-400">Name<span className="text-red-500">*</span></label>
                <input id="name" name="name" value={user.name} onChange={handleInput} className="w-72 sm:w-96 outline-none border-2 border-gray-400 px-4 py-2 rounded-2xl" type="text" placeholder="Enter Your Name" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="px-2 text-gray-400">Email<span className="text-red-500">*</span></label>
                <input id="email" name="email" value={user.email} onChange={handleInput} className="w-72 sm:w-96 outline-none border-2 border-gray-400 px-4 py-2 rounded-2xl" type="email" placeholder="Enter Your Email" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="number" className="px-2 text-gray-400">Phone number<span className="text-red-500">*</span></label>
                <input id="number" name="number" value={user.number} onChange={handleInput} className="w-72 sm:w-96 outline-none border-2 border-gray-400 px-4 py-2 rounded-2xl" type="number" placeholder="Enter Your Number" />
            </div>
            <div className="w-full"><button type="submit" className="w-full bg-gray-500 text-white rounded-full py-2 hover:bg-gray-600 active:bg-gray-950">Save</button></div>
        </form>

    </div>
}
export default AddUser;