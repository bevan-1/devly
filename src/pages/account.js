//#region Imports
import { useEffect, useState} from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/router';
//#endregion

//#region Account Page
export default function Account(){
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() =>{
        supabase.auth.getUser().then(({ data: {user } }) =>{
            if (!user) router.push('/login');
            else setUser(user);
        });
    }, []);

    return(
        <>
        {/* Header Stuff */}
        <Header/>
        <Head>
            <title>Devly - A Marketplace For Builders, By Builders</title>
        </Head>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            {user ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Welcome, {user.email}</h1>
                    <button
                        className="mt-4 bg-white text-black px-4 py-2 rounded"
                        onClick={async () => {
                            await supabase.auth.signOut();
                            router.push('/login')
                        }} 
                    >Logout</button>
                </div>
            ): (
                <p>Loading...</p>
            )}
        </div>
        </>
    );
}
//#endregion