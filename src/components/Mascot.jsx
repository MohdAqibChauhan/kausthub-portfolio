import React, { useEffect, useRef } from 'react';
import { Rive } from '@rive-app/canvas';

export default function Mascot() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let r = null;
    try {
      r = new Rive({
        src: '/flame-man.riv',
        canvas: canvas,
        autoplay: true,
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
      });
    } catch (err) {
      console.warn('Rive animation failed to load, falling back to SVG/canvas', err);
    }

    return () => {
      if (r) {
        try {
          r.cleanup();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-[120px] h-[120px] s:w-[140px] s:h-[140px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
        width={240}
        height={240}
      />
    </div>
  );
}
