import { LucideIcon } from 'lucide-react';

export interface Category {
    id: string;
    name: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
}

export interface Venue {
    id: number;
    name: string;
    category: string;
    type: string;
    specs: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    gallery: string[];
    facilities: string[];
    desc: string;
}

export interface Partner {
    name: string;
    logo: string;
}

export interface Event {
    title: string;
    date: string;
    category: string;
    prizes: string;
    image: string;
    status: 'Open Registration' | 'Coming Soon' | 'Closed';
    description?: string;
}

export interface BlogPost {
    title: string;
    desc: string;
    date: string;
    image: string;
    content?: string;
}

export interface PricingPackage {
    name: string;
    price: string;
    period: string;
    desc: string;
    features: string[];
    highlight: boolean;
}

export interface Testimonial {
    name: string;
    role: string;
    text: string;
    avatar: string;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface SiteConfig {
    name: string;
    whatsapp: string;
    address: string;
    googleMapsUrl: string;
}
