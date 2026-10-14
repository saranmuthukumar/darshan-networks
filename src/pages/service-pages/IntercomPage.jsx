import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function IntercomPage() {
  const service = SERVICES.find(s => s.id === 'intercom');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Wiring & Legacy System Compatibility</span>
      Intercom system compatibility depends heavily on the existing core wiring (2-wire, 4-wire, or Cat6 network infrastructure) and distance between outdoor door stations and indoor monitors. Our technicians perform a preliminary continuity and wiring check before confirming integration with existing gate locks or older intercoms.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
