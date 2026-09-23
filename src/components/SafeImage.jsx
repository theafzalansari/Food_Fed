import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function SafeImage({ src, alt, className = '', fallbackBg = 'bg-emerald-800', children }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-[#E2EBE4] animate-pulse flex items-center justify-center text-[#2D563F]/40 text-xs">
          Loading image...
        </div>
      )}
      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className={`w-full h-full ${fallbackBg} flex flex-col items-center justify-center p-4 text-center text-white/80`}>
          <ImageOff className="w-8 h-8 mb-2 opacity-60" />
          <span className="text-xs font-medium">{alt}</span>
        </div>
      )}
      {children}
    </div>
  );
}
