"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CTA from "./components/Cta";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Result from "./components/Result";

interface AnalysisResult {
  url: string;
  is_phishing: boolean;
  danger_score: number;
  reason: string[];
  whois_data?: any;
}

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <CTA onResultReceived={setAnalysisResult} />
      <Result result={analysisResult} />
      <Features />
      <Footer />
    </div>
  );
}
