"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certEng = new URL("../img/ads.PNG", import.meta.url).href
const certDados = new URL("../img/dados.PNG", import.meta.url).href
const certAds = new URL("../img/engsoft.PNG", import.meta.url).href

type Cert = {
  id: string
  title: string
  institution: string
  period: string
  description: string
  img: string
  imagePosition: string
  features: string[]
  category: string
  link?: string
}

const certificates: Cert[] = [
  {
    id: "pos-1",
    title: "Pós-graduação Lato Sensu: Ciência de Dados e Big Data Analytics",
    institution: "FAMEF",
    period: "Fev 2025 - Ago 2025",
    description:
      "Desenvolvimento de competências voltadas para o tratamento, visualização e interpretação de grandes volumes de dados. Aprofundei conhecimentos em ETL, modelagem de dados, mineração de dados e Big Data Analytics, sempre com foco na geração de insights estratégicos.",
    img: certDados,
    imagePosition: "50% 8%",
    features: [
      "Python & Power BI",
      "SQL & Apache Hadoop",
      "Machine Learning",
      "Data Storytelling",
    ],
    category: "Pós-Graduação",
    link: "",
  },
  {
    id: "pos-2",
    title: "Pós-graduação Lato Sensu: Engenharia de Software",
    institution: "FAMEF",
    period: "Fev 2025 - Ago 2025",
    description:
      "Aprofundei conhecimentos fundamentais para o desenvolvimento de sistemas robustos e escaláveis. Estudei com foco em arquitetura de software, engenharia de requisitos, design patterns, testes automatizados e integração contínua, aplicando práticas modernas de desenvolvimento ágil.",
    img: certAds,
    imagePosition: "50% 10%",
    features: [
      "Docker & CI/CD",
      "Microserviços & SOA",
      "Domain-Driven Design",
      "Spring Boot",
    ],
    category: "Pós-Graduação",
    link: "",
  },
  {
    id: "grad-1",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade de Marília (UNIMAR)",
    period: "Jan 2022 - Set 2024",
    description:
      "Durante o curso de Análise e Desenvolvimento de Sistemas pela UNIMAR, construí uma base sólida em lógica de programação, estruturas de dados, orientação a objetos e engenharia de software, com foco em desenvolver soluções tecnológicas eficientes e escaláveis.",
    img: certEng,
    imagePosition: "50% 12%",
    features: [
      "Node.js & React",
      "APIs REST",
      "MySQL & PostgreSQL",
      "Git & GitHub",
    ],
    category: "Graduação",
    link: "",
  },
]

export const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certificates" className="section-shell">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">MINHAS</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              {" "}
              FORMAÇÕES
            </span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Formações e certificações que validam minha expertise em desenvolvimento,
            dados e arquitetura de software
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
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
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
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: cert.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-cyber-dark/60 group-hover:bg-cyber-dark/40 transition-all duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 badge-pill">
                    <Award className="w-4 h-4 text-cyber-primary" />
                    <span className="text-xs font-rajdhani text-cyber-white">
                      {cert.category}
                    </span>
                  </div>

                  {/* Overlay Button */}
                  {cert.link && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-cyber-primary/20 backdrop-blur-sm rounded-2xl border border-cyber-primary/30 hover:bg-cyber-primary/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 text-cyber-primary" />
                      </motion.a>
                    </div>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="card-content-pad flex-1 flex flex-col">
                  <h3 className="card-heading mb-2 group-hover:text-cyber-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-rajdhani text-cyber-white-soft mb-1">
                    {cert.institution}
                  </p>

                  <div className="flex items-center text-xs text-cyber-white-softer mb-4">
                    <Calendar className="mr-2" size={14} /> <span>{cert.period}</span>
                  </div>

                  <p className="text-cyber-white-soft font-rajdhani mb-5 text-sm leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {/* Features */}
                  <div className="mt-auto">
                    <h4 className="card-subheading mb-3">
                      Competências:
                    </h4>
                    <ul className="chip-rail min-h-0">
                      {cert.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="stack-chip"
                        >
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
  )
}

export default Certificates
