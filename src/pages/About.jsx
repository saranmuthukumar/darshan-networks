import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Shield, Wrench, Users, Target, 
  MapPin, Phone, Mail, ArrowRight, Building2, 
  Home as HomeIcon, Store, GraduationCap, Stethoscope 
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';
import BrandLogo from '../components/BrandLogo';

export default function About() {
  const serviceApproach = [
    {
      title: 'Consultation & Site Assessment',
      desc: 'We examine your premises, network points, power backup needs, and security priorities to understand the real scope.',
      icon: Target,
    },
    {
      title: 'Practical Hardware Selection',
      desc: 'We recommend proven, supported hardware matching your exact duty cycle and budget, avoiding oversold or mismatched gear.',
      icon: Shield,
    },
    {
      title: 'Clean & Certified Installation',
      desc: 'From structured cable laying and rack dressing to camera alignment and biometric enrollment, we install cleanly and methodically.',
      icon: Wrench,
    },
    {
      title: 'Ongoing Technical Assistance',
      desc: 'Local, responsive support for hardware repairs, toner refills, network reconfigurations, and system maintenance.',
      icon: Users,
    },
  ];

  const customerEnvironments = [
    { title: 'Homes & Residences', icon: HomeIcon, desc: 'Wi-Fi mesh setups, video door phones, CCTV security, home UPS, and personal computing support.' },
    { title: 'Offices & Corporate', icon: Building2, desc: 'Structured cabling, biometric attendance, server racks, managed printers, and multi-user networking.' },
    { title: 'Commercial Showrooms & Retail', icon: Store, desc: 'Point-of-sale computer setups, cash counter surveillance, barcode printing, and entrance gate motors.' },
    { title: 'Educational Institutions', icon: GraduationCap, desc: 'Campus-wide wireless coverage, computer labs, staff attendance systems, and campus surveillance.' },
    { title: 'Healthcare Environments', icon: Stethoscope, desc: 'Doctor workstation networks, reception printing, clinic surveillance, and power backup solutions.' },
  ];

  return (
    <>
      <SEO 
        title="About Us | Darshan Networks" 
        description="Learn about Darshan Networks — providing dependable IT infrastructure, computer & printer services, networking, CCTV surveillance, biometric access control, and automation in Erode."
      />

      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />

      {/* Hero Section - Clean Light Design */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-amber-50/20 py-12 sm:py-16 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
              ABOUT DARSHAN NETWORKS
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Technology That Connects, Protects & Powers Your World
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {COMPANY_INFO.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Empowering Homes and Businesses in Erode with Dependable Technology
              </h2>

              <div className="text-base text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Darshan Networks provides integrated technology solutions for homes, businesses, and institutions. Our services cover computer and laptop sales and servicing, printer solutions, networking and Wi-Fi infrastructure, CCTV surveillance, biometric attendance systems, electronic access control, intercom systems, gate automation, and power backup.
                </p>
                <p>
                  We aim to make technology practical, reliable, and accessible by helping customers choose suitable solutions, supporting installation and configuration, and assisting with ongoing technical requirements.
                </p>
                <p>
                  Located at Lakshmi Garden in Thindal, Erode, we operate with an emphasis on honest technical evaluation, clean workmanship, and durable hardware installations that serve our clients seamlessly day in and day out.
                </p>
              </div>

              {/* Tagline Box */}
              <div className="p-5 rounded-2xl bg-brand-bg border border-brand-border flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">Our Driving Philosophy</div>
                  <div className="text-base font-extrabold text-brand-navy">{COMPANY_INFO.brandTagline}</div>
                  <div className="text-xs text-slate-500">{COMPANY_INFO.secondaryTagline}</div>
                </div>
              </div>

            </div>

            {/* Right Brand Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-6 sm:p-8 space-y-6">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm inline-block">
                  <BrandLogo imgClassName="h-12" showTagline={true} />
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-bold text-brand-navy">Business Location & Contact</h3>
                  <div className="text-sm text-slate-600 space-y-2">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-brand-blue mr-2.5 flex-shrink-0 mt-1" />
                      <span>{COMPANY_INFO.address.formatted}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-brand-blue mr-2.5 flex-shrink-0" />
                      <span>{COMPANY_INFO.phones[0].display} / {COMPANY_INFO.phones[1].display}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-brand-blue mr-2.5 flex-shrink-0" />
                      <span>{COMPANY_INFO.email}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright transition-colors text-sm shadow"
                  >
                    <span>Connect with Our Team</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Service Approach */}
      <section className="py-16 sm:py-20 bg-brand-bg/50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Our Service Approach
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We ensure every technology installation is executed methodically from preliminary consultation to long-term post-deployment support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceApproach.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-5 font-bold text-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                      Step 0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Core Service Categories Directory */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Core Service Categories
            </h2>
            <p className="text-base text-slate-600">
              Browse through all 10 specialized divisions handled by Darshan Networks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <Link
                key={srv.id}
                to={srv.path}
                className="group p-5 rounded-2xl border border-slate-200 hover:border-brand-blue hover:shadow-card transition-all flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                    {srv.category}
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-blue">
                  <span>Explore service details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Environments Served */}
      <section className="py-16 sm:py-20 bg-brand-bg/60 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              WHERE WE WORK
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy">
              Customer Environments Served
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {customerEnvironments.map((env, i) => {
              const Icon = env.icon;
              return (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy mb-1.5">{env.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{env.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
