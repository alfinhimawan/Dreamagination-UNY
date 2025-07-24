"use client";

import React from "react";
import clsx from "clsx";
import { useScrollAnimation } from "~/hooks";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scaleIn' | 'rotateIn';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollAnimationWrapper({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1,
}: ScrollAnimationWrapperProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out opacity-0`;
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`;
    const delayClass = delay > 0 ? `delay-[${Math.round(delay * 1000)}ms]` : '';
    
    let transformClasses = '';
    let visibleClasses = 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0';

    switch (animation) {
      case 'slideUp':
        transformClasses = 'translate-y-8';
        break;
      case 'slideDown':
        transformClasses = '-translate-y-8';
        break;
      case 'slideLeft':
        transformClasses = 'translate-x-8';
        break;
      case 'slideRight':
        transformClasses = '-translate-x-8';
        break;
      case 'fadeIn':
        transformClasses = '';
        break;
      case 'scaleIn':
        transformClasses = 'scale-95';
        break;
      case 'rotateIn':
        transformClasses = 'rotate-3 scale-95';
        break;
    }

    const currentClasses = isVisible 
      ? `${baseClasses} ${durationClass} ${delayClass} ${visibleClasses}`
      : `${baseClasses} ${durationClass} ${delayClass} ${transformClasses}`;

    return currentClasses;
  };

  return (
    <div 
      ref={elementRef as React.RefObject<HTMLDivElement>} 
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
