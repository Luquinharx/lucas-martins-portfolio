import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Zap, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                <span className="text-cyber-white">SOBRE</span>
                <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> MIM</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-full" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-6 leading-relaxed"
            >
              Sou desenvolvedor focado em Automação, RPA e Inteligência Artificial aplicada a negócios. Atuo desenvolvendo automações com n8n, Python, APIs, SQL e integrações, além de soluções avançadas com IA generativa, LLMs, arquiteturas RAG e agentes inteligentes para transformar processos repetitivos em fluxos eficientes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-6 leading-relaxed"
            >
              Muitas empresas perdem tempo com tarefas operacionais e retrabalho. Minha atuação resolve esse problema reduzindo o trabalho manual e libertando os times para decisões estratégicas.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-6 leading-relaxed"
            >
              Também possuo experiência em desenvolvimento web, utilizando tecnologias como React, Next.js, Node.js, TypeScript e Tailwind CSS. Isso me permite unir o backend das automações à criação de interfaces e dashboards robustos, tornando essas soluções facilmente acessíveis ao usuário final.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-8 leading-relaxed"
            >
              Meu foco é construir ecossistemas de soluções úteis, escaláveis e orientadas a resultados: menos tarefas manuais, mais eficiência operacional e inteligência tecnológica realmente aplicada como vantagem competitiva para o negócio.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-5"
            >
              {[
                { number: '4', label: 'Anos de Experiência' },
                { number: '15+', label: 'Projetos Concluídos' },
                { number: '15+', label: 'Tecnologias Dominadas' },
              ].map((stat, index) => (
                <div key={index} className="card-surface text-center p-4">
                  <div className="text-2xl font-orbitron font-bold text-cyber-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-rajdhani text-cyber-white-soft">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: User,
                title: 'Informações Pessoais',
                items: [
                  'Nome: Lucas Martins',
                  'Localização: Minas Gerais, BR',
                  'Email: lucasmartinsa3009@gmail.com',
                  'Telefone: +55 34 99879-1817',
                ],
              },
              {
                icon: Target,
                title: 'Especialização',
                items: [
                  'Desenvolvimento Frontend',
                  'Desenvolvimento Backend',
                  'Inteligência Artificial',
                  'Automação com n8n',
                ],
              },
              {
                icon: GraduationCap,
                title: 'Formação',
                items: [
                  'Pós-graduação Lato Sensu em Inteligência Artificial',
                  'Pós-graduação em Engenharia de Software',
                  'Graduado em Análise e Desenvolvimento de Sistemas',
                ],
              },
              {
                icon: Zap,
                title: 'Valores Fundamentais',
                items: [
                  'Código Limpo e Organizado',
                  'Experiência do Usuário',
                  'Inovação com Inteligência Artificial',
                  'Qualidade, performance e escalabilidade',
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-surface card-content-pad group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="icon-badge mr-4">
                    <card.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold text-cyber-white">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-cyber-white-soft font-rajdhani flex items-start leading-relaxed"
                    >
                      <span className="feature-dot mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
