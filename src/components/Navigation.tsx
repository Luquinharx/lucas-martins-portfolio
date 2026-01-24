import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, FolderOpen, Award, Heart, MessageCircle } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'technologies', 'experience', 'projects', 'certificates', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'Sobre', icon: User },
    { href: '#technologies', label: 'Tecnologias', icon: Code },
    { href: '#experience', label: 'Experiência', icon: Briefcase },
    { href: '#projects', label: 'Projetos', icon: FolderOpen },
    { href: '#certificates', label: 'Certificados', icon: Award },
    { href: '#skills', label: 'Habilidades', icon: Heart },
    { href: '#contact', label: 'Contato', icon: MessageCircle },
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-cyber-gray/80 backdrop-blur-xl border-2 border-cyber-primary/30 rounded-3xl p-4 shadow-2xl shadow-cyber-primary/20">
        {/* Cruzeiro Inspired Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-primary/10 via-transparent to-cyber-secondary/10 rounded-3xl" />
        
        <div className="space-y-4 relative z-10">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                className={`group relative flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyber-primary to-cyber-accent text-cyber-white shadow-lg shadow-cyber-primary/40 border-2 border-cyber-white/20'
                    : 'text-cyber-silver hover:text-cyber-white hover:bg-gradient-to-r hover:from-cyber-primary/20 hover:to-cyber-accent/20 border-2 border-transparent hover:border-cyber-primary/30'
                }`}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <item.icon size={22} />
                
                {/* Enhanced Tooltip */}
                <motion.div
                  className="absolute left-20 bg-gradient-to-r from-cyber-dark to-cyber-gray backdrop-blur-sm text-cyber-white text-sm font-rajdhani font-medium px-4 py-3 rounded-2xl border-2 border-cyber-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg shadow-cyber-primary/20"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-gradient-to-r from-cyber-dark to-cyber-gray rotate-45 border-l-2 border-b-2 border-cyber-primary/30" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-white/10 to-transparent animate-shimmer rounded-2xl" />
                </motion.div>

                {/* Active indicator glow */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-accent rounded-2xl opacity-20 animate-pulse"
                    layoutId="activeNav"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-gold rounded-full animate-pulse" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyber-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </motion.nav>
  );
};