import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';
import { Wifi, Signal, Shield, Smartphone } from 'lucide-react';

export default function WifiPage() {
  const service = SERVICES.find(s => s.id === 'wifi');

  const extraVisual = (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
          SEAMLESS CONNECTIVITY
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mt-1">
          How Enterprise Wi-Fi Architecture Eliminates Dead Zones
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Standard consumer routers struggle through concrete walls and multi-floor layouts. Here is how our commercial deployment delivers seamless coverage:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'Centralized PoE Cabling', icon: Signal, desc: 'Access points powered directly via Cat6 Ethernet cable without extra wall adapters.' },
          { title: 'Zero-Handoff Roaming', icon: Wifi, desc: 'Move across cabins, floors, or rooms without dropping WhatsApp or Zoom video calls.' },
          { title: 'Band Steering (2.4G & 5G)', icon: Smartphone, desc: 'Directs fast devices to 5 GHz and smart home / IoT sensors to 2.4 GHz automatically.' },
          { title: 'Isolated Guest SSID', icon: Shield, desc: 'Visitors browse the web without gaining access to confidential internal servers or printers.' },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-brand-navy mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      extraVisualComponent={extraVisual}
    />
  );
}
