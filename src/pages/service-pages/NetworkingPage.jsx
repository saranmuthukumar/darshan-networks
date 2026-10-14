import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function NetworkingPage() {
  const service = SERVICES.find(s => s.id === 'networking');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Professional Standards & Assessment</span>
      Darshan Networks executes network infrastructure based on actual site layouts and client requirements. All cable runs and switch configurations are verified on-site for continuity and transmission reliability.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
