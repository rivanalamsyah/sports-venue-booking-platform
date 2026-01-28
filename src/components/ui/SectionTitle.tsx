import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle: string;
    align?: "left" | "center";
}

export const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => (
    <div className={`mb-12 ${align === "left" ? "text-left" : "text-center"}`}>
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
            {title}
        </motion.h2>
        <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`h-1.5 bg-green-500 rounded-full mt-4 mb-4 ${align === "center" ? "mx-auto" : ""}`}
        />
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
        >
            {subtitle}
        </motion.p>
    </div>
);
