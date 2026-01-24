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
        p.y -= p.speed * 1.5; // Increased movement speed
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.01; // Faster fade
          if (p.opacity <= 0) reset(p);
        }
        // Much higher visibility for particles
        ctx.fillStyle = `rgba(180, 180, 180, ${p.opacity * 0.8})`;
        ctx.fillRect(p.x, p.y, 1.5, Math.random() * 4 + 2);
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
      <canvas ref={canvasRef} className="w-full h-full mix-blend-screen opacity-80" />
      
      {/* Accent Lines with continuous scanning effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="hline absolute h-[1px] left-0 right-0 bg-foreground/20 top-[20%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/40 to-transparent w-[30%] animate-scan-h" />
        </div>
        <div className="hline absolute h-[1px] left-0 right-0 bg-foreground/20 top-[50%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/40 to-transparent w-[30%] animate-scan-h [animation-delay:1.5s]" />
        </div>
        <div className="hline absolute h-[1px] left-0 right-0 bg-foreground/20 top-[80%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/40 to-transparent w-[30%] animate-scan-h [animation-delay:3s]" />
        </div>
        
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-foreground/20 left-[20%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/40 to-transparent h-[30%] animate-scan-v [animation-delay:0.7s]" />
        </div>
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-foreground/20 left-[50%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/40 to-transparent h-[30%] animate-scan-v [animation-delay:2.2s]" />
        </div>
        <div className="vline absolute w-[1px] top-0 bottom-0 bg-foreground/20 left-[80%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/40 to-transparent h-[30%] animate-scan-v [animation-delay:3.7s]" />
        </div>
      </div>

      <style>{`
        @keyframes scan-h {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        @keyframes scan-v {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan-h {
          animation: scan-h 4s linear infinite;
        }
        .animate-scan-v {
          animation: scan-v 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
