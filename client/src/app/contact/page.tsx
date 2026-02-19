


export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 overflow-x-hidden">
            <section className="relative flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        <span className="block">Contact Us</span>
                    </h1>
                    <p className="text-lg sm:text-sm text-gray-300 mb-10 max-w-3xl mx-auto">
                        We're currently performing maintence on our contact system and will be back soon! For urgent enquiries please email us at <br /><b>linksentinel.contact@gmail.com</b>
                    </p>


                    {/* <form action="" method="post">
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                        <textarea name="message" id="message" placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
                        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button>
                    </form> */}
                </div>
            </section>
        </div>
    );
}