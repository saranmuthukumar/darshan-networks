import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function CCTVPage() {
  const service = SERVICES.find(s => s.id === 'cctv');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Site-Specific Planning & Network Readiness</span>
      Effective surveillance coverage depends on physical layout, conduit pathways, ambient lighting, and internet upload bandwidth for mobile remote viewing. Darshan Networks provides preliminary site assessments in Erode to recommend exact camera counts, lens focal lengths, and storage capacities.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
