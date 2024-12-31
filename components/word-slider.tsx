"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideItem {
  word: string;
  imageUrl: string;
}

interface WordSliderProps {
  slides: SlideItem[];
}

export function WordSlider({ slides }: WordSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.imageUrl}
            alt={slide.word}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center px-4">
              {slide.word}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
