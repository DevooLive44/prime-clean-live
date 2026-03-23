import React, { useState, useRef, useEffect } from 'react';

const AboutOwner: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('owner_photo');
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageSrc(base64);
        localStorage.setItem('owner_photo', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="owner" className="py-24 bg-[#0f172a] text-white overflow-hidden relative border-t border-slate-800/50">
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[140px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 bg-slate-900/50 backdrop-blur-sm aspect-[3/4] group">
             {true ? (
               <img
  src="/dennis.jpg"
  alt="Devran Dennis Joo"
  className="w-full h-full object-cover object-top"
/>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 text-slate-500 p-12 text-center">
                  <div className="w-32 h-32 bg-slate-700/50 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-40">Unternehmensleitung</p>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] p-10">
                <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-[10px]">Integrität & Professionalität</p>
              </div>
            </div>
            <div className="mt-8">
      
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <header>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Werdegang & Philosophie
              </div>
              <h2 className="text-5xl font-black mb-4 tracking-tighter">Devran Dennis Joó</h2>
              <p className="text-blue-400 font-bold text-xl uppercase tracking-wider">Unternehmensleitung</p>
            </header>
            
            <div className="space-y-8 text-lg text-slate-300 leading-relaxed font-light">
              <p className="text-white font-medium border-l-4 border-blue-600 pl-6 italic">
                "PrimeClean Facility Management wird von einem ehemaligen Polizeibeamten geführt."
              </p>
              <p>
                Die berufliche Erfahrung im Bereich Organisation, Verantwortungsübernahme und strukturierter Arbeitsweise prägt die zukünftige Unternehmensausrichtung.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-tighter">Zuverlässigkeit</p>
                  <p className="text-xs text-slate-400">Absolut termintreu.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-tighter">Disziplin</p>
                  <p className="text-xs text-slate-400">Klare Organisation.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-tighter">Sorgfalt</p>
                  <p className="text-xs text-slate-400">Verantwortungsvoll.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-blue-400 font-bold text-sm mb-1 uppercase tracking-tighter">Vertrauen</p>
                  <p className="text-xs text-slate-400">Höchste Diskretion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;
