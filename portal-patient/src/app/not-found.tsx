import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 animate-gradient-slow p-2 sm:p-4">
      <div className="flex flex-col items-center justify-center bg-white/80 rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <FaExclamationTriangle className="text-emerald-500 text-5xl sm:text-6xl mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-2">404</h1>
  <p className="text-base sm:text-lg text-emerald-700 mb-4 text-center">Oups ! Cette page n&apos;existe pas.</p>
  <Link href="/" className="px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors text-sm sm:text-base">Retour à l&apos;accueil</Link>
      </div>
    </div>
  );
}
