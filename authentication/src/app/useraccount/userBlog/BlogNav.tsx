"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const BlogNav = () => {
    const pathname = usePathname();
    return <div className="w-full h-fit flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold text-gray-400">Users Blog</h1>
        <div className="mt-10 flex flex-wrap gap-5">
            <Link href={"/useraccount/userBlog"}  className={`${pathname === "/useraccount/userBlog" ? "text-violet-600 underline" : "text-black"} font-bold hover:underline text-lg`}>All Blog</Link>
            <Link href={"/useraccount/userBlog/createblog"}  className={`${pathname === "/useraccount/userBlog/createblog" ? "text-violet-600 underline" : "text-black"} font-bold hover:underline text-lg`}>Create Blog</Link>
        </div>
    </div>
}