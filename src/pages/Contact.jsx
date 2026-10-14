import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  ExternalLink, ShieldCheck 
} from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Contact() {
  const primaryPhone = COMPANY_INFO.phones[0];
  const secondaryPhone = COMPANY_INFO.phones[1];

  const whatsappUrl = COMPANY_INFO.whatsapp.getLink(
    'Hello Darshan Networks, I would like to get in touch regarding your technology services in Erode.'
  );

  return (
    <>
      <SEO 
        title="Contact Us | Darshan Networks — Thindal, Erode"
        description="Contact Darshan Networks in Erode for networking, computer service, CCTV camera installation, biometric attendance, gate automation, and UPS backup. Call +91 99945 56999."
      />

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />

      {/* Hero Section - Clean Light Design */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-amber-50/20 py-12 sm:py-16 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
              REACH OUR TEAM
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Get in Touch with Darshan Networks
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Have questions regarding structured cabling, CCTV surveillance, PC repairs, gate automation, or toner refilling? Reach out to our team in Erode for prompt technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards & Form Section */}
      <section className="py-16 sm:py-20 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                  OFFICE & REACHABILITY
                </span>
                <h2 className="text-2xl font-extrabold text-brand-navy mt-1">
                  Contact Information
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Visit our office or call our verified numbers during operating hours.
                </p>
              </div>

              {/* Address Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-brand-navy">Registered Office Address</h3>
                  <address className="not-italic text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>{COMPANY_INFO.address.line1}</strong><br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                  </address>
                </div>
              </div>

              {/* Phone Numbers Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-bold text-brand-navy">Phone Support</h3>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <div>
                      <a 
                        href={`tel:${primaryPhone.number}`} 
                        className="font-semibold text-brand-blue hover:underline inline-flex items-center"
                      >
                        {primaryPhone.display}
                      </a>
                      <span className="text-[11px] text-slate-500 ml-2">(Primary & WhatsApp)</span>
                    </div>
                    <div>
                      <a 
                        href={`tel:${secondaryPhone.number}`} 
                        className="font-semibold text-brand-blue hover:underline inline-flex items-center"
                      >
                        {secondaryPhone.display}
                      </a>
                      <span className="text-[11px] text-slate-500 ml-2">(Support Line)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-emerald-50/80 p-5 rounded-2xl border border-emerald-200 shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 fill-white/20" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-sm font-bold text-emerald-950">WhatsApp Direct Chat</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Connect instantly with our technician desk for quick queries or site photos.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
                  >
                    <span>Message +91 {COMPANY_INFO.whatsapp.number}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-brand-navy">Email Enquiries</h3>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-xs sm:text-sm font-semibold text-brand-blue hover:underline break-all block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500">Official email for RFP, purchase orders and quotations.</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-slate-600">
                  <h3 className="text-sm font-bold text-brand-navy">Working Hours</h3>
                  <p>{COMPANY_INFO.workingHours.days}: <strong>{COMPANY_INFO.workingHours.hours}</strong></p>
                  <p className="text-slate-500">{COMPANY_INFO.workingHours.sunday}</p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* Map Location Section */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200/90 shadow-card overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  OFFICE LOCATION MAP
                </span>
                <h3 className="text-lg font-bold text-brand-navy">
                  Darshan Networks — Lakshmi Garden, Thindal, Erode
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Lakshmi+Garden,+Thindal,+Erode,+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand-blue hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 bg-slate-100 relative">
              <iframe
                title="Darshan Networks Location Map - Thindal, Erode"
                src={COMPANY_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
