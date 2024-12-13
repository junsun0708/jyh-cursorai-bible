'use client'

import { useState, useEffect } from 'react'

interface VideoBackgroundProps {
  src: string
  className?: string
  fallbackImage?: string
  overlayOpacity?: string
}

export function VideoBackground({ 
  src, 
  className, 
  fallbackImage,
  overlayOpacity = "60" 
}: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    console.log('VideoBackground mounted with src:', src);
  }, [src]);

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    setIsLoading(false);
  };

  const handleVideoError = (e: any) => {
    console.error('Video loading error:', e);
    setVideoError(true);
    setIsLoading(false);
  };

  const renderFallback = () => (
    <div className="absolute inset-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-600 via-blue-800 to-blue-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    </div>
  );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-blue-600 animate-pulse" />
      )}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          className={`absolute inset-0 w-full h-full object-cover ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {videoError && (fallbackImage ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      ) : renderFallback())}
      <div className={`absolute inset-0 bg-blue-600/${overlayOpacity}`} />
    </div>
  );
}