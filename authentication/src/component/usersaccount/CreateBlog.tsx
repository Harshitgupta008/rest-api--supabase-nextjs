"use client"
import Image from "next/image";
import { useState } from "react";

const CreateBlog = () => {
    const [blogImage, setblogImage] = useState<string>();
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => 
        { if (e.target.files && e.target.files[0]) { setblogImage(URL.createObjectURL(e.target.files[0])); } 
};
    return <>
        <div className="px-4">
            <div className=" flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label >Blog title <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Title" className="border-2 border-gray-500 py-4 h-16 px-2 text-violet-900 rounded-xl" />
                </div>
                <div className="flex flex-col gap-1">
                    <label >Blog Image <span className="text-red-500">*</span></label>
                    <label htmlFor="imagess" className="w-full flex gap-2 bg-violet-200 text-black h-32 text-lg font-bold rounded-xl border-dashed border-gray-500 border-2  py-4 justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload Image
                    </label>
                    {
                        blogImage ? <Image width={80} height={80} src={blogImage} alt="img##" className="h-24 w-24" />
                            : ""
                    }
                    <input type="file" accept="image/**" id="imagess" className="hidden" onChange={handleImageChange} />
                </div>
                <div className="flex flex-col gap-1">
                    <label >Discription<span className="text-red-500">*</span></label>
                    <textarea name="textarea" className="h-72 border-2 p-5 text-violet-900 rounded-lg  border-gray-500" placeholder="Enter Your Blog"></textarea>
                </div>
                <div className="my-5">
                    <button className="bg-violet-600 rounded-lg h-6 h">Submit</button>
                </div>
            </div>
        </div>
    </>
}
export default CreateBlog;