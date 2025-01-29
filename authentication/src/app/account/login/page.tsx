"use client"
import { setLoginState } from "@/Redux/feature/authSlice/authSlice";
import { supabase } from "@/utils/supabase";
import { setCookie } from "cookies-next/client";
import Link from "next/link";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useDispatch();
    const route = useRouter();

    const LoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

            const { data, error } = await supabase.auth.signInWithPassword({ email, password, });
            
            if (error) { return alert("loging failed :: " + error.message); }
            if (data) {
                setCookie("users",data.session?.access_token)
                dispatch(
                    setLoginState({
                        isLoggedIn: true,
                        user: data.user?.user_metadata,
                    })
                );
                alert("login success")
               return route.push("/");
            } else {
                dispatch(
                    setLoginState({
                        isLoggedIn: false,
                        user: null,
                    })
                );

            }

        } catch (error) {
            console.log(error)
        }
    }
    

    return <>
        <div className="w-full  flex py-5 justify-center items-center mt-5 flex-col">
            <form onSubmit={LoginUser} className="w-fit h-fit p-5 bg-white shadow-xl rounded-xl flex gap-4 flex-col ">
                <h1 className=" font-semibold text-center text-violet-500">Login Here!</h1>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="email">Email<span className="text-red-400">*</span></label>
                    <input type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="w-80 sm:w-96 px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-gray-500 px-1" htmlFor="password"> Password<span className="text-red-400">*</span></label>
                    <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" className="w-80 sm:w-96 px-4 py-2 border-[2px] outline-none border-gray-400  rounded-lg" />
                </div>
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                    <div className="flex justify-between w-full px-2">
                        <h1 className="text-violet-700 cursor-pointer font-medium text-sm hover:text-red-600">forget password?</h1>
                        <Link href={"/account/register"} className="text-violet-700 font-medium text-sm hover:text-red-600">create account</Link>
                    </div>
                    <button type="submit" className="w-full bg-violet-500 text-white py-2 rounded-full hover:bg-violet-700 active:bg-violet-900">Login User</button>
                </div>
            </form>
           
        </div>
    </>
}
export default Login;