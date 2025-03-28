import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        supabase.auth
        .getSessionFromUrl()
        .then(() => {
            router.push('/account');
        })
        .catch((err) => {
            console.error('Error handling auth callback:', err);
            router.push('/login');
        });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <p>Confirming your account...</p>
        </div>
    );
}
