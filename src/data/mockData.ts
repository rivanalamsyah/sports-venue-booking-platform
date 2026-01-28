import {
    Trophy, Goal, Dribbble, CircleDot, Wind, Footprints
} from 'lucide-react';
import { Category, Venue, Partner, Event, BlogPost, PricingPackage, Testimonial, FAQ, SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
    name: "ArenaPlay",
    whatsapp: "6281234567890",
    address: "Jl. Sport Raya No. 123, Jakarta Pusat",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.336686737526!2d106.812345!3d-6.216789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMDAuNCJTIDEwNsKwNDgnNDQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
};

export const CATEGORIES: Category[] = [
    { id: 'all', name: 'Semua', icon: Trophy, color: 'text-gray-600 dark:text-gray-300', bg: 'bg-gray-100 dark:bg-gray-800', border: 'border-transparent' },
    { id: 'futsal', name: 'Futsal', icon: Goal, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20', border: 'hover:border-green-200' },
    { id: 'basket', name: 'Basket', icon: Dribbble, color: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'hover:border-orange-200' },
    { id: 'padel', name: 'Padel', icon: CircleDot, color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'hover:border-blue-200' },
    { id: 'badminton', name: 'Badminton', icon: Wind, color: 'text-purple-500 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'hover:border-purple-200' },
    { id: 'minisoccer', name: 'Mini Soccer', icon: Footprints, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'hover:border-emerald-200' },
];

export const VENUES: Venue[] = [
    {
        id: 1,
        name: "Arena Futsal 1 - Premium",
        category: "futsal",
        type: "Indoor",
        specs: "25m x 15m | Sintetis Grade A",
        price: 180000,
        rating: 4.8,
        reviews: 127,
        image: "/images/venues/futsal_premium.png",
        gallery: [
            "/images/venues/futsal_premium.png"
        ],
        facilities: ["AC", "Loker", "WiFi", "Shower"],
        desc: "Lapangan futsal standar kompetisi nasional. Menggunakan rumput sintetis monofilamen yang lembut dan aman untuk diving. Pencahayaan 500 Lux standar broadcast."
    },
    {
        id: 2,
        name: "Basket Court A - Pro",
        category: "basket",
        type: "Indoor",
        specs: "Full Court | Parquet Oak",
        price: 200000,
        rating: 4.9,
        reviews: 85,
        image: "/images/venues/basket_pro.png",
        gallery: [
            "/images/venues/basket_pro.png"
        ],
        facilities: ["Scoreboard Digital", "Tribun", "Ruang Ganti VIP"],
        desc: "Lantai kayu oak solid dengan shock absorption system untuk melindungi lutut pemain. Ring hidrolik standar FIBA yang bisa diatur ketinggiannya."
    },
    {
        id: 3,
        name: "Padel Court 1",
        category: "padel",
        type: "Semi-Outdoor",
        specs: "Glass Court | Artificial Turf",
        price: 250000,
        rating: 5.0,
        reviews: 42,
        image: "/images/venues/padel_court.png",
        gallery: ["/images/venues/padel_court.png"],
        facilities: ["Sewa Raket", "Ball Boy", "Cafe Access"],
        desc: "Lapangan padel panoramic dengan dinding kaca tempered 12mm. Rumput biru khusus WPT (World Padel Tour) untuk pantulan bola yang akurat."
    },
    {
        id: 4,
        name: "Badminton Hall A",
        category: "badminton",
        type: "Indoor",
        specs: "Karpet Vinyl | BWF Approved",
        price: 120000,
        rating: 4.7,
        reviews: 210,
        image: "/images/venues/badminton_hall.png",
        gallery: ["/images/venues/badminton_hall.png"],
        facilities: ["Net Yonex", "Lampu Anti-glare", "Kipas Angin"],
        desc: "Menggunakan karpet vinyl 4.5mm pattern sand yang kesat. Jarak antar lapangan luas (2 meter) sehingga aman untuk permainan ganda yang agresif."
    },
    {
        id: 5,
        name: "Mini Soccer Arena",
        category: "minisoccer",
        type: "Outdoor",
        specs: "40m x 20m | Sintetis FIFA",
        price: 350000,
        rating: 4.9,
        reviews: 94,
        image: "/images/venues/minisoccer_outdoor.png",
        gallery: ["/images/venues/minisoccer_outdoor.png"],
        facilities: ["Bench Pemain", "Lampu LED", "Rompi & Bola"],
        desc: "Rasakan sensasi main bola di lapangan mini soccer terbaik. Drainase vertikal menjamin lapangan tidak becek meski hujan deras."
    },
    {
        id: 6,
        name: "Arena Futsal 2 - Standard",
        category: "futsal",
        type: "Indoor",
        specs: "25m x 15m | Interlock",
        price: 150000,
        rating: 4.6,
        reviews: 88,
        image: "/images/venues/futsal_standard.png",
        gallery: ["/images/venues/futsal_standard.png"],
        facilities: ["Kipas Angin", "Toilet Bersih"],
        desc: "Pilihan ekonomis dengan lantai interlock polypropylene yang rata dan tidak licin. Cocok untuk latihan rutin akademi atau sparing santai."
    }
];

export const PARTNERS: Partner[] = [
    { name: "Persija Academy", logo: "⚽" },
    { name: "Bank BCA Club", logo: "🏦" },
    { name: "Adidas Runners", logo: "👟" },
    { name: "GoJek Sports", logo: "🟢" },
    { name: "Telkomsel FC", logo: "🔴" },
    { name: "UI Basketball", logo: "🏀" },
    { name: "Pertamina Runner", logo: "⛽" },
    { name: "Tokopedia FC", logo: "🛍️" },
];

export const UPCOMING_EVENTS: Event[] = [
    {
        title: "ArenaPlay Futsal Cup 2024",
        date: "15-20 Agustus 2024",
        category: "Futsal",
        prizes: "Total Hadiah Rp 10.000.000",
        image: "/images/events/futsal_cup.png",
        status: "Open Registration",
        description: "Turnamen futsal terbesar tahun ini! ArenaPlay Futsal Cup 2024 menghadirkan kompetisi sengit antar tim terbaik se-Jabodetabek. \n\n**Format Turnamen:**\n- Sistem Gugur\n- Kategori Umum (Non-Pro)\n- Durasi 2x15 Menit Kotor\n\n**Fasilitas Peserta:**\n- Air Mineral per Match\n- Dokumentasi Foto & Video\n- Tim Medis Standby\n\nSegera daftarkan tim kebanggaanmu sebelum slot penuh!"
    },
    {
        title: "3x3 Basket Battle",
        date: "2 September 2024",
        category: "Basket",
        prizes: "Total Hadiah Rp 5.000.000",
        image: "/images/events/basket_battle.png",
        status: "Coming Soon",
        description: "Show your skills di ArenaPlay 3x3 Battle! Kompetisi basket jalanan dengan atmosfer urban yang seru.\n\n**Kategori:**\n- U-18 Putra\n- U-18 Putri\n- Umum Putra\n\nNantikan info pendaftarannya!"
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        title: "Tips Memilih Sepatu Futsal",
        desc: "Jangan salah pilih! Ketahui perbedaan sepatu futsal untuk lapangan vinyl dan sintetis.",
        date: "24 Juli 2024",
        image: "/images/blog/shoes.png",
        content: "Memilih sepatu futsal yang tepat sangat krusial untuk performa dan keselamatan kaki Anda. Ada dua jenis outsole utama yang perlu diketahui:\n\n**1. IC (Indoor Court) - Datar**\nCocok untuk lapangan lantai vinyl atau semen halus. Sol karet datar memberikan daya cengkeram maksimal di permukaan rata.\n\n**2. TF (Turf) - Gerigi Halus**\nDisarankan untuk lapangan rumput sintetis. Gerigi-gerigi kecil membantu traksi agar tidak mudah terpeleset di antara serat rumput buatan.\n\nSelain outsole, perhatikan juga bahan upper sepatu. Bahan kulit sintetis biasanya lebih ringan, sementara kulit asli memberikan sentuhan bola yang lebih natural."
    },
    {
        title: "Manfaat Padel untuk Kardio",
        desc: "Mengapa olahraga yang sedang tren ini sangat efektif untuk membakar kalori Anda.",
        date: "20 Juli 2024",
        image: "/images/blog/padel.png",
        content: "Padel Tennis bukan sekadar tren sesaat. Olahraga ini menggabungkan elemen tenis dan squash yang membuatnya menjadi latihan kardio intensitas tinggi yang menyenangkan.\n\nDalam satu sesi permainan 60 menit, pemain padel bisa membakar hingga 600-800 kalori! Pergerakan yang eksplosif, lari jarak pendek, dan perubahan arah yang cepat memaksa jantung bekerja lebih keras, meningkatkan stamina secara signifikan.\n\nSelain fisik, padel juga melatih koordinasi mata-tangan dan strategi tim, menjadikannya olahraga yang komplit untuk tubuh dan pikiran."
    },
    {
        title: "Cara Menghindari Cedera Lutut",
        desc: "Panduan pemanasan yang benar sebelum bermain basket atau futsal.",
        date: "15 Juli 2024",
        image: "/images/blog/warmup.png",
        content: "Cedera lutut seperti ACL adalah mimpi buruk bagi setiap atlet. Pencegahan terbaik adalah dengan pemanasan yang benar.\n\n**Lakukan Rutinitas Ini Sebelum Main:**\n1. Jogging ringan 5-10 menit untuk menaikkan suhu tubuh.\n2. Dinamis stretching: Leg swings, lunges, high knees.\n3. Aktivasi otot gluteus dan hamstring.\n4. Latihan pendaratan: Lompat kecil dan mendarat dengan lutut menekuk, bukan lurus terkunci.\n\nJangan pernah skip pemanasan, karena 15 menit persiapan bisa menyelamatkanmu dari 6 bulan pemulihan cedera!"
    }
];

export const PRICING_PACKAGES: PricingPackage[] = [
    {
        name: "Regular",
        price: "4.5jt",
        period: "/bulan",
        desc: "Cocok untuk tim komunitas rutin",
        features: ["30 Jam / Bulan", "Semua Lapangan (Non-Premium)", "Free 1x Maintenance/Bulan", "Booking via Web H-7"],
        highlight: false
    },
    {
        name: "Pro Member",
        price: "7.5jt",
        period: "/bulan",
        desc: "Solusi lengkap untuk akademi",
        features: ["Unlimited Hours (Off-peak)", "Priority Booking H-14", "Free Locker & Mineral Water", "Diskon Event 10%"],
        highlight: true
    },
    {
        name: "Corporate",
        price: "Custom",
        period: "",
        desc: "Untuk kegiatan wellness kantor",
        features: ["10-100 Karyawan", "Dedicated Account Manager", "Monthly Usage Report", "Invoicing Bulanan"],
        highlight: false
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Rizky Ramadhan",
        role: "Kapten Tim Futsal UI",
        text: "Lapangan futsal terbaik di Jakarta Pusat. Rumputnya empuk banget, lutut nggak sakit abis main 2 jam. Fasilitas mandinya juga bersih parah!",
        avatar: "/images/avatars/rizky.png"
    },
    {
        name: "Sarah Wijaya",
        role: "Badminton Enthusiast",
        text: "Suka banget main badminton di sini karena lightingnya pas, nggak silau kalau lagi smash. Parkiran luas jadi nggak pusing kalau bawa mobil.",
        avatar: "/images/avatars/sarah.png"
    },
    {
        name: "Budi Santoso",
        role: "Event Organizer",
        text: "Pernah sewa buat turnamen kantor, servicenya juara. Admin responsif, alat-alat sound system disediakan, dan cateringnya enak.",
        avatar: "/images/avatars/budi.png"
    }
];

export const FAQS: FAQ[] = [
    { q: "Apakah harus DP saat booking?", a: "Ya, untuk booking di atas 2 jam atau booking weekend wajib DP 50% untuk mengamankan slot." },
    { q: "Bisa reschedule jadwal?", a: "Reschedule bisa dilakukan maksimal H-1 sebelum jadwal main, selama slot pengganti tersedia." },
    { q: "Apakah ada penyewaan sepatu?", a: "Saat ini kami hanya menyewakan raket, bola, dan rompi. Sepatu harap membawa sendiri." },
    { q: "Apakah fasilitas parkir gratis?", a: "Parkir gratis untuk motor. Untuk mobil dikenakan tarif flat Rp 5.000 sepuasnya." }
];
