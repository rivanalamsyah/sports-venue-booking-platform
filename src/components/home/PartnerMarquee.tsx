import { motion } from 'framer-motion';
import { PARTNERS } from '../../data/mockData';

export const PartnerMarquee = () => {
    return (
        <section className="py-12 border-b overflow-hidden bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Dipercaya oleh Komunitas & Perusahaan</p>
            </div>
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-12 items-center min-w-max"
                >
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                        <div key={i} className="flex items-center gap-2 font-bold text-xl grayscale hover:grayscale-0 hover:text-green-500 transition duration-300 cursor-pointer mx-4 text-gray-400 dark:text-gray-600">
                            <span className="text-2xl">{partner.logo}</span>
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
