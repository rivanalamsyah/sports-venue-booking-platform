import { useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export const ScheduleSimulation = () => {
    // Memoize the random data to avoid hydration mismatch and flickering re-renders
    const scheduleData = useMemo(() => {
        return Array.from({ length: 12 }).map((_, i) => ({
            hour: i + 9,
            isBooked: Math.random() > 0.6
        }));
    }, []);

    return (
        <section id="jadwal" className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-5xl mx-auto px-4">
                <SectionTitle title="Cek Ketersediaan" subtitle="Lihat slot yang tersedia secara real-time." />

                <div className="rounded-3xl shadow-2xl border overflow-hidden bg-white border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                    <div className="border-b p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
                            <Calendar size={20} className="text-green-500" /> Jadwal Minggu Ini
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-transparent border border-green-500"></span> Available</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></span> Booked</div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex gap-3 mb-8 overflow-x-auto pb-4 hide-scrollbar">
                            {[0, 1, 2, 3, 4, 5, 6].map(i => {
                                const d = new Date();
                                d.setDate(d.getDate() + i);
                                const isToday = i === 0;
                                return (
                                    <button key={i} className={`flex-shrink-0 w-20 p-3 rounded-2xl border text-center transition-all ${isToday ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white' : 'border-gray-200 text-gray-600 hover:border-green-500 hover:bg-green-50 dark:border-gray-700 dark:text-gray-400 dark:hover:text-green-400'}`}>
                                        <div className="text-xs font-medium uppercase mb-1 opacity-70">{d.toLocaleDateString('id-ID', { weekday: 'short' })}</div>
                                        <div className="text-xl font-bold">{d.getDate()}</div>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                            {scheduleData.map((slot, i) => {
                                const { hour, isBooked } = slot;

                                let cellClass = "";
                                let statusText = "Available";

                                if (isBooked) {
                                    cellClass = "bg-gray-100 text-gray-400 border-transparent cursor-not-allowed dark:bg-gray-800 dark:text-gray-600";
                                    statusText = "Booked";
                                } else {
                                    cellClass = "border-gray-200 hover:border-green-500 hover:bg-green-50 hover:text-green-700 text-gray-700 bg-white dark:border-gray-700 dark:text-gray-300 dark:bg-gray-900 dark:hover:bg-green-900/20 dark:hover:text-green-400";
                                }

                                return (
                                    <div key={i} className={`p-3 rounded-xl border text-center transition-all group relative ${cellClass}`}>
                                        <div className="text-sm font-bold">{hour}:00</div>
                                        <div className="text-[10px] mt-1 font-medium">{statusText}</div>
                                        {!isBooked && (
                                            <div className="absolute inset-0 bg-green-600 text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs">
                                                Pilih
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
