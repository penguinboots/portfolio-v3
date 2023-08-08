"use client";

import { useEffect, useRef } from "react";

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const c = canvas.getContext("2d");

      if (c) {
        const image = new Image();
        image.src = "/placeholders/1.png";

        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;

          c.drawImage(image, 0, 0, image.width, image.height);
        };
      }
    }
  }, []);
  
  return (
    <canvas ref={canvasRef} className="absolute h-full w-full bg-slate-500" />
  );
};

export default Game;
