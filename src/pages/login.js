// Imports
import Header from '@/components/header';
import Link from 'next/link';

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    async function handleLogin(e){
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setMessage(error.message);
        else router.push('/account');
    }

    return(
        <>
        <Header/>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form className="space-y-4 w-full max-w-sm p-8 bg-gray-900 rounded shadow-lg" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded bg-gray-800 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 rounded bg-gray-800 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-white text-black px-4 py-2 rounded w-full hover:bg-gray-200">
                    Login
                </button>
                <p className="text-sm text-gray-400 text-center">{message}</p>

                {/* Don't have an account */}
                <div className="pt-4 text-sm text-gray-400 text-center">
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/signup"
                        className="text-white underline hover:text-gray-300 font-medium"
                    >Sign Up</Link>
                </div>
            </form>
        </div>
        </>
    );
}