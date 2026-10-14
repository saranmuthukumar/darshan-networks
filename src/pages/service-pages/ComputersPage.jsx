import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';

export default function ComputersPage() {
  const service = SERVICES.find(s => s.id === 'computers');

  const notice = (
    <div>
      <span className="font-bold text-slate-900 block mb-0.5">Product Availability & Service Inquiries</span>
      Specific desktop models, laptop configurations, spare parts, and upgrade compatibility vary based on market availability. Please contact us with your device model or performance requirements to confirm exact availability and tailored service estimates.
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      noticeBox={notice} 
    />
  );
}
