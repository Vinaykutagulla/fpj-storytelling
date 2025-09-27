import React from 'react';

/*
  LogoMark: Simplified circular emblem with:
  - Gradient ring using CSS vars (theme aware)
  - Heritage gold tree silhouette (placeholder simplified path)
  - Accent dots (cyan/blue depending on theme)
  Accessible: role=img + title
*/

const LogoMark = ({ size = 56, title = 'FirstPharmaJob Logo' }) => {
  const id = React.useId();
  const gradId = `logo-ring-gradient-${id}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-labelledby={`${gradId}-title`}
      className="select-none shrink-0"
    >
      <title id={`${gradId}-title`}>{title}</title>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--logo-ring-start)" />
          <stop offset="100%" stopColor="var(--logo-ring-end)" />
        </linearGradient>
        <clipPath id={`tree-clip-${id}`}><circle cx="100" cy="100" r="70" /></clipPath>
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" fill={`url(#${gradId})`} />
      {/* Inner stroke accent */}
      <circle cx="100" cy="100" r="82" fill="none" stroke="var(--logo-accent)" strokeWidth="4" />
      {/* Accent dots */}
      <circle cx="38" cy="100" r="6" fill="var(--logo-accent)" />
      <circle cx="162" cy="100" r="6" fill="var(--logo-accent)" />

      {/* Tree (simplified placeholder path). Replace with detailed path if provided later. */}
      <g clipPath={`url(#tree-clip-${id})`}>
        <path
          d="M100 42c-22 0-40 16-40 36 0 14 9 26 22 32v18h-8a4 4 0 0 0-4 4v10h60v-10a4 4 0 0 0-4-4h-8v-18c13-6 22-18 22-32 0-20-18-36-40-36Zm0 12c15 0 28 10 28 24 0 11-8 20-18 23a6 6 0 0 0-4 5v20h-12v-20a6 6 0 0 0-4-5c-10-3-18-12-18-23 0-14 13-24 28-24Z"
          fill="var(--logo-gold)"
        />
        {/* Optional subtle root lines */}
        <path d="M100 128c-6 8-14 14-24 18 10-2 20-5 24-10 4 5 14 8 24 10-10-4-18-10-24-18Z" fill="var(--logo-gold)" fillOpacity="0.8" />
      </g>
    </svg>
  );
};

export default LogoMark;
