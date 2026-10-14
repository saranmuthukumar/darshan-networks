import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const primaryPhone = COMPANY_INFO.phones[0];
  const whatsappUrl = COMPANY_INFO.whatsapp.getLink(
    'Hello Darshan Networks, I am interested in your IT / Networking / Security services. Please share more details.'
  );

  return (
    <aside aria-label="Quick Contact Options" className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 print:hidden">
      
      {/* Quick Phone Call Button */}
      <a
        href={`tel:${primaryPhone.number}`}
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy hover:bg-brand-blue text-white shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue active:scale-95"
        aria-label={`Call Darshan Networks at ${primaryPhone.display}`}
        title={`Call ${primaryPhone.display}`}
      >
        <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="sr-only">Call Darshan Networks</span>
        
        {/* Hover Label */}
        <span className="absolute right-14 whitespace-nowrap bg-brand-navy text-white text-xs font-semibold px-2.5 py-1 rounded shadow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          Call: {primaryPhone.display}
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <div className="relative">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] active:scale-95 animate-bounce-subtle"
          aria-label="Chat with Darshan Networks on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
          
          <MessageSquare className="w-7 h-7 relative z-10 fill-white/20 transition-transform group-hover:scale-110" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>

        {/* WhatsApp Tooltip Popover */}
        {showTooltip && (
          <div className="absolute right-16 bottom-1 whitespace-nowrap bg-white text-slate-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl border border-slate-200 pointer-events-none animate-in fade-in slide-in-from-right-1 duration-150">
            <span className="font-bold text-emerald-600 block">WhatsApp Us</span>
            <span>Quick response on {primaryPhone.number}</span>
          </div>
        )}
      </div>

    </aside>
  );
}
