"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/app/store";
import { IsOpenNav } from "@/Redux/feature/sidenavSlice/sidenavSlice";
const Navbar = () => {
    const { isLoggedIn } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch();

    const pathname = usePathname();
    return <>
        <div>
            {
                isLoggedIn ?
                    <>
                        <div className="h-16 w-full bg-white md:z-10 shadow-lg flex fixed top-0 justify-between items-center px-4">

                            <div className="flex gap-2 justify-center items-center">
                                {
                                    pathname.startsWith("/useraccount") ?
                                        <svg onClick={() => dispatch(IsOpenNav())} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden  cursor-pointer hover:text-violet-800">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                        </svg>
                                        : ""
                                }
                                <h1 className="font-bold text-xl">Blog</h1>
                            </div>
                            <div className="flex gap-4 justify-center items-center">

                                <Link className={`font-bold  ${pathname === "/" ? "text-violet-500" : "text-black"}`} href="/">Home</Link>
                                <Link className={`font-bold   hover:border-violet-500 ${pathname.startsWith("/useraccount") ? "text-white bg-violet-500 border-violet-500" : "text-black bg-white"} flex justify-center items-center border-gray-400 border-2 rounded-full px-2 py-1`} href="/useraccount">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                </Link>

                            </div>
                        </div>
                    </>
                    :
                    ""
            }
        </div>
    </>
}
export default Navbar;