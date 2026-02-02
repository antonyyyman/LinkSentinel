"use client"

import { Menu } from "lucide-react";
import { X } from "lucide-react"
import { useState } from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div>
                            <img src="/logo.png" alt="Logo" className="h-8 sm:h-10 md:h-12" />
                        </div>
                        <span className="text-2xl font-medium">
                            <span className="text-white">Link</span>
                            <span className="text-blue-500">Sentinel</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8 items-center">
                        <ul className="flex items-center gap-8">
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button className="md:hidden p-2 text-white hover:text-blue-500 transition-colors duration-300" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen &&
                <div className="md:hidden bg-slate-950/20 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top-full duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <li>
                            <a href="#" onClick={() => setMobileMenuIsOpen(false)} className="text-white hover:text-blue-500 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setMobileMenuIsOpen(false)} className="text-white hover:text-blue-500 transition-colors duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setMobileMenuIsOpen(false)} className="text-white hover:text-blue-500 transition-colors duration-300">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setMobileMenuIsOpen(false)} className="text-white hover:text-blue-500 transition-colors duration-300">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => setMobileMenuIsOpen(false)} className="text-white hover:text-blue-500 transition-colors duration-300">
                                Contact
                            </a>
                        </li>
                    </div>
                </div>
            }
        </nav>
    );
}