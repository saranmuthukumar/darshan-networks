import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';
import { Fingerprint, Lock, CheckCircle2 } from 'lucide-react';

export default function BiometricAccessPage() {
  const service = SERVICES.find(s => s.id === 'biometric-access-control');

  const extraVisual = (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-6">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
          UNDERSTANDING YOUR REQUIREMENTS
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mt-1">
          Attendance Logging vs. Physical Door Access Control
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          While both systems use biometric sensors or RFID smart cards, their hardware mechanisms and cabling serve fundamentally different purposes:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Comparison 1 */}
        <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-navy">Biometric Attendance Systems</h4>
              <span className="text-xs text-slate-500">Workforce & Payroll Management</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Logs employee check-in and check-out timestamps with fingerprint or RFID.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Connects via LAN/Wi-Fi to generate monthly attendance and shift reports.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Does not lock or unlock physical doors; ideal for general office lobbies.</span>
            </li>
          </ul>
        </div>

        {/* Comparison 2 */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-navy">Physical Door Access Control</h4>
              <span className="text-xs text-slate-500">Restricted Entry Security</span>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Controls heavy-duty electromagnetic (EM) door locks and release relays.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Includes emergency exit buttons, backup power supply, and glass door brackets.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
              <span>Restricts unauthorized entry into server rooms, CEO cabins, and labs.</span>
            </li>
          </ul>
        </div>

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
