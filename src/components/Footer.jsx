import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from '../data/navigation';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo isDark={true} imgClassName="h-11 sm:h-12" />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Reliable IT infrastructure, surveillance, computer servicing, access control, and automation solutions for homes, businesses, and organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-l-2 border-brand-yellow pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-brand-yellow transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-yellow" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-l-2 border-brand-yellow pl-2.5">
              Our Services
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-brand-yellow transition-colors block truncate"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase border-l-2 border-brand-yellow pl-2.5">
              Get in Touch
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-yellow mr-2.5 flex-shrink-0 mt-1" />
                <address className="not-italic text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {COMPANY_INFO.address.line1}<br />
                  {COMPANY_INFO.address.line2}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                </address>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-yellow mr-2.5 flex-shrink-0" />
                <div className="space-x-2 text-xs sm:text-sm">
                  <a href={`tel:${COMPANY_INFO.phones[0].number}`} className="hover:text-brand-yellow text-slate-300 font-semibold transition-colors">
                    {COMPANY_INFO.phones[0].display}
                  </a>
                  <span className="text-slate-600">/</span>
                  <a href={`tel:${COMPANY_INFO.phones[1].number}`} className="hover:text-brand-yellow text-slate-300 font-semibold transition-colors">
                    {COMPANY_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-4 h-4 text-brand-yellow mr-2.5 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs sm:text-sm text-slate-300 hover:text-brand-yellow transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start pt-1">
                <Clock className="w-4 h-4 text-brand-yellow mr-2.5 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {COMPANY_INFO.workingHours.days} ({COMPANY_INFO.workingHours.hours})
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-brand-yellow/80 font-medium">{COMPANY_INFO.brandTagline}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
