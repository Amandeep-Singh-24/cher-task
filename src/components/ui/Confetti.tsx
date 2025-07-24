"use client";

import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
  rotationSpeed: number;
}

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
    const newPieces: ConfettiPiece[] = [];

    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 3 + 2,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    setPieces(newPieces);

    const animateConfetti = () => {
      setPieces(prevPieces => 
        prevPieces.map(piece => ({
          ...piece,
          x: piece.x + piece.speedX,
          y: piece.y + piece.speedY,
          rotation: piece.rotation + piece.rotationSpeed,
          speedY: piece.speedY + 0.1, // gravity
        })).filter(piece => piece.y < window.innerHeight + 20)
      );
    };

    const interval = setInterval(animateConfetti, 16); // ~60fps

    // Clean up after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setPieces([]);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
        />
      ))}
    </div>
  );
};