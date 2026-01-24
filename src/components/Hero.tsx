"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Instagram, Linkedin } from "lucide-react"

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 relative inline-block"
          >
            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-cyber-primary via-cyber-accent to-cyber-light p-1 shadow-2xl shadow-cyber-primary/30">
              <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center overflow-hidden border-2 border-cyber-white/10">
                <img
                  src="https://i.im.ge/2025/06/24/J23uMS.bd9cba1f-190a-49eb-b513-e4fa887359ed.jpeg"
                  alt="Lucas Martins"
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyber-primary/60"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border border-cyber-accent/40"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyber-primary via-cyber-accent to-cyber-light bg-clip-text text-transparent">
              LUCAS MARTINS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl font-rajdhani text-cyber-accent mb-8 font-semibold"
          >
            Desenvolvedor Full Stack
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="relative mb-8"
          >
            <p className="text-lg font-rajdhani text-cyber-silver max-w-2xl mx-auto leading-relaxed">
              Construindo aplicações web modernas com foco em experiência do usuário e performance. Especializado em
              desenvolvimento front-end e back-end com tecnologias modernas.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Luquinharx",
                color: "hover:text-cyber-primary hover:border-cyber-primary/60",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/lqx/",
                color: "hover:text-cyber-accent hover:border-cyber-accent/60",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/luquinharx/",
                color: "hover:text-cyber-light hover:border-cyber-light/60",
                label: "Instagram",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-4 rounded-full border-2 border-cyber-silver/30 text-cyber-silver ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/20`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center text-cyber-primary"
        >
          <span className="text-sm font-rajdhani mb-2 font-medium">ROLE PARA BAIXO</span>
          <div className="p-2 rounded-full border-2 border-cyber-primary/40 bg-cyber-primary/10">
            <ChevronDown size={20} />
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 via-transparent to-cyber-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-cyber-light/5 via-transparent to-cyber-secondary/5 pointer-events-none" />
    </section>
  )
}
