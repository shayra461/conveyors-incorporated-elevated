import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = '1974',
  afterLabel = 'Today',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={`relative overflow-hidden w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/11] rounded-2xl shadow-2xl border border-white/10 select-none bg-slate-900 ${className}`}>
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After comparison"
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Before Image (Foreground clipped) */}
      <img
        src={beforeImage}
        alt="Before comparison"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
        draggable="false"
      />

      {/* Slider Line Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20 pointer-events-none shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white hover:bg-slate-50 active:scale-95 border border-slate-200 rounded-full shadow-2xl flex items-center justify-center text-slate-800 transition-transform duration-150 pointer-events-none z-30">
          <ChevronLeft className="w-3.5 h-3.5 mr-[-2px]" />
          <ChevronRight className="w-3.5 h-3.5 ml-[-2px]" />
        </div>
      </div>

      {/* Badges */}
      <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10 pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 bg-accent/90 border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md z-10 pointer-events-none">
        {afterLabel}
      </div>

      {/* Invisible Range Input Overlay for Drag/Touch control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-none"
        aria-label="Before/After image slider"
      />
    </div>
  );
};
