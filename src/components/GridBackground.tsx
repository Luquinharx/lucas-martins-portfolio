import React from 'react';
import { motion } from 'framer-motion';

const seeded = (seed: number) => {
  const value = Math.sin(seed * 43758.5453123) * 10000;
  return value - Math.floor(value);
};

const staticStars = Array.from({ length: 180 }, (_, i) => ({
  left: seeded(i + 1) * 100,
  top: seeded(i + 101) * 100,
  size: seeded(i + 201) * 1.5 + 0.3,
  opacity: seeded(i + 301) * 0.55 + 0.15,
}));

const twinkleStars = Array.from({ length: 130 }, (_, i) => ({
  left: seeded(i + 501) * 100,
  top: seeded(i + 701) * 100,
  size: seeded(i + 901) * 2.2 + 0.8,
  peak: seeded(i + 1001) * 0.5 + 0.45,
  duration: seeded(i + 1101) * 4 + 2.5,
  delay: seeded(i + 1201) * 10,
}));

const driftingStars = Array.from({ length: 30 }, (_, i) => ({
  left: seeded(i + 1401) * 100,
  top: seeded(i + 1501) * 100,
  size: seeded(i + 1601) * 2.6 + 1.2,
  yTravel: seeded(i + 1701) * 18 + 8,
  xTravel: seeded(i + 1801) * 10 - 5,
  duration: seeded(i + 1901) * 14 + 16,
  delay: -seeded(i + 2001) * 18,
}));

const satellites = Array.from({ length: 5 }, (_, i) => ({
  left: seeded(i + 2101) * 90 + 4,
  top: seeded(i + 2201) * 78 + 10,
  orbit: seeded(i + 2301) * 130 + 90,
  duration: seeded(i + 2401) * 22 + 26,
  reverse: i % 2 === 0,
  delay: -seeded(i + 2501) * 10,
}));

const dataStreams = Array.from({ length: 9 }, (_, i) => ({
  left: seeded(i + 2601) * 100,
  top: seeded(i + 2701) * 100,
  width: seeded(i + 2801) * 140 + 60,
  rotate: seeded(i + 2901) * 60 - 30,
  duration: seeded(i + 3001) * 7 + 8,
  delay: seeded(i + 3101) * 10,
}));

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020611]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(20,80,210,0.42),rgba(1,8,24,0.9)_54%,rgba(0,2,8,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(115,200,255,0.18),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(0,170,255,0.14),transparent_34%),radial-gradient(circle_at_52%_92%,rgba(14,165,140,0.12),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.23] [background-image:radial-gradient(ellipse_at_top,rgba(255,255,255,0.22),transparent_55%)]" />

      {staticStars.map((star, i) => (
        <div
          key={`static-star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: '0 0 7px rgba(255,255,255,0.55)',
          }}
        />
      ))}

      {twinkleStars.map((star, i) => (
        <motion.div
          key={`twinkle-star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 10px rgba(255,255,255,0.75)',
          }}
          animate={{
            opacity: [0.1, star.peak, 0.1],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {driftingStars.map((star, i) => (
        <motion.div
          key={`drift-star-${i}`}
          className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(180,220,255,0.8)]"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            y: [0, -star.yTravel, 0],
            x: [0, star.xTravel, 0],
            opacity: [0.3, 0.95, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {satellites.map((sat, i) => (
        <motion.div
          key={`satellite-${i}`}
          className="absolute rounded-full border border-cyber-accent/15"
          style={{
            left: `${sat.left}%`,
            top: `${sat.top}%`,
            width: `${sat.orbit}px`,
            height: `${sat.orbit}px`,
          }}
          animate={{ rotate: sat.reverse ? -360 : 360 }}
          transition={{
            duration: sat.duration,
            repeat: Infinity,
            delay: sat.delay,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 rounded-full border border-cyber-primary/10 border-dashed" />
          <motion.div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyber-accent/80 shadow-[0_0_14px_rgba(0,170,255,0.65)]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      ))}

      {dataStreams.map((stream, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyber-accent/75 to-transparent"
          style={{
            left: `${stream.left}%`,
            top: `${stream.top}%`,
            width: `${stream.width}px`,
            rotate: `${stream.rotate}deg`,
          }}
          animate={{
            x: [-24, 24, -24],
            opacity: [0.04, 0.32, 0.04],
          }}
          transition={{
            duration: stream.duration,
            repeat: Infinity,
            delay: stream.delay,
            ease: 'linear',
          }}
        />
      ))}

      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`comet-${i}`}
          className="absolute w-[2px] h-24 bg-gradient-to-b from-white to-transparent"
          style={{
            left: `${14 + i * 20}%`,
            top: `${-10 - i * 4}%`,
            rotate: '34deg',
            opacity: 0,
          }}
          animate={{
            x: ['-22vw', '36vw'],
            y: ['-20vh', '130vh'],
            opacity: [0, 0.95, 0],
          }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            repeatDelay: 9 + i * 2.4,
            delay: i * 1.8,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
};
