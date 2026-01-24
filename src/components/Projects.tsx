import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ShoppingCart, Dumbbell, Brain } from 'lucide-react';
import tecknowhowImg from '../img/tecknowhow.PNG';
import dashImg from '../img/DASH.png';
import gyntaskImg from '../img/gyntask.PNG';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'TecKnowHow — Landing Institucional',
      description: 'Landing focada em geração de leads e apresentação de serviços. Implementada para desempenho e SEO, com seções de serviços, provas sociais e formulário de contacto.',
      image: tecknowhowImg,
      technologies: ['TypeScript', 'Node.js', 'HTML', 'CSS'],
      features: ['Design responsivo', 'Seções de serviços e portfólio', 'Formulário de contacto otimizado', 'SEO e desempenho'],
      liveUrl: 'https://www.tecknowhow.pt',
      githubUrl: 'https://github.com/Luquinharx/TecKnowHow',
      category: 'Landing',
      icon: ExternalLink,
    },
    {
      title: 'Dash — Plataforma de Analytics',
      description: 'Plataforma de dashboards e analytics com widgets personalizáveis. Inclui um agente de IA integrado que responde dúvidas em linguagem natural e gera gráficos/dashboards automaticamente a partir de comandos.',
      image: dashImg,
      technologies: ['Python', 'React', 'Tailwind CSS', 'Chart.js'],
      features: ['Agente de IA para consultas e geração de gráficos', 'Gráficos interativos e exportáveis', 'Filtros e segmentação avançada', 'Layouts responsivos'],
      liveUrl: null,
      githubUrl: null,
      category: 'Dashboards',
      icon: Brain,
    },
    {
      title: 'GymTask — Gestão para Academias',
      description: 'Plataforma de gestão para academias e atletas de triathlon, construída com TypeScript e Firebase. Permite gerir membros, planos, treinos personalizados, acompanhar progressos e controlar pagamentos de forma integrada.',
      image: gyntaskImg,
      technologies: ['TypeScript', 'React', 'Firebase', 'Node.js'],
      features: ['Gestão de membros e planos', 'Treinos e progressão personalizada', 'Painel de métricas e desempenho', 'Gestão de pagamentos e histórico'],
      liveUrl: null,
      githubUrl: null,
      category: 'Gestão',
      icon: Dumbbell,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">MEUS</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> PROJETOS</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Soluções inovadoras que demonstram minha expertise em desenvolvimento web moderno e inteligência artificial
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="group h-full"
            >
              <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl overflow-hidden hover:border-cyber-primary/40 transition-all duration-300 relative hover:shadow-lg hover:shadow-cyber-primary/10 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-cyber-dark/60 group-hover:bg-cyber-dark/40 transition-all duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-cyber-dark/80 backdrop-blur-sm rounded-3xl px-4 py-2 border border-cyber-primary/30">
                    <project.icon className="w-4 h-4 text-cyber-primary" />
                    <span className="text-xs font-rajdhani text-cyber-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-cyber-primary/20 backdrop-blur-sm rounded-3xl border border-cyber-primary/30 hover:bg-cyber-primary/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5 text-cyber-primary" />
                        </motion.a>
                      )}

                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-cyber-white/20 backdrop-blur-sm rounded-3xl border border-cyber-white/30 hover:bg-cyber-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 text-cyber-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-3 group-hover:text-cyber-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyber-white-soft font-rajdhani mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-rajdhani bg-cyber-dark/50 text-cyber-secondary px-3 py-1 rounded-2xl border border-cyber-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-orbitron font-semibold text-cyber-primary mb-3">
                      Principais Recursos:
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-xs font-rajdhani text-cyber-white-soft flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-cyber-accent rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};