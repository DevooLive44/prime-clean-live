
import React from 'react';

const plannedServices = [
  { title: "Unterhaltsreinigung", icon: "🧹" },
  { title: "Büroreinigung", icon: "🏢" },
  { title: "Treppenhausreinigung", icon: "🪜" },
  { title: "Glas- & Fensterreinigung", icon: "🪟" },
  { title: "Praxis- & Kanzleireinigung", icon: "🏥" },
  { title: "Bauendreinigung", icon: "🏗️" },
  { title: "Objektbetreuung", icon: "🔑" }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            AB SOFORT VERFÜGBAR
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase">Unsere Dienstleistungen</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Wir bieten in Berlin ein umfassendes Angebot an professionellen Reinigungs- und Facility-Services.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {plannedServices.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all text-center flex flex-col items-center group">
              <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
              <h3 className="text-xs font-black text-[#1e3a8a] leading-tight uppercase tracking-tighter">{s.title}</h3>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-blue-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
             <h4 className="text-2xl font-bold mb-2">Unsere Grundsätze</h4>
             <p className="text-blue-200 text-sm leading-relaxed">
               Regionale Präsenz in Berlin, strukturierte Einsatzplanung, klare Kommunikation und nachhaltiger Umgang mit Materialien.
             </p>
          </div>
          <div className="flex gap-4">
             <div className="h-12 w-12 rounded-full border border-blue-400/30 flex items-center justify-center text-xl">♻️</div>
             <div className="h-12 w-12 rounded-full border border-blue-400/30 flex items-center justify-center text-xl">💬</div>
             <div className="h-12 w-12 rounded-full border border-blue-400/30 flex items-center justify-center text-xl">📍</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
