import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Wrench, Globe, Brain } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'cyber-primary',
      techs: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'CSS3'],
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'cyber-secondary',
      techs: ['Node.js', 'Firebase', 'PostgreSQL', 'MongoDB', 'Next.js', 'API REST'],
    },
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      color: 'cyber-accent',
      techs: ['Google Gemini AI', 'n8n Automation', 'API Integration', 'Prompt Engineering', 'AI Workflows', 'Streaming AI'],
    },
    {
      icon: Wrench,
      title: 'Ferramentas',
      color: 'cyber-light',
      techs: ['Git', 'VS Code', 'Figma', 'Postman', 'NPM', 'Webpack'],
    },
    {
      icon: Globe,
      title: 'Metodologias',
      color: 'cyber-primary',
      techs: ['Scrum', 'Responsive Design', 'Clean Code', 'UI/UX', 'SEO', 'Performance'],
    },
  ];

  return (
    <section id="technologies" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">MINHAS</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> HABILIDADES</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Tecnologias e ferramentas que uso para construir experiências digitais excepcionais
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
              <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl p-6 h-full hover:border-cyber-primary/40 transition-all duration-300 relative overflow-hidden hover:shadow-lg hover:shadow-cyber-primary/10">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 via-transparent to-cyber-secondary/5"
                  animate={{
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Header */}
                <div className="flex flex-col items-center mb-6 relative z-10">
                  <div className={`p-3 rounded-2xl bg-${category.color}/20 border border-${category.color}/30 mb-3 group-hover:bg-${category.color}/30 transition-colors`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-orbitron font-semibold text-cyber-white text-center">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-2 relative z-10">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="bg-cyber-dark/50 border border-cyber-gray-light/30 rounded-2xl px-3 py-2 text-center hover:border-cyber-primary/50 transition-all duration-300 group/tech"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-rajdhani text-cyber-white-soft group-hover/tech:text-cyber-primary transition-colors">
                        {tech}
                      </span>
                    </motion.div>
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