import * as React from 'react';

interface LogoMarkProps { size?: number; title?: string; variant?: 'full' | 'icon' }

export const LogoMark: React.FC<LogoMarkProps> = ({ size = 48, title = 'FirstPharmaJob Logo', variant = 'icon' }) => {
  const id = React.useId();
  const gradId = `logo-gradient-${id}`;
  const brainClipId = `brain-clip-${id}`;
  const textPathTopId = `text-path-top-${id}`;
  const textPathBottomId = `text-path-bottom-${id}`;
  
  // For the full logo with text, we need a larger viewBox
  const viewBoxSize = variant === 'full' ? 400 : 200;
  const centerPoint = viewBoxSize / 2;
  const outerRadius = variant === 'full' ? 180 : 90;
  const innerRadius = variant === 'full' ? 160 : 75;
  
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      role="img"
      aria-labelledby={`${gradId}-title`}
      className="select-none shrink-0"
    >
      <title id={`${gradId}-title`}>{title}</title>
      <defs>
        {/* Main gradient for the ring */}
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        
        {/* Brain gradient */}
        <linearGradient id={`brain-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        
        {/* Neural network gradient */}
        <radialGradient id={`neural-gradient-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </radialGradient>
        
        {/* Clip path for brain area */}
        <clipPath id={brainClipId}>
          <circle cx={centerPoint} cy={centerPoint} r={innerRadius - 10} />
        </clipPath>
        
        {/* Circular text paths */}
        {variant === 'full' && (
          <>
            <path id={textPathTopId} d={`M ${centerPoint - outerRadius + 30} ${centerPoint} A ${outerRadius - 30} ${outerRadius - 30} 0 1 1 ${centerPoint + outerRadius - 30} ${centerPoint}`} />
            <path id={textPathBottomId} d={`M ${centerPoint + outerRadius - 30} ${centerPoint} A ${outerRadius - 30} ${outerRadius - 30} 0 1 1 ${centerPoint - outerRadius + 30} ${centerPoint}`} />
          </>
        )}
      </defs>
      
      {/* Outer ring with gradient */}
      <circle 
        cx={centerPoint} 
        cy={centerPoint} 
        r={outerRadius} 
        fill={`url(#${gradId})`}
        className="drop-shadow-lg"
      />
      
      {/* Inner circle - dark background for brain */}
      <circle 
        cx={centerPoint} 
        cy={centerPoint} 
        r={innerRadius} 
        fill="#1e293b"
      />
      
      {/* Decorative dots */}
      <circle cx={centerPoint - outerRadius + 20} cy={centerPoint} r="4" fill="#60a5fa" />
      <circle cx={centerPoint + outerRadius - 20} cy={centerPoint} r="4" fill="#60a5fa" />
      
      {/* Brain Design */}
      <g clipPath={`url(#${brainClipId})`}>
        {/* Main brain shape - left hemisphere */}
        <path 
          d={`M ${centerPoint - 40} ${centerPoint - 30} 
              Q ${centerPoint - 50} ${centerPoint - 45} ${centerPoint - 35} ${centerPoint - 50}
              Q ${centerPoint - 15} ${centerPoint - 55} ${centerPoint - 5} ${centerPoint - 45}
              Q ${centerPoint - 10} ${centerPoint - 25} ${centerPoint - 15} ${centerPoint - 10}
              Q ${centerPoint - 25} ${centerPoint + 10} ${centerPoint - 35} ${centerPoint + 20}
              Q ${centerPoint - 45} ${centerPoint + 35} ${centerPoint - 30} ${centerPoint + 45}
              Q ${centerPoint - 20} ${centerPoint + 50} ${centerPoint - 5} ${centerPoint + 40}
              Q ${centerPoint - 10} ${centerPoint + 25} ${centerPoint - 15} ${centerPoint + 10}
              Q ${centerPoint - 20} ${centerPoint - 5} ${centerPoint - 30} ${centerPoint - 15}
              Q ${centerPoint - 40} ${centerPoint - 25} ${centerPoint - 40} ${centerPoint - 30} Z`}
          fill={`url(#brain-gradient-${id})`}
          opacity="0.9"
        />
        
        {/* Main brain shape - right hemisphere */}
        <path 
          d={`M ${centerPoint + 40} ${centerPoint - 30} 
              Q ${centerPoint + 50} ${centerPoint - 45} ${centerPoint + 35} ${centerPoint - 50}
              Q ${centerPoint + 15} ${centerPoint - 55} ${centerPoint + 5} ${centerPoint - 45}
              Q ${centerPoint + 10} ${centerPoint - 25} ${centerPoint + 15} ${centerPoint - 10}
              Q ${centerPoint + 25} ${centerPoint + 10} ${centerPoint + 35} ${centerPoint + 20}
              Q ${centerPoint + 45} ${centerPoint + 35} ${centerPoint + 30} ${centerPoint + 45}
              Q ${centerPoint + 20} ${centerPoint + 50} ${centerPoint + 5} ${centerPoint + 40}
              Q ${centerPoint + 10} ${centerPoint + 25} ${centerPoint + 15} ${centerPoint + 10}
              Q ${centerPoint + 20} ${centerPoint - 5} ${centerPoint + 30} ${centerPoint - 15}
              Q ${centerPoint + 40} ${centerPoint - 25} ${centerPoint + 40} ${centerPoint - 30} Z`}
          fill={`url(#brain-gradient-${id})`}
          opacity="0.9"
        />
        
        {/* Central division line */}
        <line 
          x1={centerPoint} 
          y1={centerPoint - 50} 
          x2={centerPoint} 
          y2={centerPoint + 45} 
          stroke="#1e293b" 
          strokeWidth="2"
        />
        
        {/* Neural network connections */}
        <g stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.6">
          {/* Horizontal connections */}
          <line x1={centerPoint - 30} y1={centerPoint - 20} x2={centerPoint + 30} y2={centerPoint - 20} />
          <line x1={centerPoint - 25} y1={centerPoint} x2={centerPoint + 25} y2={centerPoint} />
          <line x1={centerPoint - 20} y1={centerPoint + 20} x2={centerPoint + 20} y2={centerPoint + 20} />
          
          {/* Curved connections */}
          <path d={`M ${centerPoint - 20} ${centerPoint - 30} Q ${centerPoint} ${centerPoint - 15} ${centerPoint + 20} ${centerPoint - 30}`} />
          <path d={`M ${centerPoint - 15} ${centerPoint + 30} Q ${centerPoint} ${centerPoint + 15} ${centerPoint + 15} ${centerPoint + 30}`} />
          
          {/* Diagonal connections */}
          <line x1={centerPoint - 25} y1={centerPoint - 25} x2={centerPoint + 25} y2={centerPoint + 25} />
          <line x1={centerPoint + 25} y1={centerPoint - 25} x2={centerPoint - 25} y2={centerPoint + 25} />
        </g>
        
        {/* Neural nodes */}
        <g fill="#fbbf24" opacity="0.8">
          <circle cx={centerPoint - 20} cy={centerPoint - 20} r="2" />
          <circle cx={centerPoint + 20} cy={centerPoint - 20} r="2" />
          <circle cx={centerPoint - 15} cy={centerPoint} r="2" />
          <circle cx={centerPoint + 15} cy={centerPoint} r="2" />
          <circle cx={centerPoint - 10} cy={centerPoint + 20} r="2" />
          <circle cx={centerPoint + 10} cy={centerPoint + 20} r="2" />
          <circle cx={centerPoint} cy={centerPoint - 30} r="3" />
          <circle cx={centerPoint} cy={centerPoint + 30} r="3" />
        </g>
        
        {/* Pulsing center node */}
        <circle cx={centerPoint} cy={centerPoint} r="4" fill="#60a5fa" opacity="0.9">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Circular text - only for full variant */}
      {variant === 'full' && (
        <>
          <text fontSize="16" fill="#3b82f6" fontWeight="bold" fontFamily="sans-serif">
            <textPath href={`#${textPathTopId}`} startOffset="0%">
              FIRSTPHARMAJOB
            </textPath>
          </text>
          
          <text fontSize="14" fill="#8b5cf6" fontWeight="600" fontFamily="sans-serif">
            <textPath href={`#${textPathBottomId}`} startOffset="0%">
              FUTURE NOW
            </textPath>
          </text>
        </>
      )}
    </svg>
  );
};
