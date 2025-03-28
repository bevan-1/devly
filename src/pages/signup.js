// Imports
import Header from '@/components/header';
import Link from 'next/link';

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    async function handleSignUp(e){
        e.preventDefault();

        if (password !== confirmPassword){
            setMessage("❌ Passwords don't match.");
            return;
        }

        if (password.length < 6){
            setMessage("❌ Password must be at least 6 characters.");
            return;
        }

        const { error } = await supabase.auth.signUp({
             email, 
             password,
             options: {
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
             } 
            });

        if (error){
            if (error.message.includes("User already registered")){
                setMessage("❌ An account with this email already exists.")
            } else{
                setMessage(`❌ $error.message`);
            }
        }else{
            setMessage('✅ Check your email your confirmation');
            setTimeout(() => router.push('/login'), 10000);
        }
    }

    const passwordsMatch = password && confirmPassword && password === confirmPassword;

    return(
        <>
        {/* Header Stuff */}
        <Header/>
        <Head>
            <title>Devly - A Marketplace For Builders, By Builders</title>
        </Head>

        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form className="space-y-4 w-full max-w-sm p-8 bg-gray-900 rounded shadow-lg" onSubmit={handleSignUp}>
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                {/* Email Field */}
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded bg-gray-800 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Password Field */}
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="px-4 py-2 rounded bg-gray-800 w-full pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2 text-sm text-gray-400 hover:text-white"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                
                {/* Confirm Password Field */}
                <div className="relative">
                    <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Comfirm Password"
                        className={`px-4 py-2 rounded w-full pr-10 ${
                            confirmPassword && passwordsMatch
                                ? "bg-green-900 border border-green-500"
                                : "bg-gray-800"
                        }`}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword && (
                        <div className="absolute right-3 top-2.5 text-lg">
                            {passwordsMatch ? "✅" : "❌"}
                        </div>
                    )}
                </div>

                <button className="bg-white text-black px-4 py-2 w-full rounded hover:bg-gray-200">
                    Sign Up
                </button>

                <p className="text-sm text-gray-400 text-center">{message}</p>

                {/* Switch to login */}
                <div className="pt-4 text-sm text-gray-400 text-center">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-white underline hover:text-gray-300 font-medium"
                    >Login</Link>
                </div>
            </form>
        </div>
        </>
    );
}