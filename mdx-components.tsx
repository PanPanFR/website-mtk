import type { MDXComponents } from "mdx/types";
import { QuizBlock } from "@/components/content/quiz-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        QuizBlock, // Make QuizBlock available in all MDX files
        ...components,
    };
}
