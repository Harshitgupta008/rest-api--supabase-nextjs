import SlideNavbar from "@/component/usersaccount/SlideNavbar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="w-full h-fit flex ">
                <SlideNavbar />
                <div className="w-full h-screen overflow-auto scroll-smooth pt-20">
                    {children}
                </div>
            </div>
        </>
    );
}