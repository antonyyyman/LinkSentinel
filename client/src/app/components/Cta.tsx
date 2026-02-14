"use client"

import React, { useState } from "react";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";

interface CtaProps {
    onResultReceived: (result: any) => void;
}

export default function Cta({ onResultReceived }: CtaProps) {
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const formRef = React.useRef<HTMLFormElement>(null);

    async function handleCheck(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!token || !userInput.trim()) return;

        try {
            const res = await fetch('/api/verify', {
                method: 'POST',
                body: JSON.stringify({ token }),
                headers: {
                    'content-type': 'application/json'
                }
            });

            const data = await res.json();
            if (data.success) {
                handleSubmit();
            } else {
                console.error("Turnstile verification failed");
                setToken(null);
            }
        } catch (error) {
            console.error("Error verifying Turnstile:", error);
        }
    }

    const handleSubmit = async () => {
        if (!userInput.trim()) return;

        setLoading(true);
        try {
            const response = await axios.post("http://127.0.0.1:8000/analyse", { url: userInput });
            onResultReceived(response.data);
        } catch (error) {
            console.error("Error analyzing URL:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                    <span className="block">Try it now</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Enter a URL
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <form ref={formRef} onSubmit={handleCheck}>
                        <input
                            className="px-8 py-3 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                            type="text"
                            placeholder="Enter URL"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            disabled={loading}
                        />
                        <button
                            id="checkButton"
                            type="submit"
                            disabled={loading || !userInput.trim() || !token}
                            className="px-8 py-3 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Analyzing...' : 'Check'}
                        </button>
                    </form>
                </div>
                <div className="mt-10 flex justify-center ">
                    <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={(token) => setToken(token)}
                        onExpire={() => setToken(null)}
                    />
                </div>
            </div>
        </section>
    );
}
