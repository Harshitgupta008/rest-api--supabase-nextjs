import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";

interface userType {
    name: string;
    id: number;
    email: string;
    number: number;
}
interface userCardType extends userType {
    setUserData: (user: userType[]) => void;
    userData: userType[]
}


const UserCard: React.FC<userCardType> = ({ name, id, email, number, setUserData, userData }) => {

    const [editStatus, setEditStatus] = useState<boolean>(false);

    const [User, setUser] = useState<userType>({
        name, email, number, id
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
    }

    const EditUser = () => {
        setEditStatus(true);
    }

    const DeleteUser = async (userid: number) => {
        try {

            const { error } = await supabase.from('todoUsers').delete().eq("id", userid)
            if (error) {
                return alert("Error : " + error);
            } else {

                setUserData(userData.filter(user => user.id !== userid));
                return alert("user deleted")
            }

        } catch (error) {

            return console.log(error);
        }
    }
    
    const UpdateUser = async (userid: number, newUser: userType) => {
        try {
            
            const { data, error } = await supabase.from('todoUsers').update(newUser).eq('id', userid).select();
            if (error) {
                return console.log(error);
            } else {
                const updatedUserData = userData.map((user) => {
                    if (user.id === userid) {
                        return { ...user, ...newUser };
                    }
                    return user;
                });
                setUserData(updatedUserData);
                setEditStatus(false)
                return alert("User updated")
            }
            
        } catch (error) {
            
            return console.log(error);
        }
    }

    return <div className="h-fit py-8 w-72 bg-white text-black flex justify-center px-4 rounded-xl shadow-xl">
        {
            editStatus ?
                <div className="flex gap-3 items-center flex-col w-fit">
                    <input className="w-62 outline-none border-2 border-gray-400 rounded-md px-2 py-1" name="name" value={User.name} onChange={handleInput} type="text" placeholder="Enter your name" />
                    <input className="w-62 outline-none border-2 border-gray-400 rounded-md px-2 py-1" name="email" value={User.email} onChange={handleInput} type="email" placeholder="Enter your Email" />
                    <input className="w-62 outline-none border-2 border-gray-400 rounded-md px-2 py-1" name="number" value={User.number} onChange={handleInput} type="number" placeholder="Enter your number" />
                    <div className="flex gap-3 mt-2">
                        <button onClick={() => setEditStatus(false)} className="w-fit h-fit bg-slate-600 text-white px-5 py-1 rounded-lg">Cancel</button>
                        <button onClick={() => UpdateUser(id, User)} className="w-fit h-fit bg-slate-600 text-white px-5 py-1 rounded-lg">update</button>
                    </div>
                </div>
                :
                <div className="flex gap-3 flex-col w-62 hover:scale-105 duration-300 transition-all ease-in-out">
                    <div><strong>Name</strong>: {name}</div>
                    <div><strong>Email</strong>: {email.slice(0, 25)}</div>
                    <div><strong>number</strong>: {number}</div>
                    <div className="flex gap-3 mt-4">
                        <button onClick={EditUser} className="w-fit h-fit bg-slate-600 text-white px-5 py-1 rounded-lg">Edit</button>
                        <button onClick={() => DeleteUser(id)} className="w-fit h-fit bg-slate-600 text-white px-5 py-1 rounded-lg">Delete</button>
                    </div>
                </div>
        }
    </div>
}
export default UserCard;