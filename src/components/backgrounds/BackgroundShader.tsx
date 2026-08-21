import React, { useEffect, useRef } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

/**
 * Fundo do site: mesh gradient WebGL + campo de estrelas.
 *
 * A estrutura de camadas aqui e deliberada. Retangulo preto durante o scroll e
 * tile que o compositor nao rasterizou a tempo, e ele aparece quando ha muitas
 * camadas grandes promovidas empilhadas. Por isso:
 *
 * - nada aqui usa transform nem will-change: um unico elemento promovido do
 *   tamanho da viewport obriga tudo que esta acima dele a ser promovido junto;
 * - os tres veus (escurecer + grao + vinheta) sao UM elemento so, com os
 *   backgrounds empilhados, em vez de tres elementos sobrepostos;
 * - o que anima (estrelas piscando e cadentes) fica por ULTIMO no DOM: assim
 *   nenhuma camada grande precisa ser promovida por sobrepor um elemento
 *   animado, e as camadas promovidas sao todas de poucos pixels;
 * - o campo de estrelas e pintado UMA vez no canvas, sem requestAnimationFrame.
 */

const seeded = (seed: number) => {
  const value = Math.sin(seed * 43758.5453123) * 10000;
  return value - Math.floor(value);
};

// estrelas que piscam: poucas, animadas por CSS, cada uma com poucos pixels
const twinkles = Array.from({ length: 18 }, (_, i) => ({
  left: seeded(i + 11) * 100,
  top: seeded(i + 211) * 100,
  size: seeded(i + 311) * 1.6 + 1.1,
  duration: seeded(i + 411) * 5 + 4,
  delay: seeded(i + 511) * 12,
}));

// estrelas cadentes: 3, com ciclos primos entre si para nunca cairem juntas.
// O risco so aparece em ~12% do ciclo; o resto e espera.
const shooting = [
  { top: 6, left: 8, cycle: 19, delay: 5 },
  { top: 24, left: 46, cycle: 26, delay: 14 },
  { top: 2, left: 70, cycle: 37, delay: 27 },
];

export const BackgroundShader: React.FC = () => {
  const veilRef = useRef<HTMLDivElement>(null);

  // --- campo de estrelas ---
  // Desenhado num canvas fora da tela e aplicado como IMAGEM no veu. Um
  // <canvas> no DOM vira camada de compositor propria ("Canvas"), e tudo que o
  // sobrepoe herda promocao por "Overlap" - inclusive o <main>, que tem a
  // altura da pagina toda. Como background-image, some uma camada grande.
  useEffect(() => {
    const veil = veilRef.current;
    if (!veil) return;

    const paint = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      // 1.25x ja deixa os pontos nitidos e segura a memoria de GPU: em 1080p
      // sao ~13 MB de textura em vez de ~22 MB a 1.5x
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

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

      // vira imagem: o canvas e descartado e nao existe no DOM
      veil.style.setProperty('--stars', `url("${canvas.toDataURL('image/png')}")`);
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

      {/* veu unico: grao + vinheta + estrelas + escurecer, tudo no mesmo
          elemento, para nao empilhar varias camadas do tamanho da viewport */}
      <div ref={veilRef} className="absolute inset-0 bg-veil" />

      {/* o que anima fica por ultimo: nada grande precisa ser promovido acima */}
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
    </div>
  );
};
