import { Hero } from "@/components/home/hero";
import { LevelCard } from "@/components/home/level-card";
import { BookOpen, Calculator, GraduationCap } from "lucide-react";
import { MotionWrapper } from "@/components/ui/motion-wrapper";

export default function Home() {
  const levels = [
    {
      title: "Sekolah Dasar (SD)",
      description: "Materi dasar matematika yang menyenangkan untuk siswa kelas 1-6. Bangun pondasi kuat sejak dini.",
      href: "/sd",
      icon: <BookOpen className="w-7 h-7" />,
      color: "blue" as const,
    },
    {
      title: "Sekolah Menengah Pertama (SMP)",
      description: "Pendalaman konsep aljabar, geometri, dan statistika untuk siswa kelas 7-9. Persiapan ujian sekolah.",
      href: "/smp",
      icon: <Calculator className="w-7 h-7" />,
      color: "emerald" as const,
    },
    {
      title: "Sekolah Menengah Atas (SMA)",
      description: "Materi tingkat lanjut termasuk kalkulus, trigonometri, dan matriks untuk kelas 10-12. Siap masuk kuliah.",
      href: "/sma",
      icon: <GraduationCap className="w-7 h-7" />,
      color: "amber" as const,
    },
  ];

  return (
    <div className="bg-slate-50">
      <Hero />

      <section id="mulai" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper delay={0.2} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilih Jenjang Sekolahmu</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Materi disusun sesuai Kurikulum Merdeka, lengkap dengan contoh soal dan pembahasan.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <MotionWrapper key={level.title} delay={0.1 * index + 0.3}>
              <LevelCard {...level} />
            </MotionWrapper>
          ))}
        </div>
      </section>

      <section className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper delay={0.4} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kenapa Belajar di Sini?</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <MotionWrapper delay={0.5} className="p-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Materi Lengkap</h3>
              <p className="text-slate-600">Rangkuman materi yang mudah dipahami, disusun per bab sesuai kurikulum sekolah.</p>
            </MotionWrapper>

            <MotionWrapper delay={0.6} className="p-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Latihan Soal</h3>
              <p className="text-slate-600">Uji pemahamanmu dengan kuis interaktif dan dapatkan pembahasan langsung.</p>
            </MotionWrapper>

            <MotionWrapper delay={0.7} className="p-6">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Akses Gratis</h3>
              <p className="text-slate-600">Belajar kapan saja dan di mana saja tanpa biaya berlangganan. 100% Gratis.</p>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
