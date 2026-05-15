import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MessageCircle, Lightbulb, Target, Clock, Zap } from 'lucide-react';

export const SoftSkills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      level: 90,
      description: 'Colaboração efetiva em projetos e comunicação clara com colegas',
      color: 'cyber-primary',
    },
    {
      icon: MessageCircle,
      title: 'Comunicação',
      level: 85,
      description: 'Comunicação clara com clientes e apresentação de soluções técnicas',
      color: 'cyber-secondary',
    },
    {
      icon: Lightbulb,
      title: 'Resolução de Problemas',
      level: 95,
      description: 'Pensamento analítico e desenvolvimento de soluções criativas',
      color: 'cyber-accent',
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      level: 88,
      description: 'Orientação para entrega de projetos de qualidade dentro do prazo',
      color: 'cyber-light',
    },
    {
      icon: Clock,
      title: 'Gestão de Tempo',
      level: 87,
      description: 'Organização eficiente de tarefas e cumprimento de prazos',
      color: 'cyber-primary',
    },
    {
      icon: Zap,
      title: 'Adaptabilidade',
      level: 92,
      description: 'Aprendizado rápido e adaptação a novas tecnologias e metodologias',
      color: 'cyber-secondary',
    },
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">HABILIDADES</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> INTERPESSOAIS</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Competências pessoais que complementam minhas habilidades técnicas
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="group h-full"
            >
              <div className="card-surface card-content-pad h-full flex flex-col">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10"
                  animate={{
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Header */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="icon-badge mr-4">
                    <skill.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-orbitron font-semibold text-cyber-white leading-tight">
                      {skill.title}
                    </h3>
                    <p className="text-sm font-rajdhani text-cyber-white-soft">
                      {skill.level}% de Proficiência
                    </p>
                  </div>
                </div>

                {/* Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-6 flex-shrink-0">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-cyber-gray-light/30"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      className="text-cyber-primary"
                      initial={{ strokeDasharray: `0 ${2 * Math.PI * 50}` }}
                      animate={
                        inView
                          ? {
                              strokeDasharray: `${
                                (skill.level / 100) * 2 * Math.PI * 50
                              } ${2 * Math.PI * 50}`,
                            }
                          : { strokeDasharray: `0 ${2 * Math.PI * 50}` }
                      }
                      transition={{ duration: 2, delay: index * 0.1 }}
                    />
                  </svg>
                  
                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      className="text-2xl font-orbitron font-bold text-cyber-primary"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-center text-sm font-rajdhani text-cyber-white-soft leading-relaxed relative z-10 mt-auto">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="card-surface p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
              Filosofia Profissional
            </h3>
            <p className="text-lg font-rajdhani text-cyber-white-soft leading-relaxed">
              Acredito que o sucesso em desenvolvimento web vai além do conhecimento técnico.
              Combino habilidades interpessoais sólidas com expertise técnica para entregar
              soluções que realmente atendem às necessidades dos clientes, sempre mantendo
              foco na qualidade, comunicação clara e trabalho colaborativo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
