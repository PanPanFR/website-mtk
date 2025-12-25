"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <MotionWrapper className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Pintar Matematika <br />
                        <span className="text-blue-600">Tanpa Pusing</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                        Akses ribuan materi dan soal latihan matematika untuk jenjang SD, SMP, dan SMA secara gratis.
                        Belajar mandiri jadi lebih mudah dan menyenangkan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#mulai">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Mulai Belajar Sekarang
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </motion.div>
                        </Link>
                    </div>
                </MotionWrapper>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 -z-10 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </div>
            <div className="absolute bottom-0 right-0 -z-10 transform translate-x-1/2 translate-y-1/2">
                <div className="w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
            </div>
        </section>
    );
}
