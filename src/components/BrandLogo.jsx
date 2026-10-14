import React from 'react';

export default function BrandLogo({ 
  className = '', 
  imgClassName = 'h-10 sm:h-12', 
  isDark = false,
  showTagline = false 
}) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3D 'D' Emblem */}
      <img
        src="/images/darshan-networks-logo.png"
        alt="Darshan Networks Logo"
        className={`${imgClassName} w-auto object-contain flex-shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        width="48"
        height="48"
      />

      {/* Typography: DARSHAN NETWORKS */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span 
            className={`font-black text-xl sm:text-2xl tracking-tight leading-none ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontFamily: 'Manrope, Inter, sans-serif' }}
          >
            DARSHAN
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1.5px] w-2.5 bg-brand-yellow rounded-full flex-shrink-0" />
          <span 
            className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.24em] uppercase text-brand-yellow leading-none"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            NETWORKS
          </span>
          <span className="h-[1.5px] w-2.5 bg-brand-yellow rounded-full flex-shrink-0" />
        </div>

        {showTagline && (
          <span className={`text-[9px] tracking-wider font-semibold uppercase mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Connect · Secure · Automate
          </span>
        )}
      </div>
    </div>
  );
}
