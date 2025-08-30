"use client";




import { FaCalendarAlt, FaCheckCircle, FaHistory } from "react-icons/fa";
import Card from "../../components/Card";
import rendezvous from "../../data/rendezvous.json";

type RendezVous = {
  titre?: string;
  type?: string;
  date?: string;
  statut?: string;
};

function Section({ title, items, icon }: { title: string; items: RendezVous[]; icon: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-start w-full md:h-[90%] animate-fade-in">
      <Card className="relative pt-6 sm:pt-10 pb-2 sm:pb-4 px-1 sm:px-2 group">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full shadow-lg border-4 border-white z-10">
          <span className="text-emerald-500 text-2xl">{icon}</span>
        </div>
        <h2 className="mt-6 mb-2 text-lg font-bold text-emerald-800 text-center group-hover:text-emerald-700 transition-colors flex items-center justify-center gap-2">
          {title}
          <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">{items.length} {items.length === 1 ? "rendez-vous" : "rendez-vous"}</span>
        </h2>
        {items.length === 0 ? (
          <div className="text-gray-500">Aucun rendez-vous</div>
        ) : (
          <ul className="flex flex-col gap-1 sm:gap-2 w-full text-xs sm:text-sm">
            {items.map((rdv, i) => (
              <li key={i} className="text-gray-700 bg-white/60 backdrop-blur-md rounded-lg px-1 sm:px-2 py-1 shadow-sm transition-transform duration-300 hover:scale-[1.03] flex flex-col sm:flex-row items-center justify-between">
                <span className="font-semibold">{rdv.titre || rdv.type || 'Rendez-vous'}</span>
                <span className="ml-2 text-xs text-gray-400">{rdv.date ? new Date().toLocaleDateString() : ''}</span>
                {rdv.statut && <span className="ml-2 text-xs text-emerald-600 font-bold">{rdv.statut}</span>}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
}

export default function RendezVousPage() {
  const tous = rendezvous;
  const aVenir = rendezvous.filter(r => r.statut === "à venir");
  const passes = rendezvous.filter(r => r.statut === "passé");
  return (
  <div className="h-full flex bg-[url('/bg3.jpg')] bg-cover bg-no-repeat bg-center flex-col bg-gradient-to-br from-blue-100 via-white to-blue-300 animate-gradient-slow relative overflow-x-hidden">
  <main className="flex-13  bg-black/30 text-emerald-900 bg-black/30 w-full h-[80%] flex flex-col items-center justify-center">
        <h1 className="text-2xl md:pt-5 sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg animate-fade-in text-center w-full h-[60px] flex items-center justify-center">
          Mes rendez-vous
        </h1>
        <div className="w-full h-full flex items-center justify-center grid px-2 sm:px-5 py-5 grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 min-h-0">
          <Section title="Tous les rendez-vous" items={tous} icon={<FaCalendarAlt />} />
          <Section title="À venir" items={aVenir} icon={<FaCheckCircle />} />
          <Section title="Passés" items={passes} icon={<FaHistory />} />
        </div>
      </main>



    </div>
  );
}

