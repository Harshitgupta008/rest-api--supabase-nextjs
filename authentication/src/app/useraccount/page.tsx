"use client"

import UserPage from "@/component/usersaccount/UserPage";
import { setLoginState } from "@/Redux/feature/authSlice/authSlice";
import { supabase } from "@/utils/supabase";
import { deleteCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux"

const UserAccount = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const LogoutUser = async () => {
        try {

            const { error } = await supabase.auth.signOut();
            if (error) {
                return alert(error.message)
            }

            dispatch(
                setLoginState({
                    isLoggedIn: false,
                    user: null,
                })
            );
            deleteCookie("users");

            router.push("/account/login")
        } catch (error: unknown) {
            console.log("error in logout :: " + error)
        }
    }
    return <div className="flex px-1 flex-col justify-center items-center w-full mt-4 gap-4">
        <UserPage />
        <div className="flex justify-center items-center"> <button onClick={LogoutUser} className="h-fit w-36 py-1 text-white bg-gray-500 rounded-lg">Logout</button></div>
    </div>
}
export default UserAccount