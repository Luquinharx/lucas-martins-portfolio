import React from 'react';
import { motion } from 'framer-motion';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="animate-pulse-slow">
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-cyber-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyber-accent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/8 via-transparent to-cyber-accent/8" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyber-light/5 via-transparent to-cyber-secondary/5" />
      
      {/* Cruzeiro-inspired accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-30" />
    </div>
  );
};