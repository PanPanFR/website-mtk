"use client";

import { useState } from "react";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizBlockProps {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
}

export function QuizBlock({ question, options, answer, explanation }: QuizBlockProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isCorrect = selected === answer;

    const handleSubmit = () => {
        if (selected !== null) {
            setIsSubmitted(true);
        }
    };

    const handleReset = () => {
        setSelected(null);
        setIsSubmitted(false);
    };

    return (
        <div className="my-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-start gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
            </div>

            <div className="space-y-3">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => !isSubmitted && setSelected(index)}
                        disabled={isSubmitted}
                        className={cn(
                            "w-full text-left p-4 rounded-lg border transition-all duration-200 flex justify-between items-center",
                            selected === index
                                ? "border-blue-600 bg-blue-50 text-blue-800"
                                : "border-slate-200 hover:bg-slate-50 text-slate-700",
                            isSubmitted && index === answer && "border-emerald-500 bg-emerald-50 text-emerald-800",
                            isSubmitted && selected === index && index !== answer && "border-red-500 bg-red-50 text-red-800",
                            isSubmitted && index !== answer && selected !== index && "opacity-50"
                        )}
                    >
                        <span>{option}</span>
                        {isSubmitted && index === answer && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                        {isSubmitted && selected === index && index !== answer && <XCircle className="w-5 h-5 text-red-600" />}
                    </button>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
                {!isSubmitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={selected === null}
                        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Cek Jawaban
                    </button>
                ) : (
                    <button
                        onClick={handleReset}
                        className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                    >
                        Coba Lagi
                    </button>
                )}
            </div>

            {isSubmitted && (
                <div className={cn(
                    "mt-6 p-4 rounded-lg",
                    isCorrect ? "bg-emerald-50 text-emerald-900" : "bg-blue-50 text-blue-900"
                )}>
                    <p className="font-semibold mb-1">
                        {isCorrect ? "Benar!" : "Penjelasan:"}
                    </p>
                    <p>{explanation}</p>
                </div>
            )}
        </div>
    );
}
