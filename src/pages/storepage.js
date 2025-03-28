//#region Imports
import Header from "../components/header";
import Link from 'next/link';
//#endregion

//#region Store Page
export default function Store(){
    return(
        <>
        {/* Header Stuff */}
        <Header/>
        <Head>
            <title>Devly - A Marketplace For Builders, By Builders</title>
        </Head>
        
        <section classaName="bg-black text-white py-24 px-6 text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-center mt-5">The Marketplace</h2>
            <p className="text-lg text-gray-400 mb-6 text-center">
                Browse projects or list your own.
            </p>
        </section>
        </>
    );
}
//#endregion 