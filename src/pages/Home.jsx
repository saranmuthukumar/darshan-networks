import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Award, Users, 
  Clock, Network, Laptop, Printer, Fingerprint, 
  Wifi, PhoneCall, Radio, Zap, Cpu, Server, Home as HomeIcon, 
  Building2, Store, GraduationCap, Stethoscope, ChevronRight, Phone
} from 'lucide-react';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { CORE_SERVICES_OVERVIEW } from '../data/services';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Home() {
  const whyChooseUs = [
    {
      title: 'Genuine Quality Hardware',
      desc: 'Tested enterprise-grade networking components, certified cables, and durable hardware.',
      icon: Award,
    },
    {
      title: 'Skilled On-Site Technicians',
      desc: 'Expert cable dressing, precise CCTV positioning, and clean system configurations.',
      icon: Users,
    },
    {
      title: 'Fast Turnaround Support',
      desc: 'Rapid on-site response for network breakdowns, printer refills, and security maintenance.',
      icon: Clock,
    },
    {
      title: 'Custom-Fit Solutions',
      desc: 'Right-sized equipment tailored for your space and workflow without unnecessary overhead.',
      icon: ShieldCheck,
    },
  ];

  const specializedSolutions = [
    { title: 'Healthcare IT Systems', path: '/services/specialized-it', icon: Stethoscope, desc: 'Workstation and LAN networks for clinics & labs.' },
    { title: 'Client-Server Systems', path: '/services/specialized-it', icon: Server, desc: 'Centralized domain storage and backup.' },
    { title: 'Software Support', path: '/services/specialized-it', icon: Cpu, desc: 'OS, antivirus, and driver assistance.' },
    { title: 'CCTV Surveillance', path: '/services/cctv', icon: ShieldCheck, desc: 'HD cameras, NVRs & remote mobile viewing.' },
    { title: 'eSSL Biometric Systems', path: '/services/biometric-access-control', icon: Fingerprint, desc: 'Fingerprint attendance & secure EM locks.' },
    { title: 'Intercom & VDP', path: '/services/intercom', icon: PhoneCall, desc: 'Video door phones and intercom audio.' },
    { title: 'Gate & Boom Automation', path: '/services/automation', icon: Radio, desc: 'Motorized gates and entrance barriers.' },
    { title: 'UPS & Power Backup', path: '/services/power-backup', icon: Zap, desc: 'Inverters and system UPS for continuous power.' },
  ];

  const customerEnvironments = [
    { title: 'Homes & Villas', icon: HomeIcon, desc: 'Mesh Wi-Fi, CCTV, video door phones & home UPS.' },
    { title: 'Offices & Corporate', icon: Building2, desc: 'Structured Cat6 LAN, server racks & biometric attendance.' },
    { title: 'Shops & Retail', icon: Store, desc: 'Billing PCs, barcode printers & counter security.' },
    { title: 'Education Campuses', icon: GraduationCap, desc: 'Lab networking, Wi-Fi coverage & campus CCTV.' },
    { title: 'Hospitals & Clinics', icon: Stethoscope, desc: 'Reception networking, clinic records & power protection.' },
  ];

  return (
    <>
      <SEO 
        title="Complete Technology Solutions Under One Roof | Darshan Networks" 
        description="Darshan Networks delivers dependable IT infrastructure, computer & printer services, networking, CCTV surveillance, biometric access control, and automation in Erode."
      />

      {/* SECTION A: HERO BANNER (Clean, Light, Professional with Yellow Accents) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-amber-50/20 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
        {/* Subtle ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Clean & Punchy Content */}
            <div className="lg:col-span-7 space-y-6">

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Complete Technology Solutions <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-amber-500">
                  Under One Roof
                </span>
              </h1>

              {/* Concise Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Darshan Networks delivers reliable IT infrastructure, structured networking, CCTV security, biometric access, and smart automation for businesses and homes in Erode.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.phones[0].number}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-500 mr-2" />
                  <span>Call: {COMPANY_INFO.phones[0].display}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean, Related Hero Image (All floating badges removed!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Modern subtle ambient glow behind the photo */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-70" />

                {/* Clean Frame with Related IT Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 bg-white group">
                  <img 
                    src="/images/hero-it-solutions.jpg" 
                    alt="Darshan Networks IT Infrastructure & Modern Operations Center" 
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    width="800"
                    height="600"
                  />
                  {/* Subtle soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: SERVICES OVERVIEW (Clean, Modern Redesign) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              OUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technology Solutions for Every Need
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From computer repairs and structured network cabling to CCTV surveillance and automated perimeter security.
            </p>
          </div>

          {/* 6 Prominent Service Cards with Redesigned Light UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {CORE_SERVICES_OVERVIEW.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* View All Services Directory Link */}
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-sm hover:shadow transition-all"
            >
              <span>Explore All 10 Service Categories</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION C: WHY CHOOSE DARSHAN NETWORKS (Streamlined & Clean) */}
      <section className="py-16 bg-slate-50/80 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              OUR PROMISE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses & Homeowners Choose Us
            </h2>
            <p className="text-sm text-slate-600">
              Reliable engineering, transparent hardware pricing, and dependable on-site service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION D: FEATURED NETWORKING SOLUTIONS (Clean, Light Redesign - No Oppressive Dark Background) */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                INFRASTRUCTURE EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                High-Performance Structured Networking & Wi-Fi
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A dependable network is essential for uninterrupted business operations. We design, terminate, and manage fast LAN and commercial Wi-Fi networks built for zero downtime.
              </p>

              {/* Clean 4 Highlight Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Structured Cat6 & Fiber Cabling',
                  'Server Rack Dressing & Patch Panels',
                  'Enterprise Mesh Wi-Fi Setup',
                  'Managed Switches & Router Security'
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-xs sm:text-sm font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/services/networking"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright transition-all shadow-sm"
                >
                  <span>Explore Networking Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img 
                  src="/images/services/networking.jpg" 
                  alt="Structured Cabling & Server Rack" 
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    Infrastructure Standard
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                    Structured copper cabling with neat rack dressing and cable certification
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E: SPECIALIZED SOLUTIONS (Clean & Streamlined) */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tailored Technology for Every Setup
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Specialized security, power continuity, and communication systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializedSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  className="group bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-1 flex items-center text-xs font-bold text-amber-600 group-hover:text-amber-700">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION F: INDUSTRIES SERVED (Compact & Clean) */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-1.5 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              WHO WE SERVE
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Technology Fitted for Any Space
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {customerEnvironments.map((env, i) => {
              const Icon = env.icon;
              return (
                <div 
                  key={i} 
                  className="bg-slate-50/60 p-4 rounded-xl border border-slate-200/70 flex flex-col items-center text-center hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-slate-800 shadow-sm flex items-center justify-center mb-2.5 border border-slate-100">
                    <Icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {env.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {env.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION G: CALL TO ACTION */}
      <CTASection />
    </>
  );
}
