
import { FaGithub, FaEnvelope, FaUserMd, FaRegCalendarCheck, FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r h-[14%] md:h-[10%] w-full from-emerald-900 via-gray-900 to-emerald-800 text-white shadow-2xl flex flex-col justify-center items-center px-2 sm:px-0">
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 gap-2 md:gap-0">
        {/* Brand and tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-emerald-300 text-lg font-bold">
            <FaUserMd className="text-emerald-400 text-2xl" />
            Carnet de Suivi Médical
          </div>
          <span className="text-xs text-gray-300 italic hidden sm:block">Votre santé, notre priorité.</span>
        </div>

        {/* Quick links */}
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <div className="flex gap-3 text-emerald-200">
            <Link href="/" className="flex items-center gap-1 hover:text-emerald-400 transition-colors text-xs sm:text-sm"><FaUserMd />Accueil</Link>
            <Link href="/rendez-vous" className="flex items-center gap-1 hover:text-emerald-400 transition-colors text-xs sm:text-sm"><FaRegCalendarCheck />Rendez-vous</Link>
            <Link href="/dossier" className="flex items-center gap-1 hover:text-emerald-400 transition-colors text-xs sm:text-sm"><FaUserMd />Dossier</Link>
            <Link href="/recommandations" className="flex items-center gap-1 hover:text-emerald-400 transition-colors text-xs sm:text-sm"><FaHeartbeat />Recommandations</Link>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <a href="mailto:younes.moukhlij@gmail.com" aria-label="Contact Email" className="hover:text-emerald-400 transition-colors"><FaEnvelope size={18} /></a>
            <a href="https://github.com/YounesMoukhlij" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 transition-colors"><FaGithub size={18} /></a>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-emerald-800/60 my-1" />
      <div className="w-full flex items-center justify-center pb-1">
        <span className="text-[10px] sm:text-xs text-gray-400 text-center">
          © 2025 Carnet de Suivi Médical. Tous droits réservés. | Propulsé par <span className="text-emerald-400 font-semibold">Younes Moukhlij</span>
        </span>
      </div>
    </footer>
  );
}
