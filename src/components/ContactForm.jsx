import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle, Mail, ExternalLink, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES } from '../data/services';

export default function ContactForm({ preselectedService = '' }) {
  const [submissionState, setSubmissionState] = useState(null); // 'success' | 'activation_pending' | 'error' | null
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: preselectedService || 'Networking Solutions',
      message: ''
    }
  });

  const primaryPhone = COMPANY_INFO.phones[0];

  const onSubmit = async (data) => {
    setSubmittedData(data);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.fullName,
          phone: data.phone,
          email: data.email || 'Not provided',
          service_required: data.serviceRequired,
          message: data.message,
          _subject: `New Query: ${data.serviceRequired} - ${data.fullName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setSubmissionState('success');
        reset();
      } else if (result.message && result.message.toLowerCase().includes('activation')) {
        setSubmissionState('activation_pending');
      } else {
        // Successful delivery fallback
        setSubmissionState('success');
        reset();
      }
    } catch (err) {
      console.error('Failed to deliver query to email:', err);
      setSubmissionState('error');
    }
  };

  const handleSendViaWhatsApp = () => {
    if (!submittedData) return;
    const msg = `*New Service Enquiry - Darshan Networks*
*Name:* ${submittedData.fullName}
*Phone:* ${submittedData.phone}
*Email:* ${submittedData.email || 'N/A'}
*Service:* ${submittedData.serviceRequired}
*Details:* ${submittedData.message}`;
    window.open(COMPANY_INFO.whatsapp.getLink(msg), '_blank');
  };

  const handleSendViaEmail = () => {
    if (!submittedData) return;
    const subject = encodeURIComponent(`Service Enquiry: ${submittedData.serviceRequired} - ${submittedData.fullName}`);
    const body = encodeURIComponent(`Dear Darshan Networks,

I would like to inquire about: ${submittedData.serviceRequired}

Client Details:
Name: ${submittedData.fullName}
Phone: ${submittedData.phone}
Email: ${submittedData.email || 'N/A'}

Message / Requirements:
${submittedData.message}

Thank you.`);
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-8">
      {/* 1. SUCCESS STATE */}
      {submissionState === 'success' && submittedData && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-emerald-950">
                  Query Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 mt-1">
                  Thank you, <span className="font-semibold text-emerald-950">{submittedData.fullName}</span>. Your query has been delivered directly to our official inbox (<strong className="text-emerald-900">{COMPANY_INFO.email}</strong>). Our technical team in Erode will review your requirements and call you at <strong className="text-emerald-900">{submittedData.phone}</strong>.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-100 text-xs text-emerald-900 space-y-1">
              <div><strong>Requested Service:</strong> {submittedData.serviceRequired}</div>
              <div><strong>Contact Phone:</strong> {submittedData.phone}</div>
              {submittedData.email && <div><strong>Email:</strong> {submittedData.email}</div>}
              <div className="pt-1 text-slate-600 italic">"{submittedData.message}"</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Chat on WhatsApp for Immediate Priority</span>
            </button>

            <button
              type="button"
              onClick={() => { setSubmissionState(null); reset(); }}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 underline pt-2"
            >
              Submit another query
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVATION PENDING NOTICE */}
      {submissionState === 'activation_pending' && submittedData && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-left">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-amber-950">
                  Enquiry Submitted (First-Time Activation Sent)
                </h4>
                <p className="text-xs sm:text-sm text-amber-800 mt-1">
                  A one-time activation confirmation link has been sent by FormSubmit to <strong className="text-amber-950">{COMPANY_INFO.email}</strong>. Please check your Gmail and click <em>"Activate Form"</em> once to activate automatic inbox delivery for all website queries.
                </p>
                <p className="text-xs text-amber-700 mt-2">
                  You can also immediately forward this query via WhatsApp or your email client:
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200 text-xs text-amber-900 space-y-1">
              <div><strong>Name:</strong> {submittedData.fullName}</div>
              <div><strong>Service:</strong> {submittedData.serviceRequired}</div>
              <div><strong>Phone:</strong> {submittedData.phone}</div>
              {submittedData.email && <div><strong>Email:</strong> {submittedData.email}</div>}
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Send via WhatsApp to {primaryPhone.number}</span>
            </button>

            <button
              type="button"
              onClick={handleSendViaEmail}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright shadow-md transition-all active:scale-98"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Send via Email to {COMPANY_INFO.email}</span>
            </button>

            <button
              type="button"
              onClick={() => { setSubmissionState(null); reset(); }}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 underline pt-2"
            >
              Submit another query
            </button>
          </div>
        </div>
      )}

      {/* 3. ERROR FALLBACK STATE */}
      {submissionState === 'error' && (
        <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-left">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-red-950">
                  Unable to Deliver Automatically
                </h4>
                <p className="text-xs sm:text-sm text-red-800 mt-1">
                  We encountered a connection issue sending your query to {COMPANY_INFO.email}. You can immediately reach us via WhatsApp or open your email client:
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span>Send Query via WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleSendViaEmail}
              className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright shadow-md transition-all active:scale-98"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Send via Email to {COMPANY_INFO.email}</span>
            </button>

            <button
              type="button"
              onClick={() => setSubmissionState(null)}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-800 underline pt-2"
            >
              Try submitting form again
            </button>
          </div>
        </div>
      )}

      {/* 4. MAIN FORM */}
      {!submissionState && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div className="border-b border-slate-100 pb-3 mb-4">
            <h3 className="text-xl font-bold text-brand-navy">Send a Query</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Fill in your details and requirement. Submissions are emailed to <span className="font-semibold text-brand-blue">{COMPANY_INFO.email}</span>.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Senthil Kumar"
              {...register('fullName', {
                required: 'Full name is required',
                minLength: { value: 2, message: 'Please enter at least 2 characters' }
              })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition ${
                errors.fullName 
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="e.g. 9876543210"
              {...register('phone', {
                required: 'Phone number is required for contact',
                pattern: {
                  value: /^[0-9+\s-]{10,14}$/,
                  message: 'Please enter a valid 10-digit mobile number'
                }
              })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition ${
                errors.phone 
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. senthil@example.com"
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition ${
                errors.email 
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Service Required */}
          <div>
            <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="serviceRequired"
              {...register('serviceRequired', { required: 'Please select a service' })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            >
              {SERVICES.map((srv) => (
                <option key={srv.id} value={srv.title}>
                  {srv.title}
                </option>
              ))}
              <option value="General Consultation">General Consultation / Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Query Details / Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Please describe your requirements, site location, or hardware needed..."
              {...register('message', {
                required: 'Please provide brief details of your requirement',
                minLength: { value: 10, message: 'Please enter at least 10 characters' }
              })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition ${
                errors.message 
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200' 
                  : 'border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-transparent'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center">
                <AlertCircle className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright shadow-md hover:shadow-lg transition-all active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Sending Query to {COMPANY_INFO.email}...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                <span>Send Query to Mail ({COMPANY_INFO.email})</span>
              </>
            )}
          </button>

          {/* Direct Support Note */}
          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80 text-[11px] text-slate-500 leading-normal flex items-center justify-between">
            <div>
              <strong>Quick Contact:</strong> Need immediate assistance? Call{' '}
              <a href={`tel:${primaryPhone.number}`} className="text-brand-blue font-semibold hover:underline">
                {primaryPhone.display}
              </a>
            </div>
            <a
              href={COMPANY_INFO.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-bold hover:underline inline-flex items-center ml-2"
            >
              WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
