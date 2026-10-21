import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Database, Globe, Shirt, ShoppingBag, HardHat, Brain, FolderGit2 } from 'lucide-react';
import tecknowhowImg from '../img/tecknowhow-landing.webp';
import verdonhaImg from '../img/verdonha-landing.webp';
import udistreetImg from '../img/udistreet-landing.webp';
import erpImg from '../img/erp-construcao.webp';
import viverImg from '../img/viver-clinica.webp';
import gitImg from '../img/git-card.webp';

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'TecKnowHow — Landing Page',
      description: 'Landing page para a empresa portuguesa de construção civil e remodelações TecKnowHow, otimizada para retenção e geração de leads, com animações em Framer Motion e UI/UX modernos.',
      image: tecknowhowImg,
      imagePosition: '50% 40%',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Design responsivo e com animações fluidas', 'Foco em geração de Leads e SEO', 'Provas sociais e portfólio de serviços'],
      liveUrl: 'https://www.tecknowhow.pt',
      githubUrl: null,
      category: 'Landing Page',
      icon: Globe,
    },
    {
      title: 'Verdonha — Landing Page',
      description: 'Landing page de pré-venda da camisa Campeão Série D da Verdonha, com produto em 3D guiado pela rolagem, pedido direto pelo WhatsApp e painel privado para a diretoria acompanhar pedidos, leads e vendas.',
      image: verdonhaImg,
      imagePosition: '50% 45%',
      technologies: ['React', 'Vite', 'Firebase', 'Vercel'],
      features: ['Produto em 3D animado pela rolagem', 'Pedidos pelo WhatsApp com painel de vendas'],
      liveUrl: 'https://verdonha.vercel.app',
      githubUrl: null,
      category: 'Landing Page',
      icon: Shirt,
    },
    {
      title: 'Udi Street — Landing Page',
      description: 'Landing page e loja online da Udi Street, marca de streetwear de Uberlândia, com identidade visual própria, vitrine em destaque, provador e painel de gestão de pedidos e catálogo.',
      image: udistreetImg,
      imagePosition: '50% 30%',
      technologies: ['React', 'Three.js', 'Fastify', 'Postgres'],
      features: ['Vitrine com ofertas, novidades e provador', 'Checkout, cupons e painel de gestão'],
      liveUrl: 'https://udistreet.com.br',
      githubUrl: null,
      category: 'Landing Page',
      icon: ShoppingBag,
    },
    {
      title: 'ERP de Construção Civil',
      description: 'Sistema de gestão para a TecKnowHow que reúne orçamentos, clientes, obras, materiais, funcionários e financeiro no mesmo sítio, com cálculo automático de custo/hora, impostos e geração de propostas em PDF.',
      image: erpImg,
      imagePosition: '50% 50%',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      features: ['Orçamentos com custo, venda e margem por serviço', 'Custo/hora e IRS calculados pelas tabelas oficiais'],
      liveUrl: null,
      githubUrl: null,
      category: 'Sistema / ERP',
      icon: HardHat,
    },
    {
      title: 'Viver Clínica — SaaS de Psicologia',
      description: 'Sistema de gestão para clínica de psicologia com prontuário, documentos com assinatura eletrônica, registro de frequência e agenda de salas para três unidades, com acesso por papel e trilha de auditoria.',
      image: viverImg,
      imagePosition: '0% 0%',
      technologies: ['Node.js', 'SQLite', 'JavaScript', 'HTML/CSS'],
      features: ['Prontuário e documentos com assinatura eletrônica', 'Agenda de salas com detecção de conflito'],
      liveUrl: null,
      githubUrl: null,
      category: 'Sistema / SaaS',
      icon: Brain,
    },
    {
      title: 'Veja Mais no GitHub',
      description: 'Explore mais projetos, scripts, automações, repositórios de estudos e contribuições open-source diretamente no meu perfil do GitHub.',
      image: gitImg,
      imagePosition: '50% 38%',
      technologies: ['Git', 'Repositórios', 'Open-Source', 'Scripts'],
      features: ['Automações e Scripts diversos', 'Contribuições para comunidade', 'Projetos e laboratórios de estudo'],
      liveUrl: null,
      githubUrl: 'https://github.com/Luquinharx',
      category: 'Repositórios',
      icon: FolderGit2,
    },
  ];

  return (
    <section id="projects" className="section-shell project-shell">
      <div className="section-container">
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
          className="grid lg:grid-cols-3 gap-7"
        >
          {projects.map((project, index) => {
            const visibleStacks = project.technologies.slice(0, 3);

            return (
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
                <div className="card-surface h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[16/10] min-h-[190px] bg-[#0a0e1a] flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: project.imagePosition }}
                      />
                    ) : (
                      <div className="relative flex flex-col items-center justify-center w-full h-full">
                        {/* Advanced Data Pipeline UI placeholder */}
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0066cc_1px,transparent_1px),linear-gradient(to_bottom,#0066cc_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                        <div className="flex animate-pulse items-center space-x-4">
                          <div className="w-12 h-12 border-2 border-cyber-primary text-cyber-primary rounded-xl flex items-center justify-center">
                            <Globe className="w-6 h-6" />
                          </div>
                          <div className="w-16 h-1 bg-cyber-primary/70"></div>
                          <Database className="w-16 h-16 text-cyber-primary drop-shadow-[0_0_15px_rgba(0,102,204,0.6)] group-hover:scale-110 transition-transform duration-500" />
                          <div className="w-16 h-1 bg-cyber-primary/70"></div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="w-6 h-6 bg-cyber-primary/40 rounded-sm"></div>
                            <div className="w-6 h-6 bg-cyber-primary/40 rounded-sm"></div>
                            <div className="w-6 h-6 bg-cyber-primary/40 rounded-sm"></div>
                            <div className="w-6 h-6 bg-cyber-primary/40 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/28 via-cyber-dark/14 to-cyber-dark/52 group-hover:from-cyber-dark/16 group-hover:via-cyber-dark/10 group-hover:to-cyber-dark/38 transition-all duration-300 pointer-events-none" />
                   
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 badge-pill">
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
                            className="p-3 bg-cyber-primary/20 rounded-2xl border border-cyber-primary/30 hover:bg-cyber-primary/30 transition-all duration-300"
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
                            className="p-3 bg-cyber-white/20 rounded-2xl border border-cyber-white/30 hover:bg-cyber-white/30 transition-all duration-300"
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
                  <div className="card-content-pad flex-1 flex flex-col">
                    <h3 className="card-heading mb-3 group-hover:text-cyber-primary transition-colors">
                      {project.title}
                    </h3>
                   
                    <p className="text-cyber-white-soft font-rajdhani mb-5 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mt-auto">
                      <h4 className="card-subheading mb-3">
                        Principais Recursos:
                      </h4>
                      <ul className="feature-grid">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="feature-item"
                          >
                            <span className="feature-dot" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5">
                        <h5 className="text-[11px] font-orbitron font-semibold tracking-[0.08em] text-cyber-secondary uppercase mb-2.5">
                          Stack
                        </h5>
                        <div className="project-stack-rail">
                          {visibleStacks.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="project-stack-chip"
                              title={tech}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
