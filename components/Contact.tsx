
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  await fetch("https://formspree.io/f/mwvrqayk", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  setSubmitted(true);
};

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[4rem] shadow-3xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 md:p-20 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white">
            <h2 className="text-5xl font-black mb-10 tracking-tighter">Kontakt – Berlin</h2>
            <p className="text-blue-100 mb-12 text-lg opacity-80 leading-relaxed font-light">
              Kontaktanfragen für unseren offiziellen Start am 05.04.2026 in Berlin.
            </p>
            <div className="space-y-8">
              <a href="tel:+4915204899810" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-blue-600 transition-all flex items-center justify-center text-2xl">📞</div>
                <div>
                  <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-1">Direktkontakt</p>
                  <p className="font-bold text-xl">+49 1520 4899810</p>
                </div>
              </a>
              <a href="mailto:info@primecleanfacilitymanagement.de" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-blue-600 transition-all flex items-center justify-center text-2xl">📧</div>
                <div>
                  <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-1">E-Mail</p>
                  <p className="font-bold text-lg break-all">info@primecleanfacilitymanagement.de</p>
                </div>
              </a>
              <div className="flex items-start gap-6 pt-8 border-t border-white/10 mt-8">
                 <div className="text-blue-400 text-2xl">⚖️</div>
                 <p className="text-xs text-blue-200/60 italic leading-loose">
                   Gewerbe gegründet. Operativer Start am 05.04.2026. Wir freuen uns auf Ihre Anfragen für den Raum Berlin.
                 </p>
              </div>
            </div>
          </div>
          <div className="p-12 md:p-20 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-4xl mb-8">✓</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tighter">Anfrage gesendet</h3>
                <p className="text-slate-600">Vielen Dank für den Austausch. Wir melden uns zeitnah.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Neue Anfrage</button>
              </div>
            ) : (<form
  action="https://formspree.io/f/mwvrqayk"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-6"
>
  <div>
    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Verwaltung / Name</label>
    <input required type="text" name="name" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" placeholder="Objekteigentümer oder Verwaltung" />
  </div>
  <div>
    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">E-Mail</label>
    <input required type="email" name="email" className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-medium" placeholder="Ihre Adresse" />
  </div>
  <div>
    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Nachricht / Objekt-Detail</label>
    <textarea required name="message" className="w-full h-44 px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none font-medium" placeholder="Ihr Anliegen im Raum Berlin..."></textarea>
  </div>
  <button type="submit" className="w-full py-6 bg-[#1e3a8a] hover:bg-blue-800 text-white font-black rounded-2xl transition-all shadow-xl uppercase tracking-widest text-sm">
    Unverbindlich anfragen
  </button>
</form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
