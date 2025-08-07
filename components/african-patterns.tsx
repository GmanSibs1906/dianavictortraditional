import React from 'react';

export const AfricanFloralPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute ${className}`}
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="floralPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="8" fill="#c4403e" opacity="0.3"/>
        <path d="M20 12 Q28 20 20 28 Q12 20 20 12" fill="#d66058" opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#floralPattern)"/>
  </svg>
);

export const AfricanGeometricPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute ${className}`}
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="geometricPattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <polygon points="15,5 25,20 15,25 5,20" fill="#3d6852" opacity="0.4"/>
        <polygon points="15,10 20,15 15,20 10,15" fill="#5a8268" opacity="0.6"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#geometricPattern)"/>
  </svg>
);

export const AfricanBorderPattern = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute ${className}`}
    viewBox="0 0 400 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="borderPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="20" height="10" fill="#3d6852" opacity="0.6"/>
        <rect x="20" y="10" width="20" height="10" fill="#c4403e" opacity="0.6"/>
        <circle cx="10" cy="5" r="3" fill="#d4a574" opacity="0.8"/>
        <circle cx="30" cy="15" r="3" fill="#d4a574" opacity="0.8"/>
      </pattern>
    </defs>
    <rect width="400" height="20" fill="url(#borderPattern)"/>
  </svg>
);

export const AfricanTextileOverlay = ({ className = "" }: { className?: string }) => (
  <svg 
    className={`absolute inset-0 pointer-events-none ${className}`}
    viewBox="0 0 800 600" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="textilePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        {/* Green cellular pattern */}
        <polygon points="30,5 50,20 45,40 15,40 10,20" fill="#3d6852" opacity="0.1"/>
        <polygon points="30,10 40,20 35,35 25,35 20,20" fill="#5a8268" opacity="0.15"/>
        
        {/* Red floral elements */}
        <ellipse cx="45" cy="45" rx="8" ry="6" fill="#c4403e" opacity="0.1"/>
        <ellipse cx="15" cy="15" rx="6" ry="8" fill="#d66058" opacity="0.12"/>
        
        {/* Gold accent dots */}
        <circle cx="30" cy="30" r="2" fill="#d4a574" opacity="0.3"/>
        <circle cx="50" cy="10" r="1.5" fill="#d4a574" opacity="0.4"/>
        <circle cx="10" cy="50" r="1.5" fill="#d4a574" opacity="0.4"/>
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#textilePattern)"/>
  </svg>
);

export const AfricanCornerDecoration = ({ 
  corner = "top-left", 
  className = "" 
}: { 
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) => {
  const getPositionClasses = () => {
    switch (corner) {
      case "top-left": return "top-0 left-0";
      case "top-right": return "top-0 right-0 transform rotate-90";
      case "bottom-left": return "bottom-0 left-0 transform rotate-270";
      case "bottom-right": return "bottom-0 right-0 transform rotate-180";
      default: return "top-0 left-0";
    }
  };

  return (
    <svg 
      className={`absolute w-24 h-24 ${getPositionClasses()} ${className}`}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Corner decorative pattern */}
      <path d="M0 0 Q50 25 100 0 L100 30 Q50 50 0 30 Z" fill="#3d6852" opacity="0.6"/>
      <path d="M0 30 Q30 45 60 30 L60 50 Q30 65 0 50 Z" fill="#c4403e" opacity="0.6"/>
      <circle cx="25" cy="15" r="4" fill="#d4a574" opacity="0.8"/>
      <circle cx="15" cy="40" r="3" fill="#d4a574" opacity="0.8"/>
    </svg>
  );
}; 