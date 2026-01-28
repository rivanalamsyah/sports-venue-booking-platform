import { useState } from 'react';
import { Trophy, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['Home', 'Lapangan', 'Event', 'Member'];

    return (
        <nav className={`fixed w-full z-40 backdrop-blur-lg border-b transition-all duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform duration-300">
                            <Trophy size={20} />
                        </div>
                        <span className={`font-extrabold text-2xl tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Arena<span className="text-green-500">Play</span>.</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center font-medium">
                        {navLinks.map((item, idx) => {
                            const href = `#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`;
                            return (
                                <a key={idx} href={href} className={`hover:text-green-500 transition relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {item}
                                    <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
                                </a>
                            )
                        })}

                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={() => document.getElementById('lapangan')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-6 py-2.5 rounded-full font-bold hover:bg-green-600 transition shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5 ${isDarkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                        >
                            Booking Sekarang
                        </button>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className={`p-2 ${isDarkMode ? 'text-white' : 'text-gray-600'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={`md:hidden border-t overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block font-medium text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}
                                >
                                    {item}
                                </a>
                            ))}

                            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className={`block font-medium text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Kontak</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
