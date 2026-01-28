import { useRef } from 'react';
import { X, Calendar, Trophy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Event } from '../../types';
import { Modal } from '../ui/Modal';
import { SITE_CONFIG } from '../../data/mockData';

interface EventDetailModalProps {
    event: Event | null;
    onClose: () => void;
}

export const EventDetailModal = ({ event, onClose }: EventDetailModalProps) => {
    const modalContentRef = useRef<HTMLDivElement>(null);

    if (!event) return null;

    const handleWhatsAppReg = () => {
        const message = `Halo Admin ${SITE_CONFIG.name}, saya ingin mendaftar untuk event:
        
🏆 *${event.title}*
Kategori: ${event.category}

Mohon info formulir pendaftarannya. Terima kasih!`;

        window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <Modal isOpen={!!event} onClose={onClose}>
            <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Image Section - Fixed on Desktop */}
                <div className="w-full md:w-5/12 relative h-48 md:h-auto bg-black">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${event.status === 'Open Registration' ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'
                            }`}>
                            {event.status}
                        </span>
                        <h2 className="text-2xl font-bold text-white leading-tight">{event.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition md:hidden z-10"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content Section - Scrollable */}
                <div className="w-full md:w-7/12 bg-white dark:bg-gray-900 flex flex-col h-full overflow-hidden">
                    <div className="p-6 overflow-y-auto custom-scrollbar flex-1" ref={modalContentRef}>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-sm font-bold text-green-500 mb-1 flex items-center gap-2">
                                    <Trophy size={16} /> Tournament Detail
                                </h3>
                                <div className="text-gray-500 text-sm flex items-center gap-2">
                                    <Calendar size={14} /> {event.date}
                                </div>
                            </div>
                            <button onClick={onClose} className="hidden md:block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition text-gray-400">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="prose prose-sm dark:prose-invert max-w-none mb-8">
                            <ReactMarkdown>{event.description || 'Deskripsi belum tersedia.'}</ReactMarkdown>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 mb-6">
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Prize Pool</div>
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">{event.prizes}</div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 mt-auto z-10">
                        <button
                            onClick={handleWhatsAppReg}
                            className="w-full py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg shadow-green-500/20 transition transform active:scale-95 flex items-center justify-center gap-2"
                        >
                            Daftar Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
