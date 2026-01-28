import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const Facilities = () => {
    return (
        <section id="fasilitas" className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Fasilitas Premium" subtitle="Kami memastikan kenyamanan Anda sebelum dan sesudah pertandingan." />

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {/* Main Feature - Large */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="col-span-1 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group"
                    >
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Lounge" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold text-white mb-2">VIP Lounge & Cafe</h3>
                            <p className="text-gray-300">Tempat bersantai yang nyaman dengan WiFi kencang, kopi premium, dan snack sehat untuk recovery energi tim Anda.</p>
                        </div>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl p-8 flex flex-col justify-center items-start bg-gray-100 dark:bg-gray-900 dark:border dark:border-gray-800">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Loker Digital</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Keamanan barang terjamin dengan sistem kunci RFID pribadi.</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl p-8 flex flex-col justify-center items-start border bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-800/30">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Hot Shower</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Kamar mandi bersih dengan air panas tersedia di setiap ruang ganti.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
