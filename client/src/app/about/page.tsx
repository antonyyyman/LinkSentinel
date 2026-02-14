"use client"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
            <Navbar />
            <section className="relative flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        <span className="block">About LinkSentinel</span>
                    </h1>
                    <p className="text-lg sm:text-sm text-gray-300 mb-10 max-w-3xl mx-auto">
                        LinkSentinel performs heuristic-based URL analysis by extracting lexical and structural features from user supplied URLs and evaluating them against a weighted risk model. It then checks that link against a database of known/verified phishing URLs and returns a score juding the likelihood of a phishing attempt.<br />
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}