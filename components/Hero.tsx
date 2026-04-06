
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#1e3a8a] text-xs font-bold mb-8 border border-blue-100 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Region Berlin • Jetzt verfügbar in Berlin
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[1.05] mb-8 tracking-tighter">
              <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] leading-[1.05] mb-8 tracking-tighter">
  PrimeClean <br/>
  <span className="text-blue-600">Facility Management</span>
</h1>
              
            </h1>
            <div className="space-y-4 mb-10">
              <p className="text-xl text-slate-700 font-semibold leading-relaxed max-w-xl">
                Professionelle Objekt- und Reinigungsdienstleistungen für Berlin – Jetzt verfügbar in Berlin
              </p>
              <p className="text-slate-500 leading-relaxed max-w-xl italic text-sm">
                Offizieller Start am 05.04.2026.
              </p>
            </div>
            <div className="flex flex-col sm:row gap-4">
              <a href="#contact" className="px-10 py-5 bg-[#1e3a8a] hover:bg-blue-800 text-white rounded-2xl font-bold text-center transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                Unverbindliche Kontaktaufnahme für Berlin
              </a>
            </div>
          </div>
          <div className="relative">
            {/* Dekoratives Element im Hintergrund */}
            <div className="absolute -top-12 -left-12 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-slate-100">
              {/* Ikonisches Berlin Bild: Fernsehturm und moderne Architektur */}
              <img 
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=1200" 
                alt="Berlin Alexanderplatz Fernsehturm Fokus" 
                className="rounded-[2.5rem] w-full object-cover aspect-[4/5] lg:aspect-square shadow-inner transition-transform duration-700 hover:scale-[1.02]"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-2xl transform translate-y-4">
                 <div className="flex items-center gap-3 mb-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <p className="text-[#1e3a8a] font-black text-xl uppercase tracking-tighter">Berlin Fokus</p>
                 </div>
                 <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest opacity-70">Operative Exzellenz in der Hauptstadt</p>
              </div>
            </div>

            {/* Subtiles Berlin-Map Element (optionales Design-Asset) */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-3xl z-20">
              📍
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
