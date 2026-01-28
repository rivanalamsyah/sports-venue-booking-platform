import { useRef } from 'react';
import { X, Calendar, Share2, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BlogPost } from '../../types';
import { Modal } from '../ui/Modal';

interface BlogDetailModalProps {
    post: BlogPost | null;
    onClose: () => void;
}

export const BlogDetailModal = ({ post, onClose }: BlogDetailModalProps) => {
    if (!post) return null;

    return (
        <Modal isOpen={!!post} onClose={onClose}>
            <div className="flex flex-col h-full max-h-[90vh] bg-white dark:bg-gray-900">
                {/* Header Image */}
                <div className="relative h-48 md:h-64 shrink-0">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <span className="inline-flex items-center gap-1 bg-green-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                            <Tag size={12} /> Tips & Trik
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight shadow-black drop-shadow-md">{post.title}</h2>
                        <div className="flex items-center gap-4 text-gray-300 text-sm mt-2">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                            <span>•</span>
                            <span>By Admin</span>
                        </div>
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                        <ReactMarkdown>{post.content || post.desc}</ReactMarkdown>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                        <p className="text-sm text-gray-400 italic">Semoga tips ini bermanfaat untuk permainan Anda!</p>
                        <button className="text-gray-500 hover:text-green-500 transition flex items-center gap-2 text-sm font-bold">
                            <Share2 size={16} /> Share Article
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
