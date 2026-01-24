import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Kyros Tecnologia | Fábrica de Software',
      position: 'Desenvolvedor',
      period: 'Jun de 2025 - Presente',
      location: 'Remoto',
      description:
        'Atuação no desenvolvimento de soluções de IA generativa e chatbots inteligentes baseados em LLMs, utilizando LangChain, Chainlit e arquiteturas RAG (Retrieval-Augmented Generation) para busca, recuperação e síntese de informações em linguagem natural. Integração e orquestração de fluxos automatizados com n8n, prototipagem de agentes conversacionais e implementação de front-ends em React/Next.js para dashboards interativos.',
      achievements: [
        'Implementação de pipelines RAG para respostas contextuais e precisas',
        'Desenvolvimento de agentes de IA para automação de mensagens e atendimento',
        'Integração de fluxos com n8n e APIs externas para automação',
        'Criação de dashboards interativos para visualização de resultados de modelos',
      ],
    },
    {
      company: 'Sankhya Gestão de Negócios',
      position: 'Consultor de Suporte',
      period: 'jun de 2025 - ago de 2025',
      location: 'Presencial',
      description:
        'Atuei como Consultor de Suporte Técnico especializado na plataforma ERP Sankhya, oferecendo atendimento consultivo e soluções eficazes para clientes de diversos segmentos. Realizava diagnóstico e resolução de problemas técnicos, suporte a integrações com bancos de dados (SQL, Oracle) e APIs, além de correção de inconsistências em processos críticos.',
      achievements: [
        'Diagnóstico e resolução de problemas em ambientes ERP críticos',
        'Suporte a integrações via bancos de dados e APIs',
        'Correção de bugs e melhoria de estabilidade em módulos críticos',
        'Atendimento consultivo a clientes com diferentes níveis de complexidade',
      ],
    },
    {
      company: 'iCrop Gestão de Irrigação',
      position: 'Assistente de Tecnologia',
      period: 'jul de 2024 - fev de 2025',
      location: 'Híbrida',
      description:
        'Responsável pelo suporte técnico a clientes nacionais e internacionais, desenvolvimento de APIs para integração com estações meteorológicas (Davis, Metos, Zeus) e automação de processos da plataforma de irrigação. Desenvolvi páginas e intranet usando Node.js, JavaScript e React, além de criar rotinas de extração e análise de dados para relatórios operacionais.',
      achievements: [
        'Desenvolvimento de APIs e integrações com estações meteorológicas',
        'Criação de intranet e ferramentas internas com React e Node.js',
        'Automatização de leitura e processamento de faturas e dados',
        'Geração de relatórios e dashboards para suporte à decisão',
      ],
    },
    {
      company: 'Algar Telecom',
      position: 'Analista de Suporte JR',
      period: 'jun de 2022 - jan de 2024',
      location: 'Híbrida',
      description:
        'Gerenciei chamados técnicos e monitorei redes de grande escala, garantindo estabilidade e performance operacional. Atuei em grupos de crise para restauração de serviços críticos e realizei atendimentos especializados com foco em diagnóstico preciso e resolução eficiente de problemas.',
      achievements: [
        'Monitoramento e manutenção de infraestrutura de rede de larga escala',
        'Participação em equipes de restauração de serviços críticos',
        'Atendimentos especializados com foco em diagnóstico e resolução',
        'Documentação de procedimentos e transferência de conhecimento',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl p-6 hover:border-cyber-primary/40 transition-all duration-300 relative overflow-hidden group hover:shadow-lg hover:shadow-cyber-primary/10"
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
                      <h3 className="text-xl font-orbitron font-bold text-cyber-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-rajdhani text-cyber-primary mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm font-rajdhani text-cyber-white-soft">
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center bg-cyber-dark/50 px-3 py-1 rounded-2xl">
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
                      <h5 className="text-sm font-orbitron font-semibold text-cyber-secondary mb-3">
                        Principais Conquistas:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-sm font-rajdhani text-cyber-white-soft flex items-center"
                          >
                            <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3" />
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