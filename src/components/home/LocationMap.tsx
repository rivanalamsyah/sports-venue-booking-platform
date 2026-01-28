import { ExternalLink } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SITE_CONFIG } from '../../data/mockData';

export const LocationMap = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Lokasi & Fasilitas Sekitar" subtitle="Mudah dijangkau dari berbagai sudut kota." />
                <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative border-4 border-white dark:border-gray-800">
                    <iframe
                        src={SITE_CONFIG.googleMapsUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition duration-700"
                    ></iframe>
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                        <h4 className="font-bold text-sm mb-1 text-gray-900 dark:text-white">ArenaPlay Sports Center</h4>
                        <p className="text-xs mb-2 text-gray-600 dark:text-gray-400">{SITE_CONFIG.address}</p>
                        <a href="https://maps.google.com" target="_blank" className="text-xs font-bold text-green-600 flex items-center gap-1">Buka di Google Maps <ExternalLink size={10} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};
