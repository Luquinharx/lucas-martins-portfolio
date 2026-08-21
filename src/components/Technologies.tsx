import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Server, Wrench } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      icon: Code,
      title: 'Frontend',
      techs: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'UI Responsiva',
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      techs: [
        'Node.js',
        'APIs REST',
        'Webhooks',
        'Integrações de Sistemas',
        'Arquitetura de Serviços',
        'Automação de Rotinas',
      ],
    },
    {
      icon: Database,
      title: 'Dados',
      techs: [
        'SQL',
        'ETL',
        'Power BI',
        'Web Scraping',
        'Modelagem de Dados',
        'SAS (Analytics)',
      ],
    },
    {
      icon: Brain,
      title: 'IA & Automação',
      techs: [
        'n8n',
        'Python',
        'LLMs',
        'RAG',
        'LangChain',
        'Agentes Inteligentes',
      ],
    },
    {
      icon: Wrench,
      title: 'Outros',
      techs: [
        'Git & GitHub',
        'Docker',
        'Postman',
        'Scrum',
        'Clean Code',
        'SEO & Performance',
      ],
    },
  ];

  return (
    <section id="technologies" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">MINHAS </span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">HABILIDADES</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Stack principal que utilizo para construir automações, produtos web e soluções orientadas a dados
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              className="group"
            >
              <div className="tech-card-surface">
                {/* Brilho de fundo estatico - ver comentario em Experience.tsx */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10 opacity-30" />

                {/* Header */}
                <div className="flex flex-col items-center gap-3 mb-5 relative z-10">
                  <div className="icon-badge rounded-2xl">
                    <category.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <h3 className="tech-card-title">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="tech-line-list">
                  {category.techs.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-line-chip group/tech"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-cyber-white-soft group-hover/tech:text-cyber-primary transition-colors">
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
