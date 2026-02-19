export default function RegisterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
            <section className="relative flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        <span className="block">Registration has been temporarily disabled.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        We're sorry! New user registration has been temporarily disabled. Please try again later.
                    </p>
                </div>
            </section>
        </div>
    );
}