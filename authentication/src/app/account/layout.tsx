import AccountNav from "./AccountNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AccountNav />
            <div className="w-full min-h-1/2 h-fit flex justify-center items-center flex-col">
                {children}
            </div>
        </>
    );
}