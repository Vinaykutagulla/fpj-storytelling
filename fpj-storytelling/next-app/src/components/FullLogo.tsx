import * as React from 'react';
import { LogoMark } from './LogoMark';

interface FullLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const FullLogo: React.FC<FullLogoProps> = ({ 
  size = 200, 
  showText = true, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Main logo with tree of life */}
      <div className="relative group">
        <LogoMark 
          size={size} 
          variant="full" 
          title="FirstPharmaJob - Your Future Starts Now"
        />
        
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, #d4af37 20%, transparent 70%)'
          }}
        />
      </div>
      
      {/* Optional text below logo */}
      {showText && (
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            FirstPharmaJob
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base font-medium">
            Transforming Students into Pharmaceutical Professionals
          </p>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-amber-600 dark:text-amber-400 font-semibold">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400"></span>
            <span>FUTURE NOW</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400"></span>
          </div>
        </div>
      )}
    </div>
  );
};