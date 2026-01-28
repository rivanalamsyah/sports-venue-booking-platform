import { useState } from 'react';
import { ChevronDown, Star, X, Check, CalendarCheck2, Smartphone } from 'lucide-react';
import { Venue } from '../../types';
import { SITE_CONFIG } from '../../data/mockData';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';

interface VenueDetailModalProps {
    venue: Venue | null;
    onClose: () => void;
}

export const VenueDetailModal = ({ venue, onClose }: VenueDetailModalProps) => {
    const [bookingForm, setBookingForm] = useState({ date: '', time: '', name: '' });

    if (!venue) return null;

    const handleWhatsAppBooking = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `Halo Admin ${SITE_CONFIG.name}, saya ingin booking lapangan:

🏟️ *${venue.name}*
📅 Tanggal: ${bookingForm.date}
⏰ Jam: ${bookingForm.time}
👤 Atas Nama: ${bookingForm.name}

Mohon dicek ketersediaannya. Terima kasih!`;

        window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <Modal isOpen={!!venue} onClose={onClose}>
            <div className="flex flex-col md:flex-row h-full">
                {/* Left: Image & Gallery */}
                <div className="w-full md:w-5/12 flex flex-col bg-black md:h-auto shrink-0">
                    <div className="relative h-48 md:h-1/2 shrink-0">
                        <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <button onClick={onClose} className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full md:hidden backdrop-blur"><ChevronDown size={20} /></button>
                    </div>
                    <div className="p-4 flex-1 bg-gray-950 hidden md:block">
                        <h4 className="text-gray-400 text-xs font-bold uppercase mb-3">Gallery</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {venue.gallery.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-green-500 transition opacity-80 hover:opacity-100">
                                    <img src={img} className="w-full h-full object-cover" alt="Gallery" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Info & Form */}
                <div className="w-full md:w-7/12 flex flex-col min-h-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex-1 md:h-full">
                    <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar pb-40">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <Badge color="green">{venue.type}</Badge>
                                <h2 className="text-3xl font-extrabold mt-2 text-gray-900 dark:text-white">{venue.name}</h2>
                            </div>
                            <button onClick={onClose} className="hidden md:block p-2 rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400"><X size={24} /></button>
                        </div>

                        <div className="flex items-center gap-4 mb-6 text-sm border-b pb-6 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1"><Star size={16} className="text-yellow-400 fill-yellow-400" /> <b>{venue.rating}</b> ({venue.reviews} reviews)</div>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <div>{venue.category}</div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-300">Fasilitas Unggulan</h3>
                                <div className="flex flex-wrap gap-2">
                                    {venue.facilities.map((fac, i) => (
                                        <span key={i} className="px-3 py-1.5 border rounded-lg text-sm font-medium flex items-center gap-2 bg-gray-50 border-gray-200 text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
                                            <Check size={12} className="text-green-500" /> {fac}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold mb-2 text-sm uppercase tracking-wide text-gray-900 dark:text-gray-300">Tentang Arena</h3>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{venue.desc}</p>
                            </div>

                            <div className="p-5 rounded-2xl border bg-green-50 border-green-100 dark:bg-green-900/10 dark:border-green-800 mb-5">
                                <h3 className="font-bold mb-4 flex items-center gap-2 text-green-800 dark:text-green-400"><CalendarCheck2 size={18} /> Booking Form</h3>
                                <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">Tanggal</label>
                                            <input
                                                type="date"
                                                required
                                                className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white border-green-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">Jam</label>
                                            <select
                                                required
                                                className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white border-green-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                                onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                                            >
                                                <option value="">Pilih Slot</option>
                                                <option value="08:00">08:00 - 09:00</option>
                                                <option value="09:00">09:00 - 10:00</option>
                                                <option value="19:00">19:00 - 20:00</option>
                                                <option value="20:00">20:00 - 21:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold mb-1 text-gray-500 dark:text-gray-400">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            placeholder="Cth: Budi Santoso"
                                            required
                                            className="w-full px-3 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none bg-white border-green-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                                        />
                                    </div>
                                    <button type="submit" className="w-full bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition shadow-lg flex items-center justify-center gap-2">
                                        <Smartphone size={18} /> Lanjut ke WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Sticky Price Footer in Modal */}
                    <div className="p-6 border-t flex justify-between items-center border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                        <div>
                            <p className="text-xs text-gray-500">Harga Sewa</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">Rp {venue.price.toLocaleString()}</p>
                        </div>
                        <div className="text-right text-xs text-gray-400">
                            <p>Per Jam</p>
                            <p>Termasuk Pajak</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
