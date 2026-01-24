import React, { useEffect, useRef } from "react";

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    type Particle = {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.floor((canvas.width * canvas.height) / 7000);

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        // Use current foreground color with low opacity for the particles
        ctx.fillStyle = `rgba(100, 100, 100, ${p.opacity * 0.2})`;
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full mix-blend-screen opacity-40" />
      
      {/* Accent Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="hline absolute h-[1px] left-0 right-0 bg-border/40 top-[20%] animate-draw-x" />
        <div className="hline absolute h-[1px] left-0 right-0 bg-border/40 top-[50%] animate-draw-x delay-200" />
        <div className="hline absolute h-[1px] left-0 right-0 bg-border/40 top-[80%] animate-draw-x delay-400" />
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-border/40 left-[20%] animate-draw-y delay-500" />
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-border/40 left-[50%] animate-draw-y delay-700" />
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-border/40 left-[80%] animate-draw-y delay-900" />
      </div>

      <style>{`
        @keyframes draw-x {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes draw-y {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        .animate-draw-x {
          transform-origin: center;
          animation: draw-x 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-draw-y {
          transform-origin: top;
          animation: draw-y 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
