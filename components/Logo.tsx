
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 100 120" className="h-full w-auto fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
        <path 
          d="M50 0C50 0 15 45 15 75C15 95 30 110 50 110C70 110 85 95 85 75C85 45 50 0 50 0Z" 
          fill="url(#dropGradient)"
        />
        <path 
          d="M50 15C50 15 25 50 25 75C25 88 35 100 50 100" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeOpacity="0.3"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight text-[#1e3a8a]">PrimeClean</span>
        <span className="text-[0.55rem] tracking-[0.2em] font-medium text-slate-500 uppercase mt-0.5">Facility Management</span>
      </div>
    </div>
  );
};

export default Logo;
