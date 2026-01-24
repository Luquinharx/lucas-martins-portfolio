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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
<<<<<<< HEAD
              Sou Desenvolvedor Full Stack, com sólida formação em Engenharia de Software, 
              Ciência de Dados e Inteligência Artificial, 
              atuando no desenvolvimento de soluções digitais inteligentes, 
              escaláveis e orientadas a resultados.
=======
              Olá! Sou um desenvolvedor Full Stack apaixonado por criar soluções web
              inovadoras e eficientes. Com experiência em desenvolvimento front-end e
              back-end, estou sempre buscando aprender novas tecnologias e aprimorar
              minhas habilidades.
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-6 leading-relaxed"
            >
<<<<<<< HEAD
              Nos últimos anos, concentrei minha atuação em Inteligência Artificial aplicada, trabalhando com LLMs, arquiteturas RAG, automações e agentes inteligentes capazes de resolver problemas reais de negócio. Desenvolvo soluções que combinam IA generativa, dados, automação e experiência do usuário, sempre com foco em confiabilidade, contexto e valor prático.
=======
              Minha jornada na programação começou com HTML, CSS e JavaScript, e
              desde então tenho expandido meu conhecimento para incluir frameworks
              modernos como React, Next.js, e tecnologias de back-end como Node.js.
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-6 leading-relaxed"
            >
<<<<<<< HEAD
              Tenho forte preocupação com qualidade de código, boas práticas, arquitetura limpa e manutenibilidade, entendendo que software bem construído precisa ser sustentável a longo prazo. Ao mesmo tempo, acredito que experiência do usuário e design funcional são componentes essenciais para o sucesso de qualquer produto digital.
=======
              Recentemente, tenho me especializado em <span className="text-cyber-primary font-semibold">
              Inteligência Artificial</span>, trabalhando com APIs como Google Gemini AI e 
              ferramentas de automação como n8n, criando aplicações que combinam IA 
              com experiência do usuário excepcional.
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg font-rajdhani text-cyber-white-soft mb-8 leading-relaxed"
            >
<<<<<<< HEAD
              Atuo com postura analítica, visão sistêmica e mentalidade de melhoria contínua, buscando constantemente evoluir processos, tecnologias e resultados. Meu objetivo é entregar soluções robustas, inteligentes e alinhadas às necessidades do negócio, transformando tecnologia em vantagem competitiva.
=======
              Acredito que o bom design e a experiência do usuário são tão importantes
              quanto o código bem escrito. Meu objetivo é criar aplicações que não apenas
              funcionem bem, mas também proporcionem uma experiência agradável e
              intuitiva para os usuários.
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6"
            >
              {[
<<<<<<< HEAD
                { number: '4', label: 'Anos de Experiência' },
=======
                { number: '2+', label: 'Anos de Experiência' },
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
                { number: '15+', label: 'Projetos Concluídos' },
                { number: '15+', label: 'Tecnologias Dominadas' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-3xl bg-cyber-gray/30 backdrop-blur-sm border border-cyber-primary/20">
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
<<<<<<< HEAD
                  'Pós-graduação em Engenharia de Software',
                  'Pós-graduação Ciência de Dados e Big Data Analytics',
                  'Pós-graduação Lato Sensu em Inteligência Artificial (em andamento)',
                  'Graduado em Análise e Desenvolvimento de Sistemas',
=======
                  'Pós-graduação em Engenharia de Software (Cursando)',
                  'Especialização em IA e APIs',
                  'Certificações em Desenvolvimento Web',
                  'Aprendizado Contínuo',
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
                ],
              },
              {
                icon: Zap,
                title: 'Valores Fundamentais',
                items: [
                  'Código Limpo e Organizado',
                  'Experiência do Usuário',
<<<<<<< HEAD
                  'Inovação com Inteligência Artificial',
                  'Qualidade, performance e escalabilidade',
=======
                  'Inovação com IA',
                  'Qualidade e Performance',
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl p-6 hover:border-cyber-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyber-primary/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-2xl bg-cyber-primary/20 mr-4 group-hover:bg-cyber-primary/30 transition-colors">
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
                      className="text-cyber-white-soft font-rajdhani flex items-center"
                    >
                      <span className="w-2 h-2 bg-cyber-accent rounded-full mr-3" />
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