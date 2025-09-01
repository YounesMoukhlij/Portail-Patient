import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-300 animate-gradient-slow">
      <div className="flex flex-col items-center justify-center bg-white/80 rounded-2xl shadow-lg p-8">
        <FaExclamationTriangle className="text-emerald-500 text-6xl mb-4" />
        <h1 className="text-4xl font-bold text-emerald-800 mb-2">404</h1>
        <p className="text-lg text-emerald-700 mb-4">Oups ! Cette page n'existe pas.</p>
        <Link href="/" className="px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
