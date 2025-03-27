export default function Header(){
    return(
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-black text-white px-6 py-4 flex justify-between items-center border-b border-grey-800">
                <a href="/" className="text-5xl font-bold">Devly</a>
                <nav className="space-x-6">
                <a href="#featured" className="hover:underline">Featured</a>
                <a href="#tools" className="hover:underline">Tools</a>
                <a href="#scripts" className="hover:underline">Scripts</a>
                <a href="#templates" className="hover:underline">Templates</a>
                <a href="#services" className="hover:underline">Services</a>
                <a href="/login" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Login</a>
                </nav>
            </header>
        </>
    );
}