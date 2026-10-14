import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you were looking for does not exist on Darshan Networks."
      />

      <section className="py-24 sm:py-32 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="w-20 h-20 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto text-3xl font-extrabold">
            404
          </div>

          <h1 className="text-3xl font-extrabold text-brand-navy">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for may have been moved or does not exist. Please check the URL or navigate back to our home page.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-bright transition-colors text-sm shadow"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
            >
              <Search className="w-4 h-4 mr-2" />
              <span>Browse Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
