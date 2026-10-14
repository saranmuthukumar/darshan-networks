import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function PowerBackupPage() {
  const service = SERVICES.find(s => s.id === 'power-backup');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Capacity Sizing & Runtime Clarification</span>
      UPS backup duration and load support depend directly on the total connected electrical wattage (computers, monitors, NVR, network switches) and the specific battery ampere-hour (Ah) capacity installed. Darshan Networks calculates your actual power draw on-site to recommend an appropriately sized inverter and battery pairing without guesswork.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
