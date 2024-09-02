export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <aside className="bg-gray-500 h-screen p-8">
                <p>contacts</p>
            </aside>
            {children}
        </div>
    );
}