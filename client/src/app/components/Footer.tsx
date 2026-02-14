export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} LinkSentinel Inc. All rights reserved.</p>
                    <div className='flex gap-6'>
                        {/* TODO: Add socials */}
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        <a href="/disclaimer" className="hover:text-slate-300 transition-colors">Disclaimer</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}