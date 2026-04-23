"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, ShieldCheck, Users, Zap, Target, Heart } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const values = [
  {
    icon: Zap,
    title: "Agilidad",
    description: "Soluciones rápidas sin sacrificar calidad. Nos adaptamos a tus tiempos.",
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada proyecto se ajusta exactamente a lo que tu negocio necesita.",
  },
  {
    icon: Heart,
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito. Acompañamos cada proyecto de principio a fin.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="nosotros" className="relative py-24 sm:py-32">

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
            Quiénes somos
          </span>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Dos hermanos, una visión
          </h2>
        </motion.div>

        {/* Story */}
        <div className="mb-20 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted">
              Somos <span className="text-foreground font-semibold">AntonTech</span>, una empresa
              tecnológica fundada por dos hermanos con más de{" "}
              <span className="text-foreground font-semibold">13 años de experiencia combinada</span>{" "}
              en el sector tecnológico.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              <span className="text-cyan-400">+4 años en desarrollo Full Stack</span>{" "}
              creando plataformas y aplicaciones para grandes marcas.{" "}
              <span className="text-blue-400">+9 años en ciberseguridad e infraestructura IT/OT</span>{" "}
              protegiendo entornos industriales críticos en sectores como el farmacéutico y alimentario.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              No somos una gran corporación. Somos un equipo cercano con experiencia
              real en empresas de primer nivel, que ahora trabaja directamente contigo
              para ofrecerte soluciones a tu medida.
            </p>
          </motion.div>

          {/* Team cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {/* Brother 1 - Developer */}
            <div className="group rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-cyan-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 text-cyan-400">
                  <Code2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Desarrollo y Programación
                  </h3>
                  <p className="mt-1 text-xs font-medium text-cyan-400/70 mb-2">
                    +4 años de experiencia &middot; Full Stack Developer
                  </p>
                  <p className="text-sm text-muted">
                    Full Stack Developer con experiencia en plataformas de analítica
                    para grandes marcas. Dominio de JavaScript, PHP, Python, Angular, Laravel,
                    Node.js, APIs, SQL y Google Cloud.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/ra%C3%BAl-ant%C3%B3n-gonz%C3%A1lvez-342082158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-cyan-400 cursor-pointer"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Brother 2 - Security */}
            <div className="group rounded-2xl border border-white/[0.06] bg-card/50 p-6 transition-all duration-300 hover:border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 text-blue-400">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Sistemas y Ciberseguridad
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-400/70 mb-2">
                    +9 años de experiencia &middot; Head of Infrastructure
                  </p>
                  <p className="text-sm text-muted">
                    Líder en ciberseguridad industrial e infraestructura IT/OT.
                    Experiencia protegiendo entornos críticos en sectores farmacéutico
                    y alimentario. Especialista en IEC 62443, VMware, Fortinet y redes industriales.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/adrian-anton-gonzalvez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-blue-400 cursor-pointer"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Together */}
            <div className="group rounded-2xl border border-white/[0.06] bg-gradient-to-r from-cyan-500/10 via-card/50 to-blue-500/10 p-6 transition-all duration-300 hover:border-white/15">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-blue/20 text-foreground">
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Juntos = Solución Completa
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Desarrollo + Seguridad + Sistemas. Todo lo que necesitas en
                    un solo equipo, sin intermediarios ni complicaciones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/[0.06] bg-card/30 p-6 text-center transition-all duration-300 hover:border-white/10"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <value.icon className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {value.title}
              </h4>
              <p className="text-sm text-muted">{value.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
