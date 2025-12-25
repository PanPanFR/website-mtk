import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Book, ChevronRight } from "lucide-react";
import levelsData from "@/data/levels.json";

interface PageProps {
    params: Promise<{
        level: string;
    }>;
}

export async function generateStaticParams() {
    return [
        { level: "sd" },
        { level: "smp" },
        { level: "sma" },
    ];
}

export default async function LevelPage({ params }: PageProps) {
    const { level } = await params;
    const data = levelsData[level as keyof typeof levelsData];

    if (!data) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                </Link>

                <header className="mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{data.title}</h1>
                    <p className="text-lg text-slate-600">{data.description}</p>
                </header>

                <div className="space-y-8">
                    {data.topics.map((topic) => (
                        <div key={topic.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                                <h2 className="text-xl font-bold text-slate-800 flex items-center">
                                    <Book className="w-5 h-5 mr-2 text-blue-600" />
                                    {topic.title}
                                </h2>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {topic.lessons.map((lesson) => (
                                    <Link
                                        key={lesson.slug}
                                        href={`/${level}/${lesson.slug}`}
                                        className="flex items-center justify-between px-6 py-4 hover:bg-blue-50 transition-colors group"
                                    >
                                        <span className="text-slate-700 font-medium group-hover:text-blue-700">
                                            {lesson.title}
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
