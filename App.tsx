
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Logo from './components/Logo';
import AboutOwner from './components/AboutOwner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* 2️⃣ Regionaler Fokus Section */}
        <section id="regional-focus" className="py-24 bg-slate-50 border-y border-slate-200/60 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-[#0f172a] mb-8 tracking-tighter uppercase">Regionaler Fokus</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light">
                  PrimeClean Facility Management hat seinen operativen Schwerpunkt <span className="text-blue-600 font-bold italic">in Berlin</span>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { t: "Kurze Reaktionszeiten", d: "Schnell vor Ort in der Hauptstadt." },
                    { t: "Persönliche Betreuung", d: "Fester Ansprechpartner für Ihr Objekt." },
                    { t: "Strukturierte Planung", d: "Effiziente Einsatzwege in Berlin." },
                    { t: "Klare Kommunikation", d: "Transparenz in jedem Schritt." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="text-blue-500 font-bold">✓</div>
                      <div>
                        <p className="font-black text-xs uppercase tracking-tighter text-slate-900">{item.t}</p>
                        <p className="text-[10px] text-slate-500 mt-1">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1e3a8a] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold mb-6 italic">Operativer Start</h3>
                <p className="text-blue-100/80 leading-relaxed font-light mb-8">
                  Das Gewerbe ist offiziell gegründet. Wir nehmen ab dem 05.04.2026 den vollen Betrieb auf und bereiten derzeit alle Strukturen für einen reibungslosen Ablauf vor.
                </p>
                <div className="inline-block px-5 py-2 bg-blue-600 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Unternehmensleitung */}
        <AboutOwner />

        {/* 4️⃣ & 5️⃣ Geplante Dienstleistungen & Grundsätze */}
        <Services />

        {/* 6️⃣ Kontakt */}
        <Contact />

        {/* 7️⃣ Rechtlicher Hinweis Focus Bar */}
        <section className="py-10 bg-blue-50 border-y border-blue-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-blue-800 text-xs font-bold leading-loose uppercase tracking-widest">
              Wir freuen uns auf Ihre Anfragen.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f172a] text-slate-400 py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
          <div className="col-span-2">
            <Logo className="h-14 mb-10" />
            <p className="text-lg leading-relaxed max-w-sm mb-10 font-light italic">
              "PrimeClean Facility Management – Professionelle Objekt- und Reinigungsdienstleistungen für Berlin."
            </p>
            <div className="bg-blue-900/20 border border-blue-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <p className="text-xs font-black text-blue-300 mb-3 tracking-[0.2em] uppercase">Status: Gegründet </p>
              <p className="text-[11px] text-blue-200/60 leading-relaxed font-medium">
                PrimeClean Facility Management ist offiziell gegründet. WWir sind in Berlin aktiv und stehen Ihnen mit professionellen Reinigungs- und Facility-Services zur Verfügung.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black text-xs mb-8 uppercase tracking-[0.2em]">Sektionen</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#regional-focus" className="hover:text-blue-400 transition-colors">Regionaler Fokus</a></li>
              <li><a href="#owner" className="hover:text-blue-400 transition-colors">Leitung</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Dienstleistungen</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Anfrage</a></li>
            </ul>
          </div>
          <div id="impressum">
            <h4 className="text-white font-black text-xs mb-8 uppercase tracking-[0.2em]">Verantwortlich</h4>
            <div className="space-y-4 text-sm leading-relaxed font-medium">
              <p className="text-white">Devran Dennis Joó</p>
              <p className="text-xs">Martin-Riesenburger-Str. 42<br/>12627 Berlin, Deutschland</p>
              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest opacity-50">E-Mail Kontakt</span>
                <span className="text-blue-400 font-bold">info@primecleanfacilitymanagement.de</span>
                <span className="text-slate-500 font-bold">+49 1520 4899810</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.3em] uppercase font-black text-slate-500">
          <span>© {new Date().getFullYear()} PrimeClean Berlin Edition</span>
          <div className="flex gap-10">
            <span>Gegründet</span>
            <span>VERFÜGBAR</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
