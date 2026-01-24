import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lucasmartinsa3009@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 34 99879-1817',
      link: 'tel:+5534998791817',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'Minas Gerais, Brasil',
      link: 'https://www.google.com/maps/place/uberlandia/data=!4m2!3m1!1s0x94a4450c10bbbaef:0xae370c93616d5c9c?sa=X&ved=1t:242&ictx=111',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      url: 'https://github.com/Luquinharx',
      color: 'hover:text-cyber-white',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lqx/',
      color: 'hover:text-cyber-accent',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      url: 'https://www.instagram.com/luquinharx/',
      color: 'hover:text-cyber-primary',
    },
  ];

  const whatsappNumber = '5534998791817';
  const whatsappMessage = 'Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-cyber-white">ENTRE EM</span>
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent"> CONTATO</span>
          </h2>
          <p className="text-xl font-rajdhani text-cyber-white-soft max-w-3xl mx-auto">
            Pronto para colaborar no seu próximo projeto? Vamos criar algo incrível juntos
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Information */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-8">
              Informações de Contato
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl hover:border-cyber-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyber-primary/10"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="p-3 rounded-full bg-cyber-primary/20 border border-cyber-primary/30 mr-4 group-hover:bg-cyber-primary/30 transition-colors">
                    <info.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-cyber-white mb-1">
                      {info.title}
                    </h4>
                    <p className="font-rajdhani text-cyber-white-soft">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-orbitron font-semibold text-cyber-white mb-4">
                Me Siga
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className={`p-3 rounded-full border border-cyber-gray-light ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-current/20`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Contact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-cyber-gray/40 backdrop-blur-sm border border-cyber-primary/20 rounded-3xl p-12 text-center hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/10">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>

              <h3 className="text-2xl font-orbitron font-bold text-cyber-white mb-4">
                Vamos Conversar!
              </h3>

              <p className="text-cyber-white-soft font-rajdhani mb-8 leading-relaxed">
                Entre em contato comigo diretamente pelo WhatsApp para discutir seu projeto,
                tirar dúvidas ou apenas bater um papo sobre tecnologia.
              </p>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-orbitron font-bold rounded-full hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Chamar no WhatsApp
              </motion.a>

              <p className="text-sm font-rajdhani text-cyber-white-soft mt-4">
                +55 34 99879-1817
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-cyber-primary/20 text-center"
        >
          <p className="font-rajdhani text-cyber-white-soft">
<<<<<<< HEAD
            © 2024 Portfólio Profissional. Feito por Lucas Martins.
=======
            © 2024 Portfólio Profissional. Construído com React, TypeScript & Framer Motion.
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
          </p>
        </motion.div>
      </div>
    </section>
  );
};