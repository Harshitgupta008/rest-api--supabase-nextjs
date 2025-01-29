import { BlogNav } from "./BlogNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
                <BlogNav />
                {children}
        </>
    );
}