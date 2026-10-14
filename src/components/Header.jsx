import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, 
  Network, Laptop, Printer, ShieldCheck, Fingerprint, 
  Wifi, PhoneCall, Radio, Zap, Cpu, ArrowRight 
} from 'lucide-react';
import { NAV_LINKS } from '../data/navigation';
import MobileMenu from './MobileMenu';
import BrandLogo from './BrandLogo';

const SERVICE_ICONS = {
  networking: Network,
  computers: Laptop,
  printers: Printer,
  cctv: ShieldCheck,
  'biometric-access-control': Fingerprint,
  wifi: Wifi,
  intercom: PhoneCall,
  automation: Radio,
  'power-backup': Zap,
  'specialized-it': Cpu,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll detection for sticky shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      {/* Main Clean Header (Top utility bar removed as requested) */}
      <header 
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          isScrolled 
            ? 'shadow-sm border-b border-slate-200/90 py-2.5' 
            : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo with D emblem + DARSHAN NETWORKS text */}
            <Link 
              to="/" 
              className="group flex items-center focus:outline-none focus:ring-2 focus:ring-brand-blue/30 rounded-lg"
              aria-label="Darshan Networks Home"
            >
              <BrandLogo imgClassName="h-10 sm:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive 
                      ? 'text-brand-blue bg-blue-50/80 font-bold' 
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive 
                      ? 'text-brand-blue bg-blue-50/80 font-bold' 
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isServicesActive
                      ? 'text-brand-blue bg-blue-50/80 font-bold'
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div 
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    role="menu"
                  >
                    <div className="col-span-2 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between px-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Our Technology Services
                      </span>
                      <Link 
                        to="/services" 
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-brand-blue hover:text-brand-blue-bright flex items-center"
                      >
                        All Services Directory
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>

                    {NAV_LINKS.find(n => n.name === 'Services')?.children?.filter(c => c.path !== '/services').map((item) => {
                      const serviceKey = item.path.replace('/services/', '');
                      const IconComponent = SERVICE_ICONS[serviceKey] || Network;
                      const isChildActive = location.pathname === item.path;

                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-start p-2.5 rounded-xl transition-colors group ${
                            isChildActive 
                              ? 'bg-blue-50/80 border border-blue-100' 
                              : 'hover:bg-slate-50'
                          }`}
                          role="menuitem"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 transition-colors ${
                            isChildActive 
                              ? 'bg-brand-blue text-white' 
                              : 'bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                          }`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-brand-blue transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <NavLink 
                to="/services/networking" 
                className={({ isActive }) => 
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive 
                      ? 'text-brand-blue bg-blue-50/80 font-bold' 
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`
                }
              >
                Networking
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive 
                      ? 'text-brand-blue bg-blue-50/80 font-bold' 
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`
                }
              >
                Contact Us
              </NavLink>
            </nav>

            {/* Action Buttons: Quote only */}
            <div className="flex items-center space-x-3">
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-sm hover:shadow transition-all active:scale-[0.98]"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-brand-blue hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-800" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
