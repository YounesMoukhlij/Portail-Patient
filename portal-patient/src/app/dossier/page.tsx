'use client';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import dossier from "../../data/dossier.json";

import { FaNotesMedical, FaAllergies, FaPills } from "react-icons/fa";

function Section({ title, items, icon, badgeColor = "bg-emerald-100 text-emerald-700" }: { title: string; items: string[]; icon: React.ReactNode; badgeColor?: string }) {
  return (
    <section className="flex flex-col items-center justify-start w-full md:h-[90%] animate-fade-in">
  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full h-full bg-gradient-to-br from-emerald-50/90 via-white/90 to-teal-100/80 dark:from-emerald-900/80 dark:via-gray-900/80 dark:to-emerald-800/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-emerald-100 dark:border-emerald-900/60 hover:border-emerald-400/80 hover:shadow-emerald-200/40 transition-all flex flex-col items-center pt-6 sm:pt-10 pb-2 sm:pb-4 px-1 sm:px-2 group">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full shadow-lg border-4 border-white dark:border-gray-900 z-10">
          <span className="text-emerald-500 text-2xl">{icon}</span>
        </div>
        <h2 className="mt-6 mb-2 text-lg font-bold text-emerald-800 dark:text-emerald-200 text-center group-hover:text-emerald-700 transition-colors flex items-center justify-center gap-2">
          {title}
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}>{items.length} {items.length === 1 ? "élément" : "éléments"}</span>
        </h2>
        {items.length === 0 ? (
          <div className="text-gray-500">Aucun élément</div>
        ) : (
          <ul className="flex flex-col gap-1 sm:gap-2 w-full text-xs sm:text-sm">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-100 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md rounded-lg px-1 sm:px-2 py-1 shadow-sm transition-transform duration-300 hover:scale-[1.03] flex items-center justify-between">
                <span>{item}</span>
                <span className="ml-2 text-xs text-gray-400">{new Date().toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default function Dossier()
{

  return (
    <div className="h-full flex bg-[url('/bg1.jpg')] bg-cover bg-no-repeat bg-center flex-col bg-gradient-to-br from-blue-100 via-white to-blue-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 animate-gradient-slow relative overflow-x-hidden">

  <main className="flex-1 bg-black/30 w-full  h-[80%] flex flex-col items-center justify-center">
    <h1 className="text-2xl md:pt-5 sm:text-3xl md:text-4xl font-extrabold  text-white  drop-shadow-lg animate-fade-in text-center w-full h-[60px] flex items-center justify-center">
      Mon dossier médical
    </h1>
    <div className="w-full h-full flex items-center justify-center grid px-2 sm:px-5 py-5 grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 min-h-0">
      <Section title="Antécédents médicaux" items={dossier.antecedents} icon={<FaNotesMedical />} badgeColor="bg-emerald-100 text-emerald-700" />
      <Section title="Allergies" items={dossier.allergies} icon={<FaAllergies />} badgeColor="bg-emerald-100 text-emerald-700" />
      <Section title="Traitements en cours" items={dossier.traitements} icon={<FaPills />} badgeColor="bg-emerald-100 text-emerald-700" />
    </div>

      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fade-in 0.7s both; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce { animation: bounce 1.2s infinite; }
      `}</style>
    </div>
  );
}
