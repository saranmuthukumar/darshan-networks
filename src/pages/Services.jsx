import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiceGrid from '../components/ServiceGrid';
import CTASection from '../components/CTASection';
import { SERVICES } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO 
        title="Services Directory | IT, Networking, CCTV & Automation" 
        description="Comprehensive directory of IT services, structured LAN cabling, computer sales and service, printer toner refilling, CCTV surveillance, biometric access control, and automation in Erode."
      />

      <Breadcrumbs items={[{ label: 'Services', path: '/services' }]} />

      {/* Hero Section - Clean Light Design with Yellow Accent */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-amber-50/20 py-12 sm:py-16 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/3 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
              SERVICES DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology Solutions for Every Need
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Explore our full range of enterprise IT infrastructure, hardware servicing, security surveillance, access control, and automation services in Erode.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Directory Grid */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid services={SERVICES} showFilters={true} />
        </div>
      </section>

      {/* Contact CTA */}
      <CTASection 
        headline="Need a Custom Technology Solution for Your Premises?"
        text="Whether you need network points wired, security cameras installed, or computer servicing, get in touch with our technical team today."
      />
    </>
  );
}
