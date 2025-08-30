import type { Metadata } from "next";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { DarkModeProvider } from "../context/DarkModeContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Patient",
  description: "Created by Younes Moukhlij",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="w-full h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/doctor1.png" />
        <meta name="description" content="Portail Patient - Visualisation d'un Carnet de Suivi Médical. Suivez vos rendez-vous, recommandations et informations médicales en toute sécurité." />
        <meta name="keywords" content="santé, patient, médical, rendez-vous, recommandations, dossier, portail, suivi" />
        <meta name="author" content="Younes Moukhlij" />
        <meta name="theme-color" content="#10b981" />
        <meta property="og:title" content="Portail Patient - Carnet de Suivi Médical" />
        <meta property="og:description" content="Accédez à votre carnet de suivi médical, rendez-vous et conseils santé en ligne." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/doctor1.png" />
        <meta property="og:locale" content="fr_FR" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}  h-full w-full`}>
        <DarkModeProvider>
          <Header/>
          <div className="w-full h-[78%] md:h-[80%]">
            {children}
          </div>
          <Footer/>
        </DarkModeProvider>
      </body>
    </html>
  );
}
