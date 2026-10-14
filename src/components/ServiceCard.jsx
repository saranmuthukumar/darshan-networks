import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, Laptop, Printer, ShieldCheck, Fingerprint, 
  Wifi, PhoneCall, Radio, Zap, Cpu, ArrowRight, CheckCircle2 
} from 'lucide-react';

const ICON_MAP = {
  Network,
  Laptop,
  Printer,
  ShieldCheck,
  Fingerprint,
  Wifi,
  PhoneCall,
  Radio,
  Zap,
  Cpu,
};

export default function ServiceCard({ service, featured = false }) {
  const IconComponent = ICON_MAP[service.icon] || Network;

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1 ${
      featured ? 'ring-2 ring-amber-400/40' : ''
    }`}>
      {/* Image Thumbnail Container - Clean and bright */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
        <img 
          src={service.image} 
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        
        {/* Category Badge with Yellow Accent */}
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200/70 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {service.category}
        </span>

        {/* Floating Icon with Golden Yellow Hover */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 text-slate-900 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center shadow-md transition-all duration-200 border border-slate-100">
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content - Clean & uncluttered */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {service.shortDescription}
          </p>

          {/* Quick Key Highlights with Amber Checks */}
          {service.highlights && (
            <ul className="space-y-1.5 mb-5 text-xs text-slate-600">
              {service.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={service.path}
            className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-blue group-hover:text-amber-600 transition-colors"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
            Certified Tech
          </span>
        </div>
      </div>
    </div>
  );
}
