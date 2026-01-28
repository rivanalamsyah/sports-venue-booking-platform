import { Trophy, Instagram, MessageCircle, Mail, ArrowRight, MapPin, Smartphone, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../data/mockData';

export const Footer = () => {
    return (
        <footer id="kontak" className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
                                <Trophy size={16} />
                            </div>
                            <span className="font-bold text-xl tracking-tighter">Arena<span className="text-green-500">Play</span>.</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            Destinasi olahraga premium dengan fasilitas standar internasional. Kami berdedikasi untuk meningkatkan kualitas gaya hidup sehat komunitas melalui infrastruktur olahraga terbaik.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition text-gray-400 hover:text-white"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition text-gray-400 hover:text-white"><MessageCircle size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition text-gray-400 hover:text-white"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Menu</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#home" className="hover:text-green-400 transition flex items-center gap-2"><ArrowRight size={14} /> Beranda</a></li>
                            <li><a href="#lapangan" className="hover:text-green-400 transition flex items-center gap-2"><ArrowRight size={14} /> Lapangan</a></li>
                            <li><a href="#jadwal" className="hover:text-green-400 transition flex items-center gap-2"><ArrowRight size={14} /> Cek Jadwal</a></li>
                            <li><a href="#member" className="hover:text-green-400 transition flex items-center gap-2"><ArrowRight size={14} /> Member</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Info Kontak</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex gap-3 items-start">
                                <MapPin className="shrink-0 text-green-500 mt-1" size={18} />
                                <span>{SITE_CONFIG.address}</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Smartphone className="shrink-0 text-green-500" size={18} />
                                <span>{SITE_CONFIG.whatsapp}</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Clock className="shrink-0 text-green-500" size={18} />
                                <span>07:00 - 23:00 WIB</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} ArenaPlay Sports Center. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
