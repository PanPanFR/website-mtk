import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ArrowLeft } from "lucide-react";

// Components to use in MDX
import { QuizBlock } from "@/components/content/quiz-block";

// Sample levels data for static params (optional but good practice)
import levelsData from "@/data/levels.json";

interface PageProps {
    params: Promise<{
        level: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const params: { level: string; slug: string }[] = [];

    // Iterate through levels.json to generate paths
    Object.entries(levelsData).forEach(([levelKey, levelData]) => {
        levelData.topics.forEach(topic => {
            topic.lessons.forEach(lesson => {
                params.push({ level: levelKey, slug: lesson.slug });
            });
        });
    });

    return params;
}

export default async function LessonPage({ params }: PageProps) {
    const { level, slug } = await params;

    const contentDir = path.join(process.cwd(), "content", level);
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const source = fs.readFileSync(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<{ title: string; description?: string }>({
        source,
        components: {
            QuizBlock,
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
            },
        },
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Lesson Header */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link
                        href={`/${level}`}
                        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Kembali ke Materi {level.toUpperCase()}
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {frontmatter.title}
                    </h1>
                    {frontmatter.description && (
                        <p className="mt-2 text-lg text-slate-600">{frontmatter.description}</p>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-slate-900 prose-headings:font-bold
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-strong:text-slate-900 prose-strong:font-bold
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        ">
                    {content}
                </article>
            </div>
        </div>
    );
}
