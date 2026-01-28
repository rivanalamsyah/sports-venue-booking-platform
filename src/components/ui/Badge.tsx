import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

export const Badge = ({ children, color = "green", className }: BadgeProps) => {
    // Using simplified template literals for dynamic colors is tricky with Tailwind compiler.
    // It's better to use specific classes or map them, but for refactoring legacy code I'll try to keep it simple
    // while allowing overrides.

    // A safer approach for Tailwind is usually full class names.
    // However, mimicking original behavior:

    return (
        <span className={
            // Note: In a real robust system we'd use cva or specific color maps.
            // For now, assuming the colors are standard tailwind colors.
            twMerge(
                `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`,
                `bg-${color}-100 text-${color}-800 dark:bg-${color}-900/30 dark:text-${color}-300`,
                className
            )
        }>
            {children}
        </span>
    );
};
