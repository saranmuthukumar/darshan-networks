import React from 'react';
import ServiceDetailTemplate from '../../components/ServiceDetailTemplate';
import { SERVICES } from '../../data/services';
import { CheckCircle2, Shield, Radio, Car, Lock, ToggleLeft } from 'lucide-react';

export default function AutomationPage() {
  const service = SERVICES.find(s => s.id === 'automation');

  const dualSectionVisual = (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
          SPECIALIZED AUTOMATION DIVISIONS
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
          Two Distinct Perimeter Automation Disciplines
        </h3>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Darshan Networks maintains strict technical separation between motorized sliding/swing gates and commercial boom barriers, ensuring appropriate gear ratios, motors, and safety sensors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* DIVISION 1: GATE AUTOMATION */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card flex flex-col justify-between">
          <div>
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              <img 
                src="/images/services/gate-automation.jpg" 
                alt="Automated Motorized Sliding Gate" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-white/95 text-brand-navy text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                Division 01: Motorized Gates
              </span>
              <div className="absolute bottom-3 left-4 text-white text-base font-bold">
                Sliding & Swing Gate Automation
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automated gate motors engineered for residential bungalows, commercial compounds, and industrial yards. Operates smoothly via long-range wireless remotes and obstacle sensors.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>High-torque sliding gate gear rack motors rated from 400kg to 2000kg.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Linear actuator and articulated arm motors for dual-leaf swing gates.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Safety infrared photocells: gate halts and reverses if an obstacle is sensed.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Manual key release allowing manual operation during power failures.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-slate-600">
            Ideal for: Residential Homes, Villa Communities, Factory Entrances
          </div>
        </div>

        {/* DIVISION 2: BOOM BARRIER AUTOMATION */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card flex flex-col justify-between">
          <div>
            <div className="relative h-56 w-full overflow-hidden bg-slate-100">
              <img 
                src="/images/services/boom-barrier.jpg" 
                alt="Automated Boom Barrier for Vehicle Entry" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 bg-white/95 text-brand-navy text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                Division 02: Vehicle Control
              </span>
              <div className="absolute bottom-3 left-4 text-white text-base font-bold">
                Automated Boom Barrier Systems
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-cycle electromechanical boom barriers designed for continuous vehicle transit control at parking lots, toll booths, textile mills, and gated apartment complexes.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rapid 1.5s to 4s cycle times with aluminum boom arms (3 to 6 meters).</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>RFID long-range windshield tag reader integration for hands-free vehicle entry.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Underground loop detector integration for automated barrier closing after car passes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span>Security guard desk push-button console and remote override controls.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold text-slate-600">
            Ideal for: Commercial Parking, Apartments, Toll Gates & Logistics Yards
          </div>
        </div>

      </div>

      {/* Auxiliary Controls & Safety Box */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
        <h4 className="text-base font-bold text-brand-navy flex items-center">
          <ToggleLeft className="w-5 h-5 text-brand-blue mr-2" />
          Electrical Safety, MCB Controls & Smart Locking Integration
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          All Darshan Networks automation installations incorporate dedicated Miniature Circuit Breakers (MCB) to isolate high-voltage surges, weatherproof junction enclosures, and auxiliary Electromagnetic (EM) locks on pedestrian wickets.
        </p>
      </div>
    </div>
  );

  return (
    <ServiceDetailTemplate 
      service={service} 
      extraVisualComponent={dualSectionVisual}
    />
  );
}
