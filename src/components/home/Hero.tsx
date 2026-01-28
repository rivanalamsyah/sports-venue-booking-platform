import { motion } from 'framer-motion';
import { CalendarCheck2, Clock, Goal } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2071&auto=format&fit=crop"
                    className="w-full h-full object-cover scale-105"
                    alt="Hero Background"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold text-green-300 mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Open 07:00 - 23:00 WIB
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                            Level Up Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Game Today.</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Booking lapangan futsal, basket, padel, dan mini soccer standar internasional hanya dalam hitungan detik.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => document.getElementById('lapangan')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 group"
                            >
                                <CalendarCheck2 className="group-hover:scale-110 transition-transform" />
                                Booking Sekarang
                            </button>
                            <button
                                onClick={() => document.getElementById('jadwal')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2"
                            >
                                <Clock /> Cek Jadwal
                            </button>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-gray-400 text-sm">Tim/Minggu</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">4.9</div>
                                <div className="text-gray-400 text-sm">Rating Google</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">6</div>
                                <div className="text-gray-400 text-sm">Jenis Arena</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 hidden lg:block relative"
                    >
                        <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl transform rotate-[-3deg] max-w-md mx-auto">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"><Goal size={20} /></div>
                                    <div>
                                        <div className="text-white font-bold">Arena Futsal 1</div>
                                        <div className="text-green-300 text-xs">Premium Court</div>
                                    </div>
                                </div>
                                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">Available</span>
                            </div>
                            <div className="h-40 rounded-xl bg-gray-800 mb-4 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600" className="object-cover w-full h-full" alt="Preview" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>Jam</span>
                                    <span>18:00 - 20:00</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>Harga</span>
                                    <span className="text-white font-bold">Rp 360.000</span>
                                </div>
                            </div>
                            <button
                                onClick={() => window.open(`https://wa.me/6281234567890?text=${encodeURIComponent("Halo Admin, saya ingin booking Arena Futsal 1 - Premium Court untuk hari ini.")}`, '_blank')}
                                className="w-full mt-4 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold transition shadow-lg"
                            >
                                Book Now
                            </button>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/30 rounded-full blur-[100px] -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
