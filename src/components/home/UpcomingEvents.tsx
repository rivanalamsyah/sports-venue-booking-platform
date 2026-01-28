import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { UPCOMING_EVENTS } from '../../data/mockData';
import { Event } from '../../types';
import { EventDetailModal } from './EventDetailModal';

export const UpcomingEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    return (
        <section id="event" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Event & Turnamen" subtitle="Bergabunglah dalam kompetisi seru di ArenaPlay." />

                <div className="grid md:grid-cols-2 gap-8">
                    {UPCOMING_EVENTS.map((event, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="rounded-3xl overflow-hidden shadow-lg border flex flex-col md:flex-row h-full md:h-64 group bg-white border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div className="md:w-2/5 relative overflow-hidden">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {event.category}
                                </div>
                            </div>
                            <div className="p-6 md:w-3/5 flex flex-col justify-center">
                                <div className="mb-4">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${event.status === 'Open Registration' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'}`}>
                                        {event.status}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2 mb-1 text-gray-900 dark:text-white">{event.title}</h3>
                                    <p className="text-sm flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <Calendar size={14} /> {event.date}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <p className="text-green-500 font-bold text-sm mb-4">{event.prizes}</p>
                                    <button
                                        onClick={() => setSelectedEvent(event)}
                                        className="w-full py-2 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition bg-gray-900 text-white dark:bg-gray-700"
                                    >
                                        Info Lengkap
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </section>
    );
};
