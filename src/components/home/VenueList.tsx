import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { CATEGORIES, VENUES } from '../../data/mockData';
import { SectionTitle } from '../ui/SectionTitle';
import { Venue } from '../../types';
import { VenueDetailModal } from './VenueDetailModal';

// Helper for dynamic category styling
const getCategoryClasses = (isActive: boolean, isDarkMode: boolean) => {
    // Simulating the original logic, though passed via props in real code or hook
    // We use dark: classes for dark mode
    if (isActive) {
        return 'bg-green-600 text-white border-green-600 shadow-lg scale-105';
    }
    return 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:text-white';
};

export const VenueList = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

    const filteredVenues = activeCategory === 'all'
        ? VENUES
        : VENUES.filter(v => v.category === activeCategory);

    return (
        <section id="lapangan" className="py-24 scroll-mt-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Pilih Arena Anda" subtitle="Berbagai jenis lapangan untuk kebutuhan olahraga yang berbeda." />

                {/* Sticky Filters */}
                <div className="sticky top-20 z-30 py-4 mb-8 backdrop-blur bg-gray-50/95 dark:bg-gray-900/90">
                    <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar justify-start md:justify-center">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${getCategoryClasses(activeCategory === cat.id, false)}`}
                            >
                                <cat.icon size={16} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredVenues.map((venue) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={venue.id}
                                className="rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-500/10"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                    <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 text-gray-900">
                                        <Star size={12} className="text-yellow-400 fill-yellow-400" /> {venue.rating} <span className="text-gray-400 font-normal">({venue.reviews})</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur text-white px-3 py-1 rounded-lg text-xs font-medium border border-white/20">
                                        {venue.type}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="font-bold text-xl leading-tight mb-1 text-gray-900 dark:text-white">{venue.name}</h3>
                                        <p className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                            <MapPin size={14} className="text-green-500" /> {venue.specs}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {venue.facilities.slice(0, 3).map((fac, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 rounded-md font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">{fac}</span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-700">
                                        <div>
                                            <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">Mulai dari</p>
                                            <p className="font-bold text-xl text-gray-900 dark:text-white">Rp {venue.price.toLocaleString()}<span className="text-sm font-normal text-gray-400 dark:text-gray-500">/jam</span></p>
                                        </div>
                                        <button
                                            onClick={() => setSelectedVenue(venue)}
                                            className="px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 transition shadow-lg hover:shadow-green-500/30 bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                                        >
                                            Detail & Book
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <VenueDetailModal venue={selectedVenue} onClose={() => setSelectedVenue(null)} />
        </section>
    );
};
