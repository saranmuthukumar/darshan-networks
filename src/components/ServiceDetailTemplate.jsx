import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, Phone, MessageSquare, 
  MapPin, Clock, ShieldCheck, ChevronRight 
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ServiceDetailTemplate({
  service,
  customSections,
  noticeBox,
  extraVisualComponent,
}) {
  const primaryPhone = COMPANY_INFO.phones[0];
  const whatsappUrl = COMPANY_INFO.whatsapp.getLink(
    `Hello Darshan Networks, I would like to inquire about ${service.title} for my site.`
  );

  return (
    <>
      <SEO 
        title={service.metaTitle || service.title}
        description={service.metaDescription || service.shortDescription}
      />

      <Breadcrumbs 
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title, path: service.path }
        ]} 
      />

      {/* Hero Section - Clean Light Design */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-amber-50/20 py-12 sm:py-16 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
                {service.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {service.pageHeading || service.title}
              </h1>

              {service.pageSubheading && (
                <p className="text-lg sm:text-xl text-brand-blue font-semibold leading-relaxed">
                  {service.pageSubheading}
                </p>
              )}

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md"
                >
                  <span>{service.callToAction || 'Request a Quote'}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>

                <a
                  href={`tel:${primaryPhone.number}`}
                  className="inline-flex items-center px-5 py-3 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-500" />
                  <span>Call {primaryPhone.display}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg text-xs flex items-center justify-between">
                  <span className="font-bold text-slate-900">{service.title}</span>
                  <span className="text-amber-600 font-bold">Darshan Networks</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Important Transparency Notice (if provided) */}
          {noticeBox && (
            <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/90 border border-blue-200 flex items-start space-x-3.5">
              <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {noticeBox}
              </div>
            </div>
          )}

          {/* Extra Custom Visual Component (e.g. diagrams or dual sections) */}
          {extraVisualComponent}

          {/* Technical Categories / Sections */}
          <div className="space-y-10">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                TECHNICAL SCOPE & DELIVERABLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
                Detailed Service Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(customSections || service.sections)?.map((section, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-amber-300/60 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {section.description}
                    </p>

                    <ul className="space-y-2.5 pt-2">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights & Environments */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Key Highlights */}
            {service.highlights && (
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Key Service Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700 bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suitable For Environments */}
            {service.suitableFor && (
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900">
                  Recommended Environments
                </h3>
                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-600">
                  {service.suitableFor.map((env, i) => (
                    <li key={i} className="flex items-center space-x-2 py-1.5 border-b border-slate-100 last:border-0">
                      <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="font-medium text-slate-800">{env}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Contact & Enquiry Section */}
          <div id="contact-form" className="pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    REQUEST A CONSULTATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    Ready to Discuss {service.title}?
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Contact Darshan Networks in Erode for site assessments, hardware availability, installation scheduling, and technical guidance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-sm">
                  <div className="font-bold text-brand-navy border-b border-slate-100 pb-2">
                    Direct Contact Channels
                  </div>

                  <a 
                    href={`tel:${primaryPhone.number}`} 
                    className="flex items-center text-slate-700 hover:text-brand-blue transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-blue mr-3 flex-shrink-0" />
                    <span>Call: {primaryPhone.display}</span>
                  </a>

                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-emerald-700 font-semibold hover:underline"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0" />
                    <span>Chat on WhatsApp ({primaryPhone.number})</span>
                  </a>

                  <div className="flex items-start text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <MapPin className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.address.formatted}</span>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-7">
                <ContactForm preselectedService={service.title} />
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
