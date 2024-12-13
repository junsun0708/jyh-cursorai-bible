'use client'

import { useState, useEffect } from 'react'

interface VideoBackgroundProps {
  src: string
  className?: string
  fallbackImage?: string
}

export function VideoBackground({ src, className, fallbackImage }: VideoBackgroundProps) {
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 비디오 로드 상태 체크
    const video = document.createElement('video');
    video.src = src;
    video.onloadeddata = () => {
      setIsLoading(false);
    };
    video.onerror = () => {
      console.error('Video failed to load');
      setVideoError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading) {
    return (
      <div className={`relative overflow-hidden ${className} bg-blue-600`} />
    );
  }

  if (videoError && fallbackImage) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{
          backgroundImage: `url(${fallbackImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        onError={() => setVideoError(true)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}