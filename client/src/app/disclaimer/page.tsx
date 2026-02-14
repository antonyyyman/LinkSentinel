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
                        <span className="block">Disclaimer</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        LinkSentinel is a proof of concept and should not be used in production as a security solution nor should it be relied upon as a sole mechanism for detecting or preventing phishing attacks.<br />
                    </p>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        While efforts have been made to implement reasonable detection techniques, no guarentees are made regarding the accuracy, completeness, or reliability of any results produced by this application. False positives and false negatives may occur.<br />
                    </p>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        The author accepts no liability for any loss, damage, security incidents, or other consequences resulting from the use, misuse, or reliance on this software.<br />
                    </p>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Users are strongly advised to employ industry grade security controls and professional cybersecurity solutions for operational environments.<br />
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}