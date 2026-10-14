import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../data/companyInfo';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  image = '/images/darshan-networks-logo.png' 
}) {
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name} — Erode`
    : `${COMPANY_INFO.name} | Complete Technology Solutions Under One Roof — Erode`;

  const metaDesc = description || `${COMPANY_INFO.name} provides dependable IT infrastructure, computer & printer services, networking, CCTV surveillance, biometric access control, and automation in Erode, Tamil Nadu.`;

  const metaKeywords = keywords || 'Computer sales and service in Erode, Printer service in Erode, Networking solutions in Erode, CCTV installation in Erode, Biometric attendance systems in Erode, Wi-Fi installation in Erode, Gate automation in Erode, Boom barrier automation in Erode, UPS sales and service in Erode';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={COMPANY_INFO.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
