"use client"
import Image from "next/image";
import { RootState } from "@/Redux/app/store";
import { IsOpenNav } from "@/Redux/feature/sidenavSlice/sidenavSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "@/image/defaultimage.png"

const SlideNavbar = () => {
    const pathname = usePathname();
    const { navStatus } = useSelector((state: RootState) => state.sidenav);
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const CloseNav = () => {
        return dispatch(IsOpenNav());
    }
    return (
        <div className={`${navStatus ? "w-64 " : "w-0 "} md:w-80 pt-20 md:pt-24 fixed md:relative  h-screen bg-violet-500 z-10 md:z-0 text-white flex flex-col shadow-lg transition-all duration-300 overflow-hidden`}>
            <div className="w-64 md:p-4 p-2 mb-4 flex flex-col gap-4 justify-center items-center text-lg font-bold border-b border-violet-400">
                <Image src={defaultImage} className="w-24 h-24 rounded-full" alt="userimage" />
                {
                    user ?
                        <h1>{user.name.slice(0, 1).toUpperCase().concat(user.name.slice(1, user.name.length))}</h1>
                        : "..."
                }

            </div>

            <nav className="flex flex-col w-full justify-center items-center gap-2 md:p-4 p-2">
                <Link href="/useraccount" className={`${pathname === "/useraccount" ? "bg-violet-800 hover:bg-violet-800" : "bg-violet-500"} w-64  p-2 flex justify-center items-center hover:bg-violet-600 rounded`}>
                    Profile
                </Link>
                <Link href="/useraccount/userBlog" className={`${pathname.startsWith("/useraccount/userBlog") ? "bg-violet-800 hover:bg-violet-800" : "bg-violet-500"} w-64  p-2 flex justify-center items-center hover:bg-violet-600 rounded`}>
                    User Blog
                </Link>
                <Link href="/useraccount/wishlistBlog" className={`${pathname.startsWith("/useraccount/wishlistBlog") ? "bg-violet-800 hover:bg-violet-800" : "bg-violet-500"} w-64  p-2 flex justify-center items-center hover:bg-violet-600 rounded`}>
                    WishList
                </Link>
                <Link href="/useraccount/setting" className={`${pathname.startsWith("/useraccount/setting") ? "bg-violet-800 hover:bg-violet-800" : "bg-violet-500"} w-64  p-2 flex justify-center items-center hover:bg-violet-600 rounded`}>
                    Setting
                </Link>
            </nav>

            <div className="absolute md:hidden top-10 right-5 text-white hover:text-black">
                {
                    navStatus ?
                        <svg onClick={CloseNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        : ""
                }
            </div>
        </div>

    );
};

export default SlideNavbar;
