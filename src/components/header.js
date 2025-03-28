import Link from 'next/link';

export default function Header(){
    return(
        <>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-black text-white px-6 py-4 flex justify-between items-center border-b border-grey-800">
                <Link href="/" className="text-5xl font-bold">Devly</Link>
                <nav className="space-x-6">
                <Link href="#featured" className="hover:underline">Featured</Link>
                <Link href="/tools" className="hover:underline">Tools</Link>
                <Link href="#scripts" className="hover:underline">Scripts</Link>
                <Link href="#templates" className="hover:underline">Templates</Link>
                <Link href="#services" className="hover:underline">Services</Link>
                <Link href="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Sign Up</Link>
                </nav>
            </header>
        </>
    );
}