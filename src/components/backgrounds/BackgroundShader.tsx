import React, { useEffect, useRef } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

/**
 * Fundo escolhido: mesh gradient WebGL + campo de estrelas.
 *
 * Regras de performance seguidas aqui:
 * - o shader roda em resolucao reduzida (gradiente suave nao precisa de 2x DPI);
 * - o campo de estrelas e pintado UMA vez no canvas, sem requestAnimationFrame;
 * - o que pisca e CSS puro (roda no compositor, nao no main thread);
 * - nenhuma camada usa mix-blend-mode sobre o canvas, que forcaria recomposicao
 *   da tela inteira a cada scroll.
 */

const seeded = (seed: number) => {
  const value = Math.sin(seed * 43758.5453123) * 10000;
  return value - Math.floor(value);
};

// estrelas que piscam: poucas, animadas por CSS
const twinkles = Array.from({ length: 18 }, (_, i) => ({
  left: seeded(i + 11) * 100,
  top: seeded(i + 211) * 100,
  size: seeded(i + 311) * 1.6 + 1.1,
  duration: seeded(i + 411) * 5 + 4,
  delay: seeded(i + 511) * 12,
}));

// estrelas cadentes: 3, com ciclos longos e primos entre si para nunca
// caírem juntas. O risco so aparece em ~12% do ciclo; o resto e espera.
const shooting = [
  { top: 6, left: 8, cycle: 19, delay: 5 },
  { top: 24, left: 46, cycle: 26, delay: 14 },
  { top: 2, left: 70, cycle: 37, delay: 27 },
];

export const BackgroundShader: React.FC = () => {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // --- campo de estrelas: pintado uma unica vez (e a cada resize) ---
  useEffect(() => {
    const canvas = starsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const paint = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      // 20% a mais de altura: sobra para o parallax sem mostrar borda vazia
      const h = window.innerHeight * 1.2;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // densidade por area, com teto para nao exagerar em monitor grande
      const count = Math.min(520, Math.round((w * h) / 4200));

      for (let i = 0; i < count; i++) {
        const x = seeded(i + 1) * w;
        const y = seeded(i + 1301) * h;
        const depth = seeded(i + 2601); // 0 = longe/apagada, 1 = perto/brilhante
        const r = 0.35 + depth * depth * 1.15;
        const alpha = 0.12 + depth * 0.62;

        // leve variacao de temperatura: nem toda estrela e branca
        const warm = seeded(i + 3901);
        const color =
          warm > 0.88
            ? `rgba(255, 226, 196, ${alpha})` // amarelada
            : warm > 0.7
              ? `rgba(190, 216, 255, ${alpha})` // azulada
              : `rgba(255, 255, 255, ${alpha})`;

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        // as maiores ganham halo - e o que da sensacao de brilho real
        if (depth > 0.93) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, r * 7);
          glow.addColorStop(0, `rgba(210, 232, 255, ${alpha * 0.5})`);
          glow.addColorStop(1, 'rgba(210, 232, 255, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, r * 7, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    paint();

    let timer: number;
    const onResize = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(paint, 220);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // --- parallax: as estrelas sobem mais devagar que a pagina ---
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        // o canvas tem 20% de altura sobrando; deslocar alem disso deixaria a
        // parte de baixo da tela sem estrela nenhuma numa pagina longa
        const folga = window.innerHeight * 0.2;
        const shift = Math.min(window.scrollY * 0.12, folga);
        // so transform: fica no compositor, nao dispara layout nem paint
        el.style.transform = `translate3d(0, ${-shift}px, 0)`;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070f]">
      <MeshGradient
        colors={['#05070f', '#0b2a63', '#0066cc', '#00aaff', '#0e6f5e']}
        distortion={0.85}
        swirl={0.55}
        speed={0.12}
        // grao fica na camada CSS: sai mais barato que recalcular ruido por pixel
        grainMixer={0.28}
        grainOverlay={0}
        // gradiente suave nao precisa de 2x DPI - principal ganho de fluidez
        minPixelRatio={1}
        maxPixelCount={1_000_000}
        webGlContextAttributes={{ antialias: false, powerPreference: 'low-power' }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />

      {/* escurece o shader para o texto continuar legivel */}
      <div className="absolute inset-0 bg-[#040814]/55" />

      {/* estrelas: canvas estatico + piscadas em CSS, tudo sob o mesmo parallax */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <canvas ref={starsRef} className="absolute inset-x-0 top-0" />

        {twinkles.map((star, i) => (
          <span
            key={`twinkle-${i}`}
            className="star-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {shooting.map((s, i) => (
        <span
          key={`shooting-${i}`}
          className="star-shooting"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDuration: `${s.cycle}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* grao sem mix-blend-mode: mesma textura, sem custo de recomposicao */}
      <div className="absolute inset-0 bg-grain-flat" />

      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_45%,transparent_40%,rgba(2,4,10,0.9)_100%)]" />
    </div>
  );
};
