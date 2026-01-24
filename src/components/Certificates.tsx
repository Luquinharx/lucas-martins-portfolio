"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, ExternalLink } from "lucide-react"

<<<<<<< HEAD
const certEng = new URL("../img/engsoft.PNG", import.meta.url).href
const certDados = new URL("../img/dados.PNG", import.meta.url).href
const certAds = new URL("../img/ads.PNG", import.meta.url).href

=======
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
export const Certificates: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificates = [
    {
<<<<<<< HEAD
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
=======
      title: "Análise e Desenvolvimento de Sistemas",
      issuer: "Unimar",
      date: "Set 2024",
      description:
        "Curso superior voltado à desenvolvimento de software, bancos de dados, engenharia de software e infraestrutura de sistemas.",
      image: "https://i.im.ge/2025/06/24/J2vmaK.certificado1.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/education/1742266446896/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Introdução ao Node.js",
      issuer: "Rocketseat",
      date: "Mar 2025",
      description:
        "Desenvolvimento de APIs REST com Express e TypeScript, gerenciamento de bancos de dados com PostgreSQL.",
      image: "https://i.im.ge/2025/06/24/J2v6pX.cert1.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1741130964882/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "Microsoft",
      date: "Fev 2025",
      description:
        "Certificação em fundamentos da linguagem C#, com foco em programação estruturada e orientação a objetos.",
      image: "https://i.im.ge/2025/06/24/J2vtwh.cert3.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1740061710769/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Introdução à Ciência de Dados",
      issuer: "FGV",
      date: "Fev 2025",
      description:
        "Certificação foco em estatística, técnicas de modelagem e aplicação de dados na solução de problemas reais.",
      image: "https://i.im.ge/2025/06/24/J2vyKM.cert-4.png",
      verifyUrl:
        "#https://www.linkedin.com/in/lqx/details/certifications/1740700873197/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "NLW Connect - Fullstack",
      issuer: "Rocketseat",
      date: "Fev 2025",
      description: "Curso com foco no desenvolvimento de aplicações front-end.",
      image: "https://i.im.ge/2025/06/24/J2vCXY.cert5.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1740229099828/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Programação em Python",
      issuer: "Udemy",
      date: "Jan 2025",
      description:
        "Formação completa em Python, abordando desde os fundamentos até tópicos avançados como Programação Orientada a Objetos, manipulação de dados com Pandas e NumPy, e desenvolvimento de aplicações web com Flask.",
      image: "https://i.im.ge/2025/06/24/J2vEiD.cert6.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1740783961976/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Introdução ao Git e GitHub",
      issuer: "FGV",
      date: "Jan 2025",
      description:
        "Certificação com foco em controle de versão e colaboração em projetos. O curso abordou o uso prático do Git e GitHub,",
      image: "https://i.im.ge/2025/06/24/J2vxb4.cert7.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1738343078775/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
    },
    {
      title: "Banco de Dados SQL Server",
      issuer: "Cursa",
      date: "Fev 2025",
      description: "Certificação com foco no uso prático do SQL Server",
      image: "https://i.im.ge/2025/06/24/J2vcAp.cert8.png",
      verifyUrl:
        "https://www.linkedin.com/in/lqx/details/certifications/1739988607881/single-media-viewer/?profileId=ACoAADF8Nn4Bd71b_hkdR9Igjz7tGGhIvBi34sw",
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
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
<<<<<<< HEAD
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center"
=======
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
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
<<<<<<< HEAD
              className="group perspective-1000 h-full w-full max-w-[360px]"
            >
              <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl overflow-hidden hover:border-cyber-primary/40 transition-all duration-500 relative hover:shadow-lg hover:shadow-cyber-primary/10 h-full flex flex-col w-full">
=======
              className="group perspective-1000 h-full"
            >
              <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl overflow-hidden hover:border-cyber-primary/40 transition-all duration-500 relative hover:shadow-lg hover:shadow-cyber-primary/10 h-full flex flex-col">
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
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
<<<<<<< HEAD
                <div className="relative h-36 md:h-40 lg:h-48 flex-shrink-0 flex items-center justify-center bg-cyber-dark/5 p-3">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent" />
=======
                <div className="relative h-32 overflow-hidden flex-shrink-0">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent" />
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f

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
