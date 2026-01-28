import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { PRICING_PACKAGES } from '../../data/mockData';

export const PricingSection = () => {
    return (
        <section id="member" className="py-24 bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionTitle title="Membership Plans" subtitle="Hemat lebih banyak dan dapatkan prioritas dengan menjadi member." />

                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {PRICING_PACKAGES.map((pkg, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-3xl border flex flex-col h-full relative ${pkg.highlight
                                ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-green-500 shadow-2xl shadow-green-900/20 transform scale-105 z-10'
                                : 'bg-white/5 border-white/10 backdrop-blur-sm'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                            <p className="text-gray-400 text-sm mb-6">{pkg.desc}</p>
                            <div className="mb-8">
                                <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                                <span className="text-gray-400 text-sm">{pkg.period}</span>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                {pkg.features.map((feat, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-green-400" />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Admin, saya tertarik dengan paket membership ${pkg.name}. Mohon info lebih lanjut.`)}`, '_blank')}
                                className={`w-full py-3.5 rounded-xl font-bold transition ${pkg.highlight ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                            >
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
