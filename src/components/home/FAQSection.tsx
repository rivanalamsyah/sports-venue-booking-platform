import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { FAQS } from '../../data/mockData';

export const FAQSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-950" id="faq">
            <div className="max-w-3xl mx-auto px-4">
                <SectionTitle title="FAQ" subtitle="Pertanyaan yang sering diajukan." />

                <div className="space-y-4">
                    {FAQS.map((item, i) => (
                        <div key={i} className="rounded-2xl border overflow-hidden bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
                            <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left transition hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                                <span className="font-bold text-gray-900 dark:text-white">{item.q}</span>
                                {activeFaq === i ? <ChevronUp size={20} className="text-green-500" /> : <ChevronDown size={20} className="text-gray-400" />}
                            </button>
                            <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6 text-gray-600 dark:text-gray-400"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
