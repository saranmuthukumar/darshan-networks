import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function CTASection({
  headline = "Looking for a Reliable Technology Partner?",
  text = "Talk to Darshan Networks about your networking, security, IT service, or automation requirements.",
  showSubtext = true,
}) {
  const primaryPhone = COMPANY_INFO.phones[0];
  const whatsappUrl = COMPANY_INFO.whatsapp.getLink(
    "Hello Darshan Networks, I would like to consult on my IT, networking, or security requirements."
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-amber-50 via-blue-50/50 to-amber-50/60 py-16 sm:py-20 border-y border-amber-200/50">
      {/* Subtle ambient glows */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-sm">
          READY TO UPGRADE YOUR TECH?
        </span>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          {headline}
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={`tel:${primaryPhone.number}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
          >
            <Phone className="w-5 h-5 mr-2 text-slate-950" />
            <span>Call Now: {primaryPhone.display}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
          >
            <MessageSquare className="w-5 h-5 mr-2 fill-white/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {showSubtext && (
          <p className="text-xs text-slate-500 pt-1 font-medium">
            Serving Erode, Thindal, Perundurai, Bhavani, and surrounding regions across Western Tamil Nadu.
          </p>
        )}

      </div>
    </section>
  );
}
