import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Kyros Tecnologia | Fábrica de Software',
      position: 'Desenvolvedor',
      period: 'Dez de 2025 - Presente',
      location: 'Remoto',
      description:
        'Atuo no desenvolvimento de soluções de IA generativa, automação de processos e integrações inteligentes, criando aplicações que conectam dados, sistemas e usuários de forma mais eficiente.',
      achievements: [
        'Aumento na eficiência e recuperação de informações com LLMs, LangChain e arquiteturas RAG',
        'Automação de fluxos operacionais com n8n, Python e APIs, reduzindo etapas manuais',
        'Análise e visualização de dados com SQL, SAS e Power BI para tomada de decisão',
        'Desenvolvimento de agentes de IA e aplicações web (React, Next.js, Node.js)',
      ],
    },
    {
      company: 'Kyros Tecnologia | Fábrica de Software',
      position: 'Estagiário em Desenvolvimento de Chatbots e Automação com IA',
      period: 'Ago de 2025 - Dez de 2025',
      location: 'Remoto',
      description:
        'Atuação no suporte ao desenvolvimento de pipelines RAG para respostas contextuais e integração de fluxos com n8n e APIs externas, visando a prototipagem de soluções conversacionais.',
      achievements: [
        'Apoio na implementação de fluxos de automação de mensagens',
        'Participação nos projetos de agentes inteligentes com LLM',
        'Integração de serviços e APIs externas para coleta de dados',
      ],
    },
    {
      company: 'iCrop Gestão de Irrigação',
      position: 'Assistente de Tecnologia',
      period: 'Jul de 2024 - Fev de 2025',
      location: 'Híbrida',
      description:
        'Desenvolvi soluções de integração e automação para conectar dados climáticos de estações meteorológicas aos sistemas internos da plataforma de irrigação. Atuei na centralização de informações ao criar APIs com Node.js, React e integrações REST. Também automatizei rotinas internas com n8n e atuei no desenvolvimento da intranet da empresa.',
      achievements: [
        'Automatização de rotinas com n8n, melhorando a eficiência com dados climáticos',
        'Criação de APIs REST e integrações em Node.js e React',
        'Desenvolvimento da intranet para centralização de documentações',
        'Fluxos eficientes para relatórios operacionais',
      ],
    },
    {
      company: 'Algar Telecom',
      position: 'Analista de Suporte JR',
      period: 'Jun de 2022 - Jan de 2024',
      location: 'Híbrida',
      description:
        'Atuei no suporte técnico e monitoramento de redes de grande escala, garantindo estabilidade e continuidade operacional. Desenvolvi uma base sólida em diagnóstico técnico e resolução de problemas, competências que hoje aplico na criação de automações e integrações corporativas mais precisas.',
      achievements: [
        'Resolução ágil de problemas em redes de grande escala',
        'Análise de causa raiz e atuação em grupos de crise',
        'Melhoria contínua em atendimento e processos operacionais',
        'Documentação de incidentes técnicos complexos',
      ],
    },
  ];

  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">EXPERIÊNCIA</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> PROFISSIONAL</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Minha jornada profissional construindo soluções digitais modernas
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-accent rounded-full" />

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyber-primary rounded-full border-4 border-cyber-dark z-10 shadow-lg shadow-cyber-primary/50">
                  <motion.div
                    className="absolute inset-0 bg-cyber-primary rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <motion.div
                    className="card-surface card-content-pad group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Holographic Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyber-primary/10 via-transparent to-cyber-secondary/10"
                      animate={{
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />

                    {/* Header */}
                    <div className="relative z-10 mb-4">
                      <h3 className="card-heading mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-rajdhani text-cyber-primary mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm font-rajdhani text-cyber-white-soft">
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl border border-cyber-primary/20">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl border border-cyber-primary/20">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cyber-white-soft font-rajdhani mb-4 relative z-10">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="relative z-10">
                      <h5 className="card-subheading mb-3">
                        Principais Conquistas:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="feature-item"
                          >
                            <span className="feature-dot" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
