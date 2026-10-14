import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MapPin, 
  Network, Laptop, Printer, ShieldCheck, Fingerprint, 
  Wifi, PhoneCall, Radio, Zap, Cpu, MessageSquare, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { NAV_LINKS } from '../data/navigation';
import BrandLogo from './BrandLogo';

const SERVICE_ICONS = {
  networking: Network,
  computers: Laptop,
  printers: Printer,
  cctv: ShieldCheck,
  'biometric-access-control': Fingerprint,
  wifi: Wifi,
  intercom: PhoneCall,
  automation: Radio,
  'power-backup': Zap,
  'specialized-it': Cpu,
};

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full w-full sm:w-80 bg-white shadow-2xl flex flex-col z-10 overflow-y-auto">
        
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center">
            <BrandLogo imgClassName="h-9" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <span className="text-xl font-bold leading-none">&times;</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-4 flex-1 space-y-1">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) => 
              `block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) => 
              `block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
              }`
            }
          >
            About Us
          </NavLink>

          {/* Collapsible Services Accordion */}
          <div className="py-1">
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${servicesExpanded ? 'rotate-180 text-brand-blue' : ''}`} />
            </button>

            {servicesExpanded && (
              <div className="pl-3 pr-1 py-1 space-y-1 bg-slate-50/70 rounded-lg mt-1 border border-slate-100">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="flex items-center px-3 py-2 text-sm font-bold text-brand-blue hover:underline"
                >
                  <span>All Services Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                {NAV_LINKS.find(n => n.name === 'Services')?.children?.filter(c => c.path !== '/services').map((item) => {
                  const serviceKey = item.path.replace('/services/', '');
                  const Icon = SERVICE_ICONS[serviceKey] || Network;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'text-brand-blue bg-blue-100/60 font-semibold' 
                            : 'text-slate-600 hover:text-brand-blue hover:bg-slate-100/60'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 mr-2.5 text-brand-blue flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            )}
          </div>

          <NavLink
            to="/services/networking"
            onClick={onClose}
            className={({ isActive }) => 
              `block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
              }`
            }
          >
            Networking
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) => 
              `block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                isActive ? 'text-brand-blue bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* CTA & Contact Details */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-bright shadow transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600">
            <a 
              href={`tel:${COMPANY_INFO.phones[0].number}`}
              className="flex items-center text-slate-700 hover:text-brand-blue"
            >
              <Phone className="w-4 h-4 text-brand-blue mr-2 flex-shrink-0" />
              <span>{COMPANY_INFO.phones[0].display}</span>
            </a>
            <a 
              href={COMPANY_INFO.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-emerald-700 font-medium hover:underline"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
              <span>Chat on WhatsApp ({COMPANY_INFO.phones[0].number})</span>
            </a>
            <div className="flex items-start text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>Lakshmi Garden, Thindal, Erode, Tamil Nadu</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
