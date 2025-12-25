"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LevelCardProps {
    title: string;
    description: string;
    href: string;
    icon: ReactNode; // Changed from LucideIcon to ReactNode
    color: "blue" | "emerald" | "amber";
}

export function LevelCard({ title, description, href, icon, color }: LevelCardProps) {
    const colorStyles = {
        blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
        emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
        amber: "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    };

    return (
        <Link href={href} className="group block h-full">
            <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all"
            >
                <div className={clsx("w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300", colorStyles[color])}>
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    {description}
                </p>
                <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
                    Lihat Materi
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </motion.div>
        </Link>
    );
}
