"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certEng = new URL("../img/engsoft.PNG", import.meta.url).href
const certDados = new URL("../img/dados.PNG", import.meta.url).href
const certAds = new URL("../img/ads.PNG", import.meta.url).href

export const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    {
      title: "Pós-graduação Lato Sensu, Engenharia de Software",
      issuer: "FAMEF",
      date: "ago de 2025",
      description: "Pós-graduação lato sensu com foco em práticas avançadas de engenharia de software.",
      image: certEng,
      verifyUrl: "#",
    },
    {
      title: "Pós-graduação Lato Sensu, Ciência de Dados e Big Data Analytics",
      issuer: "FAMEF",
      date: "ago de 2025",
      description: "Pós-graduação com foco em ciência de dados, modelagem e análise de grandes volumes de dados.",
      image: certDados,
      verifyUrl: "#",
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      issuer: "Unimar",
      date: "set 2024",
      description:
        "Curso superior voltado ao desenvolvimento de software, bancos de dados, engenharia de software e infraestrutura de sistemas.",
      image: certAds,
      verifyUrl: "#",
    },
  ]

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">CERTIFICADOS &</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              {" "}
              CURSOS
            </span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Certificações que validam minha expertise em tecnologias modernas de desenvolvimento web e inteligência
            artificial
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
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="group perspective-1000 h-full w-full max-w-[360px]"
            >
              <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl overflow-hidden hover:border-cyber-primary/40 transition-all duration-500 relative hover:shadow-lg hover:shadow-cyber-primary/10 h-full flex flex-col w-full">
                {/* Holographic Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyber-primary/20 via-transparent to-cyber-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,102,204,0.1), transparent, rgba(0,68,153,0.1))",
                      "linear-gradient(225deg, rgba(0,102,204,0.1), transparent, rgba(0,68,153,0.1))",
                      "linear-gradient(45deg, rgba(0,102,204,0.1), transparent, rgba(0,68,153,0.1))",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Certificate Image */}
                <div className="relative h-36 md:h-40 lg:h-48 flex-shrink-0 flex items-center justify-center bg-cyber-dark/5 p-3">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent" />

                  {/* Award Icon */}
                  <div className="absolute top-2 right-2 p-1.5 bg-cyber-primary/20 backdrop-blur-sm rounded-xl border border-cyber-primary/30">
                    <Award className="w-4 h-4 text-cyber-primary" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-4 relative z-10 flex flex-col flex-grow">
                  <h3 className="text-sm font-orbitron font-bold text-cyber-white mb-1 group-hover:text-cyber-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                    {cert.title}
                  </h3>

                  <p className="text-cyber-secondary font-rajdhani font-semibold mb-2 text-xs">{cert.issuer}</p>

                  <div className="flex items-center text-xs font-rajdhani text-cyber-white-soft mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </div>

                  <p className="text-xs font-rajdhani text-cyber-white-soft mb-4 leading-relaxed flex-grow line-clamp-4">
                    {cert.description}
                  </p>

                  {/* Verify Button */}
                  <motion.a
                    href={cert.verifyUrl}
                    className="inline-flex items-center justify-center px-3 py-1.5 bg-cyber-primary/20 border border-cyber-primary/30 rounded-xl text-xs font-rajdhani text-cyber-primary hover:bg-cyber-primary/30 transition-all duration-300 group/btn mt-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verificar
                    <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
