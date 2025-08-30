"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";



export default function Header() {
  const [open, setOpen] = useState(false);


  return (
  <header className="bg-gradient-to-r h-[8%] w-full md:h-[10%] from-emerald-500/80 via-emerald-100/80 to-teal-200/80 shadow-xl backdrop-blur-3xl text-emerald-900 gap-1 sm:gap-4 items-center justify-center relative flex flex-row z-[999]">
      <div className="flex justify-start  pl-5 gap-2  w-full md:w-[43%]    items-center ">
        <Link href="/" aria-label="Accueil" className=" flex justify-center gap-2    items-center ">
          <div className="rounded-full shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
            <Image
              src="/doctor1.png"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full shadow md:w-[70px] md:h-[70px] "
            />
          </div>
        <span className="text-base text-xl md:text-2xl font-bold text-emerald-800 flex items-center justify-center text-center ">
          MediPortail
        </span>
        </Link>
      </div>

      <button
        className=" md:hidden absolute right-4 top-5 z-20"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le menu"
      >
        <FiMenu size={28} className="text-emerald-800" />
      </button>


      {open && (
        <nav
          className="font-semibold transition-transform duration-300 fixed top-0 right-0 w-[40vw] min-w-[200px] max-w-[350px] bg-emerald-50/95 rounded-l-2xl shadow-2xl z-[9999] flex flex-col justify-center gap-10 animate-fade-in min-h-[600px] max-h-[900px]"
          style={{ height: '100dvh' }}
        >
          <button
            className="absolute top-4 left-2 right-0 z-50 rounded-full p-2 hover:bg-emerald-100 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <FiX size={22} className="text-emerald-800" />
          </button>

          <Link
            href="/"
            className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
            onClick={() => setOpen(false)}
          >
            Accueil
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
          </Link>
          <Link
            href="/rendez-vous"
            className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
            onClick={() => setOpen(false)}
          >
            Rendez-vous
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
          </Link>
          <Link
            href="/dossier"
            className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
            onClick={() => setOpen(false)}
          >
            Dossier médical
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
          </Link>
          <Link
            href="/recommandations"
            className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
            onClick={() => setOpen(false)}
          >
            Recommandations
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
          </Link>


        </nav>
      )}

      <nav className="font-semibold   md:w-[50%]  hidden md:flex md:flex-row  md:translate-x-0  md:h-full md:bg-transparent md:rounded-none md:shadow-none md:justify-evenly  md:gap-4 md:items-center ">
        <Link
          href="/"
          className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Accueil
          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
        </Link>
        <Link
          href="/rendez-vous"
          className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Rendez-vous
          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
        </Link>
        <Link
          href="/dossier"
          className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Dossier médical
          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
        </Link>
        <Link
          href="/recommandations"
          className="relative group cursor-pointer border-none rounded-lg block px-3 py-1.5 hover:bg-emerald-100/60 hover:text-emerald-900 transition-all duration-400 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Recommandations
          <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-2/3 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" />
        </Link>
      </nav>

  {/* Dark mode toggle removed */}

      {/* Animation for fade-in */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s both;
        }
      `}</style>
    </header>
  );
}
