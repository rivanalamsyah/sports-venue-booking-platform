import { useState } from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { BLOG_POSTS } from '../../data/mockData';
import { BlogPost } from '../../types';
import { BlogDetailModal } from './BlogDetailModal';

export const BlogSection = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    return (
        <section className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle title="Blog & Tips Olahraga" subtitle="Edukasi dan tips untuk meningkatkan performa permainan Anda." />

                <div className="grid md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, i) => (
                        <div key={i} className="group rounded-2xl overflow-hidden border transition-all hover:shadow-lg bg-white border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                            <div className="h-48 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-green-500 font-bold mb-2">
                                    <Newspaper size={12} /> Tips
                                    <span className="font-normal text-gray-400 dark:text-gray-500">• {post.date}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2 leading-tight group-hover:text-green-500 transition text-gray-900 dark:text-white">{post.title}</h3>
                                <p className="text-sm mb-4 line-clamp-2 text-gray-500 dark:text-gray-400">{post.desc}</p>
                                <button
                                    onClick={() => setSelectedPost(post)}
                                    className="text-sm font-bold text-green-500 flex items-center gap-1 hover:gap-2 transition-all"
                                >
                                    Baca Selengkapnya <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BlogDetailModal post={selectedPost} onClose={() => setSelectedPost(null)} />
        </section>
    );
};
