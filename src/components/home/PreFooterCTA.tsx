
export const PreFooterCTA = () => {
    return (
        <section className="py-20 bg-green-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl font-extrabold text-white mb-6">Siap Untuk Bertanding?</h2>
                <p className="text-green-100 text-lg mb-8">Jangan sampai kehabisan slot. Amankan jadwal main tim kamu sekarang juga.</p>
                <button
                    onClick={() => document.getElementById('lapangan')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-xl transform hover:-translate-y-1"
                >
                    Book Slot Sekarang
                </button>
            </div>
        </section>
    );
};
