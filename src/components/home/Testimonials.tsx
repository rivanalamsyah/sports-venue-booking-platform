import { Star } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../data/mockData';

export const Testimonials = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Kata Mereka" subtitle="Apa kata komunitas olahraga tentang ArenaPlay." />

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testi, i) => (
                        <div key={i} className="p-8 rounded-3xl border bg-gray-50 border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                            </div>
                            <p className="mb-6 italic text-gray-600 dark:text-gray-300">"{testi.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">{testi.name}</h4>
                                    <p className="text-xs text-gray-500">{testi.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
