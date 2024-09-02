export default function RootLayout({
    children,
}: Readonly <{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <aside className="bg-gray-500 h-screen p-8">
                <p>blog 1</p>
                <p>blog 2</p>
            </aside>
            {children}
        </div>
    );
}


