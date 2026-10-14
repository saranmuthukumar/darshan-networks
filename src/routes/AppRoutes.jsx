import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy-loaded pages for optimized route-level code splitting
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Service Detail Pages
const NetworkingPage = lazy(() => import('../pages/service-pages/NetworkingPage'));
const ComputersPage = lazy(() => import('../pages/service-pages/ComputersPage'));
const PrintersPage = lazy(() => import('../pages/service-pages/PrintersPage'));
const CCTVPage = lazy(() => import('../pages/service-pages/CCTVPage'));
const BiometricAccessPage = lazy(() => import('../pages/service-pages/BiometricAccessPage'));
const WifiPage = lazy(() => import('../pages/service-pages/WifiPage'));
const IntercomPage = lazy(() => import('../pages/service-pages/IntercomPage'));
const AutomationPage = lazy(() => import('../pages/service-pages/AutomationPage'));
const PowerBackupPage = lazy(() => import('../pages/service-pages/PowerBackupPage'));
const SpecializedITPage = lazy(() => import('../pages/service-pages/SpecializedITPage'));

// Fallback loader
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-brand-blue rounded-full animate-spin mb-4" />
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Loading Darshan Networks...
      </span>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          
          {/* Specific Service Detail Routes */}
          <Route path="services/networking" element={<NetworkingPage />} />
          <Route path="services/computers" element={<ComputersPage />} />
          <Route path="services/printers" element={<PrintersPage />} />
          <Route path="services/cctv" element={<CCTVPage />} />
          <Route path="services/biometric-access-control" element={<BiometricAccessPage />} />
          <Route path="services/wifi" element={<WifiPage />} />
          <Route path="services/intercom" element={<IntercomPage />} />
          <Route path="services/automation" element={<AutomationPage />} />
          <Route path="services/power-backup" element={<PowerBackupPage />} />
          <Route path="services/specialized-it" element={<SpecializedITPage />} />

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
