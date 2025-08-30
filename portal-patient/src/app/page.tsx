'use client';

import AppointmentCard from "./../components/AppointmentCard";
import HealthTipCard from "./../components/HealthTipCard";
import rendezvous from "./../data/rendezvous.json";
import recommandations from "./../data/recommandations.json";
import { FaUserMd, FaRegCalendarCheck, FaHeartbeat } from "react-icons/fa";
import "./globals.css";

const patient = {
  prenom: "Younes",
  nom: "Moukhlij",
  age: 32,
  genre: "Homme",
  mutuelle: "MGEN",
  medecinTraitant: "Dr. Dupont",
};

const dernierRdv =
  rendezvous
    .filter((rdv) => rdv.statut === "à venir")
    .sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    )[0] || rendezvous[0];

const recoJour = recommandations[0];

export default function Home() {
  return (
  <div className="h-full w-full flex flex-col items-center justify-center bg-[url('/bg2.jpg')] bg-cover bg-no-repeat bg-center bg-gradient-to-br from-blue-100 via-white to-blue-300 animate-gradient-slow relative overflow-x-hidden">
  <main className="flex-1 bg-black/30 text-emerald-900 pt-3 md:pt-10 w-full h-full flex flex-col items-center justify-center animate-fade-in">
        <h1 className="h-[10%] pt-3 md:pt-0 text-center flex items-center justify-center w-full text-xl sm:text-2xl md:text-4xl font-bold text-white ">
          Bienvenue, {patient.prenom} !
        </h1>
        <div className="w-full h-[90%] p-1 sm:p-5 flex gap-1 sm:gap-6 flex-col items-center justify-center">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-6 items-center justify-center">
            <div className="bg-white/90 rounded-2xl shadow-lg flex flex-col items-center border border-emerald-100 w-full max-w-full sm:max-w-sm md:max-w-full min-h-0 h-auto md:h-full py-2 sm:py-4 md:py-5 px-1 relative animate-fade-in">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full shadow-lg border-4 border-white z-1">
                <FaUserMd className="text-emerald-500 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="h-6" />
              <span className="mb-2 text-base sm:text-lg font-bold text-emerald-800 text-center">
                Informations patient
              </span>
              <ul className="text-emerald-900 text-xs sm:text-sm space-y-1 w-full px-1 sm:px-2">
                <li className="flex justify-between">
                  <span className="font-medium">Nom:</span>{" "}
                  <span>{patient.nom}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Âge:</span>{" "}
                  <span>{patient.age} ans</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Genre:</span>{" "}
                  <span>{patient.genre}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Mutuelle:</span>{" "}
                  <span>{patient.mutuelle}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Médecin traitant:</span>{" "}
                  <span>{patient.medecinTraitant}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg flex flex-col items-center border border-emerald-100 w-full max-w-full sm:max-w-sm md:max-w-full min-h-0 h-auto md:h-full py-2 sm:py-4 md:py-5 px-1 relative animate-fade-in">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full shadow-lg border-4 border-white z-10">
                <FaRegCalendarCheck className="text-emerald-500 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="h-6" />
              <h2 className="mb-2 text-lg font-bold text-emerald-700 text-center">
                Prochain rendez-vous
              </h2>
              <div className="w-full px-2">
                <AppointmentCard appointment={dernierRdv} />
              </div>
            </div>

            <div className="bg-white/90 rounded-2xl shadow-lg flex flex-col items-center border border-emerald-100 w-full max-w-full sm:max-w-sm md:max-w-full min-h-0 h-auto md:h-full py-2 sm:py-4 md:py-5 px-1 relative animate-fade-in">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full shadow-lg border-4 border-white z-10">
                <FaHeartbeat className="text-emerald-500 text-lg sm:text-xl md:text-2xl" />
              </div>
              <div className="h-6" />
              <h2 className="mb-2 text-lg font-bold text-emerald-700 text-center">
                Conseil santé du jour
              </h2>
              <div className="w-full px-2">
                <HealthTipCard tip={recoJour} />
              </div>
            </div>
          </div>
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
