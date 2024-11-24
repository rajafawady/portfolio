'use client';
import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const columns = Array(Math.floor(canvas.width / 20)).fill(0);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas on each frame

      ctx.fillStyle = '#0f0'; // Green color for the matrix rain
      ctx.font = '20px monospace';

      columns.forEach((y, index) => {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        ctx.fillText(text, index * 20, y);
        columns[index] = y > canvas.height || Math.random() > 0.95 ? 0 : y + 20;
      });
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ height: '100vh', pointerEvents: 'none' }} 
    />
  );
};
