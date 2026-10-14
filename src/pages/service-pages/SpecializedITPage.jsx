import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function SpecializedITPage() {
  const service = SERVICES.find(s => s.id === 'specialized-it');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Software Scope & Third-Party Applications</span>
      Darshan Networks provides technical hardware deployment, local networking, client-terminal connectivity, and operational support for clinical and enterprise environments. Specialized healthcare management software (HIS/EMR) and proprietary enterprise ERP platforms are provided by their respective licensed vendors; our role is to ensure hardware, networking, and endpoints run stably.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
