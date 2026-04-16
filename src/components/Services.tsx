"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Code2,
  ShieldCheck,
  Server,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Creamos páginas web profesionales con WordPress y tecnologías modernas. Diseño atractivo, rendimiento óptimo y SEO incluido.",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    iconColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/30",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description:
      "Aplicaciones y plataformas diseñadas específicamente para tu negocio. Automatización, gestión y herramientas que se adaptan a ti.",
    gradient: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400",
    borderColor: "hover:border-blue-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Ciberseguridad",
    description:
      "Auditorías de seguridad, protección de sistemas y consultoría especializada. Mantén tu empresa protegida contra amenazas digitales.",
    gradient: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    icon: Server,
    title: "Sistemas e Infraestructura",
    description:
      "Configuración, mantenimiento y administración de servidores e infraestructura IT. Optimizamos tu entorno tecnológico.",
    gradient: "from-violet-500/20 to-violet-500/5",
    iconColor: "text-violet-400",
    borderColor: "hover:border-violet-500/30",
  },
  {
    icon: Rocket,
    title: "Digitalización de Empresas",
    description:
      "Transformación digital completa: automatización de procesos, migración a la nube y modernización de herramientas de trabajo.",
    gradient: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-500/30",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="servicios" className="relative py-24 sm:py-32">

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Servicios
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Todo lo que tu empresa necesita
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Ofrecemos soluciones tecnológicas completas para que puedas centrarte
            en lo que mejor sabes hacer: hacer crecer tu negocio.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${service.borderColor} cursor-pointer`}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${service.iconColor}`}
                >
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Text */}
                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
