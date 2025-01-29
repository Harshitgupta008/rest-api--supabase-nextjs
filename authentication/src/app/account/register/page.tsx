"use client"
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { useState } from "react";


interface userType {
    name: string;
    email: string;
    number: string;
    place: string;
    password: string;
    id: number;
}

const RegisterUser = () => {

    const [user, setUser] = useState<userType>({
        name: "", email: "", number: "", place: "", password: "", id: 0
    })

    const [cpassword, setCpassword] = useState<string>("");
    const router = useRouter();


    const HandleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, id: Date.now() });
    }

    const SubmitUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, number, place, password } = user;

        if (!name || !email || !number || !place || !password || !cpassword) {
            alert("All fields are mandatory");
            return;
        }
        if (password !== cpassword) {
            alert("Password mismatch");
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name, place, number } } });
            console.log(data.user?.user_metadata)

            if (error) {
                return alert(`Registration failed: ${error.message}`);
            }

            alert("User registered successfully");
            setUser({ name: "", email: "", number: "", place: "", password: "", id: 0, });
            setCpassword("");
            return router.push("/");

        } catch (err) {
            console.error("Unexpected error in registration:", err);
            alert("An unexpected error occurred. Please try again later.");
        }
    };
    return <>
        <div className="w-full  flex py-5 justify-center items-center mt-5 flex-col">
            <form onSubmit={SubmitUser} className="w-fit h-fit p-5 bg-white shadow-xl rounded-xl flex gap-4 flex-col ">
                <h1 className=" font-semibold text-center text-violet-500">Register Here!</h1>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="name">Name<span className="text-red-400">*</span></label>
                    <input type="text" value={user.name} name="name" id="name" onChange={HandleInput} placeholder="Enter Your Name" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="email">Email<span className="text-red-400">*</span></label>
                    <input type="email" value={user.email} name="email" id="email" onChange={HandleInput} placeholder="Enter Your Email" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="number">Phone-Number<span className="text-red-400">*</span></label>
                    <input type="number" value={user.number} name="number" id="number" onChange={HandleInput} placeholder="Enter Your Phone-Number" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="place">Place<span className="text-red-400">*</span></label>
                    <input type="text" value={user.place} name="place" id="place" onChange={HandleInput} placeholder="Enter Your City" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="password"> Password<span className="text-red-400">*</span></label>
                    <input type="password" value={user.password} name="password" id="password" onChange={HandleInput} placeholder="Enter Your Password" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="cpassword">Conform password<span className="text-red-400">*</span></label>
                    <input type="password" id="cpassword" value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder="Conform your password" className="w-80 sm:w-96  px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="flex justify-end w-full px-2">
                        <Link href={"/account/login"} className="text-violet-700 font-medium text-sm hover:text-red-600">have an account?</Link>
                    </div>
                    <button type="submit" className="w-full bg-violet-500 text-white py-2 rounded-full hover:bg-violet-700 active:bg-violet-900">Register User</button>
                </div>
            </form>
        </div>
    </>
}
export default RegisterUser;