import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function PrintersPage() {
  const service = SERVICES.find(s => s.id === 'printers');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Toner Refilling & Model Compatibility Notice</span>
      Toner cartridge specifications and refilling procedures differ significantly across printer manufacturers and cartridge families. We invite customers to contact us with their specific printer brand and cartridge model number so we can confirm compatibility and supply the correct toner powder and parts.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
