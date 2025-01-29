"use client"

import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import AddUser from "./AddUser";
import { supabase } from "@/utils/supabaseClient";

interface userType {
    name: string;
    id: number;
    email: string;
    number: number;
}

const TodoSupabase = () => {
    const [selectType, setSelectType] = useState<string>("view");
    const [userData, setUserData] = useState<userType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);



    const AddUserDetail = async (users: userType) => {
        try {

            const { data, error } = await supabase
                .from('todoUsers')
                .insert([users])
                .select()

            if (error) {
                console.error(error.message);
                return;
            }

            if (data) {
                setUserData([...userData, users]);
                setSelectType("view");
            }
        } catch (err) {
            console.error("Error adding user:", err);
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            setLoading(true);

            let { data: todoUsers, error } = await supabase.from('todoUsers').select('*')

            if (error) {
                console.error("Error fetching data:", error.message);
            } else {

                if (todoUsers) {
                    setUserData(todoUsers);
                } else {
                    console.log("No data returned from Supabase");
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return <div>
        <div className="w-full flex flex-wrap gap-3 mt-5 justify-center items-center">
            <strong onClick={() => setSelectType("view")} className={`w-fit h-fit ${selectType === "view" ? "text-red-500" : "text-black"} cursor-pointer hover:underline px-5 py-1`}>Views User</strong>
            <strong onClick={() => setSelectType("add")} className={`w-fit h-fit ${selectType === "add" ? "text-red-500" : "text-black"} cursor-pointer hover:underline px-5 py-1`}>Add User</strong>
        </div>

        {selectType === "view" &&
            <div className="w-full h-fit my-4 flex flex-wrap justify-center items-center gap-5">
                {
                    userData.length === 0 ? <h1>No Users</h1> :
                        userData.map((user: userType, i) => {
                            return <div key={user.id} className="h-fit w-fit">
                                <UserCard name={user.name} id={user.id} email={user.email} number={user.number} userData={userData} setUserData={setUserData} />
                            </div>
                        })
                }

            </div>
        }
        {selectType === "add" && <AddUser AddUserDetail={AddUserDetail} />}
    </div>
}
export default TodoSupabase;