"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const AccountNav = () => {
    const pathname = usePathname();
    return <div className="w-full mt-5 flex justify-center items-center">
        <div className="flex gap-6">
            <Link className={`px-6 py-1  ${pathname === "/account/register" ? "bg-violet-500 text-white" : "bg-white text-black"}   rounded-full`} href={"/account/register"}>Regiser</Link>
            <Link className={`px-6 py-1 ${pathname === "/account/login" ? "bg-violet-500 text-white" : "bg-white text-black"}  rounded-full`} href={"/account/login"}>Login</Link>
        </div>
    </div>
}
export default AccountNav;