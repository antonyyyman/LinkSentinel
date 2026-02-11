export default function Hero() {
    return (
        <section className="relative flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                    <span className="block">Stop Phishing.</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Start Protecting.
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    LinkSentinel detects malicious links.
                    Safe browsing is just a scan away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
                        Get Started
                    </button>
                    <button className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}