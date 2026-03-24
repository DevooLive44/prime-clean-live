import React from 'react';

const AboutOwner: React.FC = () => {
  return (
    <section id="owner" className="py-24 bg-[#0f172a] text-white border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.7)] border border-white/10">

              <img
                src="/dennis.jpg"
                alt="Devran Dennis Joó"
                className="absolute inset-0 w-full h-full object-cover object-[center_10%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-blue-400 text-xs font-bold tracking-[0.25em] uppercase">
                  Integrität & Professionalität
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black mb-4">Devran Dennis Joó</h2>
            <p className="text-blue-400 font-bold uppercase mb-6">Unternehmensleitung</p>

            <p className="text-slate-300 text-lg leading-relaxed">
              PrimeClean Facility Management wird von einem ehemaligen Polizeibeamten geführt.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOwner;
