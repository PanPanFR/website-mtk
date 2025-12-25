import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-lg font-bold text-gray-900">MathBelajar ID</span>
                        <p className="text-sm text-gray-500 mt-1">
                            &copy; {new Date().getFullYear()} Belajar Matematika Indonesia.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/sd" className="text-gray-500 hover:text-blue-600">
                            SD
                        </Link>
                        <Link href="/smp" className="text-gray-500 hover:text-blue-600">
                            SMP
                        </Link>
                        <Link href="/sma" className="text-gray-500 hover:text-blue-600">
                            SMA
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
